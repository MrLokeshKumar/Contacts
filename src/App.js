
import React, { Component } from 'react'
import { View } from 'react-native'
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import Routes from './Routing2';
import Reducers from './reducers';
import ReduxThunk from 'redux-thunk';
export default class App extends Component {
    render() {
            return(
                <Provider store = {createStore(Reducers,{},applyMiddleware(ReduxThunk))}>
                    <View style={{flex:1}}>
                        <Routes/>
                    </View>
                </Provider>
            )
    }
}
















