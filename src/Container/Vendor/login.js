import React, { Component } from 'react';
import {
    Button, Text, View, AppState, Linking,
    TextInput, TouchableOpacity, Platform, Alert, ActivityIndicator, BackHandler,
    Dimensions, SafeAreaView, ImageBackground, Image, AsyncStorage
} from 'react-native';
import { connect } from 'react-redux'
import * as loginAction from '../../Action/Vendor/loginAction'
import * as constants from "../../Config/Constants/constants";
import {Images} from  '../../Theme'
import loginStyle from './loginStyles'
import * as uiconstants from "../../Config/Constants/uiconstants";
import NotificationPopup from 'react-native-push-notification-popup';



// Render function
const renderCustomPopup = ({ appIconSource, appTitle, timeText, title, body }) => (
    <View>
      <Text>{title}</Text>
      <Text>{body}</Text>
    </View>
  );
  

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
      
      this.popup.show({
        onPress: function() {console.log('Pressed')},
        appIconSource: Images.email,
        appTitle: 'Some App',
        timeText: 'Now',
        title: 'csvasfsad World',
        body: error,
        background:"#ffff00",
    
        slideOutTime: 3000
      });
       // Toast.showWithGravity(error, Toast.LONG, Toast.TOP)
    
       // Alert.alert("comming soon  "+ error);
          
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
                    <NotificationPopup
            ref={ref => this.popup = ref}
            renderPopupContent={renderCustomPopup} />

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