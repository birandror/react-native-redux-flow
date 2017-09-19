import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import reducers from './store/reducers';

import TopicScreen from './containers/TopicScreen'

class App extends Component {

    render() {
        const store = createStore(combineReducers(reducers),{},applyMiddleware(thunk));
        return (
            <Provider store={store}>
                <View>
                    <TopicScreen/>
                </View>
            </Provider>
        )
    }
}

export default App;
