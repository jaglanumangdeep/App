import { View, Text , Image , StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import { router } from 'expo-router'
const Login = () => {
  return (
    <View style={{alignItems:'center'}}>
    <Image source={require('./../../../assets/images/Login1.png')} style={styles.loginImage}/>
    <View style={styles.subContainer}>
        <Text style={{fontSize:27,color:Colors.WHITE , textAlign:'center'}}>
            Let`s` Find 
            <Text style={{fontWeight:'bold'}}> Professional Cleaning and repair </Text> 
            Service
        </Text>
        <Text style={{color:Colors.WHITE, fontSize:17 , textAlign:'center' , marginTop:20 }}>Best App to find services near you which deliver you a professional service</Text>
        <TouchableOpacity style={styles.button}       onPress={() => router.replace('/(tabs)')} // 👈 navigate to the Tab Layout

>
                <Text style={{textAlign:'center',fontSize:17,color:Colors.PRIMARY}}>Let`s Get Started</Text>
        </TouchableOpacity>
    </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    loginImage:{
        with:100,
        height:350,
        marginTop:120,
        // borderWidth:4,
        borderColor:Colors.BLACK,
        borderRadius:15
    },
    subContainer:{
        width:'100%',
        backgroundColor:Colors.PRIMARY,
        height:'70%',
        marginTop:-20,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:20
    },
    button:{
        padding:15,
        backgroundColor:Colors.WHITE,
        borderRadius:90,
        marginTop:40
    }
})