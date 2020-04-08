/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import LoginScreen from './src/Components/Vendor/loginComponent';
import configureStore from "./src/Stores/Vendor/";
import { Provider } from 'react-redux';
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