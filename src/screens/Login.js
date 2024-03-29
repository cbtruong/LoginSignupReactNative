import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import pattern from '../../assets/pattern.png';
import {button1} from '../common/button'
import {head1,head2,formgroup,label,input,link,link2} from '../common/formcss'
import logo from '../../assets/mainlogo.png';
const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.patternbg} source={pattern}/>
        <View style={styles.container1}>
            <View style={styles.s1}>
                <Image style={styles.logo} source={logo}/>
                <Text style={styles.h1} onPress={()=>navigation.navigate('welcome')}>Used2, Inc</Text>
                <Text style={styles.small1}> Buying and selling online</Text>
            </View>
            <View style={styles.s2}>
                <Text style={head1}>Login</Text>
                <Text style={head2}>Sign in to continue</Text>
                <View style={formgroup}>
                        <Text style={label}>Email</Text>
                        <TextInput style={input}
                            placeholder="Enter your email"
                        />
                </View>
                <View style={formgroup}>
                        <Text style={label}>Password</Text>
                        <TextInput style={input}
                            placeholder="Enter your password"
                        />
                </View>
                <View style={styles.fp}>
                        <Text style={link}>Forgot Password?</Text>
                </View>
                <Text style={button1}>Login</Text>
                <Text style={link2}>Don't have an account?&nbsp;
                        <Text style={link} onPress={()=>navigation.navigate('signup')}> 
                            Create a new account
                        </Text>
                </Text>
            </View>
        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
    },
    patternbg: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
    },
    container1:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'100%',
    },
    s1:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height: '40%',
    },
    small1:{
        color:"#fff",
        fontSize:17,
    },
    h1:{
        fontSize:30,
        color:'#fff',
    },
    s2: {
        display: 'flex',
        backgroundColor: '#fff',
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    },
    logo: {
        height: 80,
        resizeMode: 'contain',
    },
    fp: {
        display: 'flex',
        alignItems: 'flex-end',
        marginHorizontal: 10,
        marginVertical: 5,
    },
})