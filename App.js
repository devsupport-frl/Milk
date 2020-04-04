/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {Dimensions,} from 'react-native';
import LoginScreen from './src/Container/login';
import configureStore from "./src/Stores/";
import { Provider } from 'react-redux';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const store = configureStore();


export default class App extends Component {
    render() {
        return ( 
            <Provider store={store}>
              < LoginScreen />
            </Provider>
        );
    }

}