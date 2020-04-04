import React, { Component } from 'react';
import {
    StyleSheet, Button, Text, View, AppState, Linking,
    TextInput, TouchableOpacity, Platform, Alert, ActivityIndicator, BackHandler,
    Dimensions, SafeAreaView, ImageBackground, Image, AsyncStorage
} from 'react-native';
import { connect } from 'react-redux'
import * as loginAction from '../Action/loginAction';
import * as constants from "../constants";

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
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../Assets/images/backgroundimage.png')} style={{ width: '100%', height: '100%', resizeMode: 'cover' }}>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 120, flexDirection: 'column' }}>

                        {/* <Text style={{ color: '#282828', fontSize: 20, marginTop: 24, }}>Login</Text> */}
                        <View style={styles.logincontainer}>
                            <View style={styles.inputbar}>
                                <View style={{ width: 40, height: 48, backgroundColor: '#ffff00', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image
                                        //We are showing the Image from online
                                        // source={{ uri: 'https://aboutreact.com/wp-content/uploads/2018/08/user.png', }}

                                        //You can also show the image from you project directory like below
                                        source={require('../Assets/images/email.png')}

                                        //Image Style
                                        style={styles.emailImageStyle}
                                    />
                                </View>
                                <TextInput
                                    style={{
                                        color: '#000',
                                        width: 230,
                                        height: 48,
                                        paddingTop: 5,
                                        paddingLeft: 10,
                                        paddingBottom: 5,
                                        paddingRight: 10,
                                        fontSize: 15,
                                        backgroundColor: '#ffffff',
                                        

                                    }}
                                    placeholder='Email Address'
                                    onChangeText={(email) => this.setState({ email })}
                                    value={this.state.email}
                                    autoCapitalize='none'
                                />
                            </View>

                            <View style={styles.inputbar}>
                                <View style={{ width: 40, height: 48, backgroundColor: '#ffff00', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image
                                        //We are showing the Image from online
                                        // source={{ uri: 'https://aboutreact.com/wp-content/uploads/2018/08/phone.png', }}

                                        //You can also show the image from you project directory like below
                                        source={require('../Assets/images/key.png')}

                                        //Image Style
                                        style={styles.passwordImageStyle}
                                    />
                                </View>
                                <TextInput
                                    style={{
                                        color: '#000',
                                        width: 190,
                                        height: 48,
                                        paddingTop: 5,
                                        paddingLeft: 10,
                                        paddingBottom: 5,
                                        paddingRight: 10,
                                        fontSize: 15,
                                        backgroundColor: '#ffffff'

                                    }}
                                    secureTextEntry={this.state.hidePassword}
                                    placeholder='Password'
                                    onChangeText={(password) => this.setState({ password })}
                                    value={this.state.password}
                                    autoCapitalize={'none'}
                                />
                                <View style={{ justifyContent: 'flex-end', right: 0, flexDirection: 'column', backgroundColor: '#ffffff', height: 48, alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableOpacity style={styles.visibilityBtn} onPress={this.onPressBut}>
                                        <Image source={(this.state.hidePassword) ? require('../Assets/images/eye-close.png') : require('../Assets/images/eye-open.png')} style={styles.btnText} />
                                    </TouchableOpacity>
                                </View>

                            </View>

                            <View style={{ marginTop: 50,alignItems:'center' }}>
                                <View style={{ justifyContent: 'center', marginTop: 40 }}>
                                    <TouchableOpacity style={{
                                        borderRadius: 5, borderColor: '#ffff00',
                                        borderWidth: 1, width: 200, height: 40, backgroundColor: '#ffff00', marginTop: 6, alignItems: 'center', justifyContent: 'center'
                                    }}
                                        onPress={() => { this.onLoginPressButton() }}
                                    >
                                        <Text style={{
                                            color: '#737373',
                                            fontSize: 18,
                                            fontWeight: "bold"

                                        }}>
                                            LOGIN
                                </Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ marginTop: 90, height: 20, alignItems: 'center', justifyContent: 'center', }}>
                                    <TouchableOpacity style={styles.button} onPress={this.onPressBut}>
                                        <Text
                                            style={{ fontSize: 16, color: '#ffffff' }}
                                            numberOfLines={1}
                                        >
                                            Forgot Password ?
                                      </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{marginTop:110,height:20,alignItems:'center',justifyContent:'center'}}>
                                    {/* <Text style={{ fontSize: 14 }}>Don't have an account?  </Text> */}
                                    <TouchableOpacity style={{  }}
                                        onPress={this.onPressButton} >
                                        <Text style={{
                                            color: '#ffffff',
                                            fontSize: 16,

                                        }}>
                                           Don't have an account? SIGN UP HERE
                                        </Text>
                                        <View style={{height:4,width:105,backgroundColor:'#ffffff',marginTop:5,borderRadius:2,alignSelf:'center'}}>

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
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logincontainer: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 40,
        alignItems: 'center',
    },
    inputbar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#D2D2D2',
        height: 40,
        borderRadius: 4,
        margin: 5,
        marginTop: 40

    },
    visibilityBtn: {
        // position: 'absolute',

        marginRight: 15,
    },
    spinnerTextStyle: {
        color: '#FFF'
    },
    btnText: {
        marginLeft: 10,
        height: 18,
        width: 18,
    },
    seprator: {
        borderBottomWidth: 0.8,
        borderBottomColor: '#fff',
        marginBottom: 5,
        marginTop: 5
    },
    button: {
        fontSize: 10,
        borderBottomColor: '#282828'
    },
    registerContainer: {
        width: 250,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    emailImageStyle: {
        padding: 10,
        height: 10,
        width: 25,
        resizeMode: 'cover',
        backgroundColor: 'transparent'
    },
    passwordImageStyle: {
        padding: 10,
        height: 25,
        width: 10,
        resizeMode: 'cover',
        backgroundColor: 'transparent'
    },
});

  
  
  
function mapStateToProps(state) {
    return {
      login: state.get("login"),
    }
  }
  
 export default connect(mapStateToProps)(LoginScreen);