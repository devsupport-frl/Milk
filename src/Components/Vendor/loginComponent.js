import React, { Component } from "react";
import Login from  '../../Container/Vendor/login';


export default  class LoginComponent extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            hidePassword: true,
            userIsLoading: false,
            userErrorMessage:"ssdfds",
        }

    }


    // to write all  permission related in compound


    render() {
        return (
            <Login></Login>
        );
    }
}