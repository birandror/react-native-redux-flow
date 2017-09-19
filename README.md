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
5. Add the following Boiler plate to reducers.js
```
export default({
    dummy: ()=> []
});
```
