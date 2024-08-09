import { StyleSheet,FlatList, Text, View,Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'
import Login12 from './Login12';

const  Signup = () => {
   const navigation=useNavigation();
  return (
    <View style={{backgroundColor:'#BFC5C8',flex:1,padding:5}}>
      <Text style={{color:'blue',fontSize:28,fontWeight:'bold',padding:40,textAlign:'center'}}>Create Account</Text>
      <Text style={{color:'black',fontSize:20,textAlign:'center'}}>Welcome to Food App</Text>
     <TextInput  style={{color:'black',backgroundColor:'white',borderRadius:20,margin:20,paddingLeft:20,borderWidth:2,padding:14,borderColor:'black'}} placeholder='Email' placeholderTextColor={'black'}/>
     <TextInput secureTextEntry={true} style={{color:'black',backgroundColor:'white',borderRadius:20,margin:20,paddingLeft:20,borderWidth:2,padding:14,borderColor:'black'}} placeholder='Password' placeholderTextColor={'black'}/>
     <TextInput secureTextEntry={true} style={{color:'black',backgroundColor:'white',borderRadius:20,margin:20,paddingLeft:20,borderWidth:2,padding:14,borderColor:'black'}} placeholder='Confirm Password' placeholderTextColor={'black'}/>     
     <TouchableOpacity activeOpacity={0.5}>
        <Text style={{color:'black',borderRadius:20,textAlign:'center',backgroundColor:'blue',padding:15,margin:30,fontSize:30}}>Sign Up</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>navigation.navigate(Login12)} activeOpacity={0.5}>
     <Text style={{color:'black',textAlign:'center',fontSize:20}}>Already have an account</Text>
     </TouchableOpacity>


     </View>
  )
}

export default Signup

const styles = StyleSheet.create({})