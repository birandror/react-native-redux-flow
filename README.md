# react-native-redux-flow
### Setup
1. ```react-native init <project name>```
2. ```npm install --save react-redux redux redux-thunk```
3. Directory structure  
```/src
/src/App.js
/src/components  
/src/containers  
/src/services
/src/store  
/src/store/reducres.js  
/src/store/<domain>/reducer.js
/src/store/<domain>/actionsTypes
/src/store/<domain>/actions.js
```  
4. Use the following boiler plate for App.js
 ```
 import React, {Component} from 'react';
 import {View, Text} from 'react-native';
 import {Provider} from 'react-redux';
 import {createStore,applyMiddleware,combineReducers} from 'redux';
 import thunk from 'redux-thunk';
 import reducers from './store/reducers';
 
 class App extends Component {
 
     render() {
         const store = createStore(combineReducers(reducers),{},applyMiddleware(thunk));
         return (
             <Provider store={store}>
                 <View>
                     <Text>
                         Hello!
                     </Text>
                 </View>
             </Provider>
         )
     }
 }
 
 export default App;
```
5. Clear out index.iox and index.android and use:
```
import {AppRegistry} from 'react-native';
import App from './src/App';
AppRegistry.registerComponent('<project_name>', () => App);
```
6. Add the following Boiler plate to reducers.js
```
import <domain> from './<domain>/reducer';

export default({
    <domain>: <domain>
});
```

7. Create your first <domain> reducer

```
// reducers hold the store's state (the initialState object defines it)
// reducers also handle plain object actions and modify their state (immutably) accordingly
// this is the only way to change the store's state
// the other exports in this file are selectors, which is business logic that digests parts of the store's state
// for easier consumption by views

import * as types from './actionsTypes'
import _ from 'lodash';

const INITIAL_STATE = {
    a: "Hello World",
    b: []
};

export default function reduce(state = INITIAL_STATE, action = {}){
    switch (action.type) {
        case types.ACTION_TYPE:
            return {...state,a: action.newA};
        default:
            return state;
    }
};

//selectors
export function getA(state) {
    return state.<domain>.a;
}
```

8. Add actionsTypes to actionsTypes.js

```
// strings should be unique across reducers so namespace them with the reducer name

export const ACTION_TYPE = 'game.ACTION_TYPE';
```

9. Add a connected component to src/containers/ you can use the following boiler plate:  

```
// containers are "smart" react components that are aware of redux
// they are connected to the redux store and listen on part of the app state
// they use mapStateToProps to specify which parts and use selectors to read them
// Smart components are not allowed to have any logic except dispatching actions.
// avoid having view logic & local component state in them, use "dumb" components instead

import React, { Component } from 'react';
import {View,Text} from 'react-native'
import { connect } from 'react-redux';

import * as <domain>Selectors from '../store/<domain>/reducer'

class <ComponentName> extends Component {
    componentWillMount(){} //when render

    render() {
        return (
            <Text>{this.props.a}</Text>
        );
    }
}

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
    return {
        a: <domain>Selectors.gatA(state)
    };
}

export default connect(mapStateToProps)(<ComponentName>);
```

10. import the component to your App.js file and use it

Greate you are on the right track. Try running `react-native run-ios` You should now see "Hello World" on your screen.

11. It's time to create your first action. in {domain}/actions.js use this boler plate:

```
import * as types from './actionsTypes';

export const <actionName> = (text) => {
    return {
        type: types.<ACTION_TYPE>,
        payload: text
    }
};
```
You will need to add the <ACTION_TYPE> to your actionsTypes.js file

12. Handle this action as a case in the reducer

```
case types.<ACTION_TYPE>:
             return {...state,a: action.payload};
```

13. dispatch the action from the component

You can do it before the component gets rendered using componentWillMount

```
import * as <domain>Actions from '../store/<domain>/actions'

class Game extends Component {

    componentWillMount(){
        this.props.dispatch(<domain>Actions.<actionName>("New Text"));
    }
...
```
You should now see "New Text" on the screen

You can also do it with a Button

```
import {Button} from 'react-native'
...
<Button
                    onPress={() => {<domain>Actions.<actionName>("New Text")}}
                    title ="reset"
                    color="#841584"
                />
...
```
Clicking on the buton will change the text to the new text

14. You can also use the following boler plate for async actions using thunk

```
export const asyncAction = (text) => {
    return async(dispatch, getState) => {
        console.log(`getState() = ${getState()}`);
        const newText = await someAsyncfunction();
        dispatch({type: types.<ACTION_TYPE>, payload: newText})
    }
};
```

