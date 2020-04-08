import { StyleSheet } from 'react-native'


export default StyleSheet.create({
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
    bottomStyle:{
        height:4,
        width:105,
        backgroundColor:'#ffffff',
        marginTop:5,
        borderRadius:2,
        alignSelf:'center'
    },
    signUpStyle:{
        color: '#ffffff',
        fontSize: 16,
    },
    signUpStyleView:{
        marginTop:110,
        height:20,
        alignItems:'center',
        justifyContent:'center'
    },
    forgetPasswordTextStyle:{
        fontSize: 16, color: '#ffffff' 
    },

    forgetPasswordViewStyle:{
        marginTop: 90, height: 20, alignItems: 'center', justifyContent: 'center', 
    },
    loginTextStyle:{
        color: '#737373',
        fontSize: 18,
        fontWeight: "bold"
    },

    loginTextTouchableOpacity:{
        borderRadius: 5,
        borderColor: '#ffff00',
        borderWidth: 1, 
        width: 200, 
        height: 40, 
        backgroundColor: '#ffff00', 
        marginTop: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },

    loginSecondViewStyle:{
        justifyContent: 'center', 
        marginTop: 40 
    },

    loginFirstViewStyle:{
        marginTop: 50,
        alignItems:'center'
    },

    loginPasswordStyle:{
        justifyContent: 'flex-end', right: 0, flexDirection: 'column', backgroundColor: '#ffffff', height: 48, alignItems: 'center', justifyContent: 'center'
    },

    loginPasswordText:{
        color: '#000',
        width: 190,
        height: 48,
        paddingTop: 5,
        paddingLeft: 10,
        paddingBottom: 5,
        paddingRight: 10,
        fontSize: 15,
        backgroundColor: '#ffffff'
    },

    loginPasswordFirstView:{
        width: 40, 
        height: 48, 
        backgroundColor: '#ffff00', 
        justifyContent: 'center',
        alignItems: 'center'
    },

    loginEmailStyle:{
        color: '#000',
        width: 230,
        height: 48,
        paddingTop: 5,
        paddingLeft: 10,
        paddingBottom: 5,
        paddingRight: 10,
        fontSize: 15,
        backgroundColor: '#ffffff', 
    },


    loginEmailViewStyle:{
        width: 40, 
        height: 48, 
        backgroundColor: '#ffff00', 
        justifyContent: 'center',
        alignItems: 'center'
    },


    loginEmailFirstViewStyle:{
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: 120, 
        flexDirection: 'column' 
    },


    loginImageBackgroung:{
        width: '100%', 
        height: '100%', 
        resizeMode: 'cover'
    }








})
