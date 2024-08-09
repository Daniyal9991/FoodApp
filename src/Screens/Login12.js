import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image, Button, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Signup from './Signup';
import Login from './Login';

const Login12 = () => {
    const navigation=useNavigation();
  return (
    <View style={{backgroundColor:'#BFC5C8',flex:1,padding:5}}>
      <Text style={{color:'blue',fontSize:28,fontWeight:'bold',padding:40,textAlign:'center'}}>Login here</Text>
      <Text style={{color:'black',fontSize:20,textAlign:'center'}}>Welcome here to Food App</Text>
     <TextInput  style={{color:'black',backgroundColor:'white',borderRadius:20,margin:20,paddingLeft:20,borderWidth:2,padding:14,borderColor:'black'}} placeholder='Email' placeholderTextColor={'black'}/>
     <TextInput secureTextEntry={true} style={{color:'black',backgroundColor:'white',borderRadius:20,margin:20,paddingLeft:20,borderWidth:2,padding:14,borderColor:'black'}} placeholder='Password' placeholderTextColor={'black'}/>
          
     <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate(Login)}>
        <Text style={{color:'black',borderRadius:20,textAlign:'center',backgroundColor:'blue',padding:15,margin:30,fontSize:30}}>Login</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>navigation.navigate(Signup)}  activeOpacity={0.5}>
     <Text style={{color:'black',textAlign:'center',fontSize:20}}>Create an account</Text>
     </TouchableOpacity>
     </View>
  )
}

export default Login12

const styles = StyleSheet.create({})