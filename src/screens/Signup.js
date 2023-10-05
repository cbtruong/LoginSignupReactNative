import { Image, StyleSheet, Text, TextInput, View ,ScrollView} from 'react-native'
import React from 'react'
import pattern from '../../assets/pattern.png';
import {button1} from '../common/button'
import {head1,head2,formgroup,label,input,link,link2,input1} from '../common/formcss'
import logo from '../../assets/mainlogo.png';
const Signup = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.patternbg} source={pattern}/>
        <View style={styles.container1}>
            <View style={styles.s1}>
            </View>
            <ScrollView style={styles.s2}>
                <Text style={head1}>Create a new Account</Text>
                <Text style={link2}>Already Registered? &nbsp;
                    <Text style={link} onPress={()=>navigation.navigate('welcome')}>
                        Login here
                    </Text>
                </Text>
                <View style={formgroup}>
                        <Text style={label}>Name</Text>
                        <TextInput style={input} placeholder="Enter your Name" fontSize={14}
                        />
                    </View>
                    <View style={formgroup}>
                        <Text style={label}>Email</Text>
                        <TextInput style={input} placeholder="Enter your Email" fontSize={14}
                        />
                    </View>
                    <View style={formgroup}>
                        <Text style={label}>DOB</Text>
                        <TextInput style={input} placeholder="Enter your Date of Birth" fontSize={14}
                        />
                    </View>
                    <View style={formgroup}>
                        <Text style={label}>Password</Text>
                        <TextInput style={input} placeholder="Enter your Password" fontSize={14}
                            secureTextEntry={true}
                        />
                    </View>

                    <View style={formgroup}>
                        <Text style={label}>Confirm Password</Text>
                        <TextInput style={input} placeholder="Confirm your Password" fontSize={14}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={formgroup}>
                        <Text style={label}>Address</Text>
                        <TextInput style={input1} placeholder="Enter your Address" fontSize={14}
                        />
                    </View>
                <Text style={button1}>Signup</Text>
            </ScrollView>
        </View>
    </View>
  )
}

export default Signup

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
        height: '10%',
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
        height: '90%',
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