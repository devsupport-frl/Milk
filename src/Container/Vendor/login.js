import React, { Component } from 'react';
import {
    Button, Text, View, AppState, Linking,
    TextInput, TouchableOpacity, Platform, Alert, ActivityIndicator, BackHandler,
    Dimensions, SafeAreaView, ImageBackground, Image, AsyncStorage
} from 'react-native';
import { connect } from 'react-redux'
import * as loginAction from '../../Action/Vendor/loginAction'
import * as constants from "../../Assets/Constants/constants";
import {Images} from  '../../Theme'
import loginStyle from './loginStyles'
import * as uiconstants from "../../Assets/Constants/uiconstants";



 class LoginScreen extends React.Component {
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
    onPressBut = () => {
        //Alert.alert("comming soon")
    }


    onLoginPressButton = () => {
      try {

       this.props.dispatch(loginAction.login("abc",'iaidfias'));
       var error =  this.props.login.get(constants.LOGIN_ERROR);
       var chatdata = this.props.login.get(constants.LOGIN_DATA);
       console.log("componentWillReceiveProps",error);
       console.log("muralitharan" + error);
       Alert.alert("comming soon  "+ error);
          
      } catch (error) {
          
      }
    }





    render() {
        return (
            <SafeAreaView style={loginStyle.container}>
                <ImageBackground source={ Images.background } style={loginStyle.loginImageBackgroung}>
                    <View style={loginStyle.loginEmailFirstViewStyle}>
                        <View style={loginStyle.logincontainer}>
                            <View style={loginStyle.inputbar}>
                                <View style={loginStyle.loginEmailViewStyle}>
                                    <Image
                                        source={Images.email}
                                        style={loginStyle.emailImageStyle}
                                    />
                                </View>
                                <TextInput
                                    style={loginStyle.loginEmailStyle}
                                    placeholder='Email Address'
                                    onChangeText={(email) => this.setState({ email })}
                                    value={this.state.email}
                                    autoCapitalize='none'
                                />
                            </View>

                            <View style={loginStyle.inputbar}>
                                <View style={ loginStyle.loginPasswordFirstView }>
                                    <Image
                                        source={Images.key}
                                        style={loginStyle.passwordImageStyle}
                                    />
                                </View>
                                <TextInput
                                    style={loginStyle.loginPasswordText}
                                    secureTextEntry={this.state.hidePassword}
                                    placeholder='Password'
                                    onChangeText={(password) => this.setState({ password })}
                                    value={this.state.password}
                                    autoCapitalize={'none'}
                                />
                                <View style={ loginStyle.loginPasswordStyle }>
                                    <TouchableOpacity style={loginStyle.visibilityBtn} onPress={this.onPressBut}>
                                        <Image source={(this.state.hidePassword) ? Images.close : Images.open} style={loginStyle.btnText} />
                                    </TouchableOpacity>
                                </View>

                            </View>



                             <View style={loginStyle.loginFirstViewStyle}>
                                <View style={loginStyle.loginSecondViewStyle}>
                                    <TouchableOpacity style={loginStyle.loginTextTouchableOpacity}
                                        onPress={() => { this.onLoginPressButton() }}
                                          >
                                        <Text style={loginStyle.loginTextStyle}>
                                            {uiconstants.LOGIN}
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={loginStyle.forgetPasswordViewStyle}>
                                    <TouchableOpacity style={loginStyle.button} onPress={this.onPressBut}>
                                        <Text
                                            style={loginStyle.forgetPasswordTextStyle}
                                            numberOfLines={1}
                                        >
                                          {uiconstants.FORGETPASSWORD}
                                      </Text>
                                    </TouchableOpacity>
                                </View>


                                <View style={loginStyle.signUpStyleView}>
                                    <TouchableOpacity style={{  }}
                                        onPress={this.onPressButton} >
                                        <Text style={loginStyle.signUpStyle}>
                                           {uiconstants.SIGNUP}
                                        </Text>
                                        <View style={loginStyle.bottomStyle}>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

  
  
  
function mapStateToProps(state) {
    return {
      login: state.get("login"),
    }
  }
  
 export default connect(mapStateToProps)(LoginScreen);