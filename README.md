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
/src/store/{domain}/reducer.js  
/src/store/{domain}/actions.js
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
import App from './src/app';
AppRegistry.registerComponent('manager', () => App);
```
6. Add the following Boiler plate to reducers.js
```
export default({
    dummy: ()=> []
});
```

7. Add a connected component to src/containers/ you can use the following boiler plate:  
```
import React, { Component } from 'react';
import {View,Text} from 'react-native'
import { connect } from 'react-redux';


class connectedComponentBoilerPlate extends Component {
    componentWillMount(){} //when render

    render() {
        return (
            <Text>Boiler Plate for class component</Text>
        );
    }
}

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps,null)(connectedComponentBoilerPlate);
```
