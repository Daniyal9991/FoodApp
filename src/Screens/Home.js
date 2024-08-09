import { StyleSheet,FlatList, Text, View,Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Flats1 from '../Components/Flats1'
import Flats11 from '../Components/Flats11'
const Login = () => {
  return (
    <View style={{backgroundColor:'#BFC5C8',flex:1,padding:5}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity activeOpacity={0.3}>
      <Ionicons name={'menu'} size={30} color={'black'} />
      </TouchableOpacity>
      <View style={{flexDirection:'row',paddingLeft:40}}>
      <Feather name={'map-pin'} size={20} color={'black'} />
      <Text style={{color:'black'}}>Mohammadpur, Dhaka</Text>
      </View>
      <View style={{paddingLeft:15}}>
      <TouchableOpacity activeOpacity={0.3}>
      <Ionicons name={'chevron-down-outline'} size={30} color={'black'} />
      </TouchableOpacity>
      </View>
      <View style={{paddingLeft:40}}>
      <Image source={require('../assets/images/pic.png')} />
      </View>
      </View>
      <View style={{flexDirection:'row',paddingTop:50}}>
      <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'white',borderRadius:10,paddingRight:80,marginLeft:20,paddingLeft:10}}>
      <Ionicons name={'search'} size={30} color={'#656565'} />
        <TextInput placeholder='Search for Lunch' placeholderTextColor={'#656565'}/>
      </View>
      <View style={{marginLeft:20,flexDirection:'row',alignItems:'center',paddingLeft:20,borderRadius:10,marginRight:305,backgroundColor:'white'}}>
      <TouchableOpacity activeOpacity={0.5}>
      <FontAwesome6 name={'sliders'} size={28} color={'#656565'} />
      </TouchableOpacity>
       <Text>'  '</Text>

      </View>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
      <Text style={{color:'black',padding:20,fontSize:28,fontWeight:'bold'}}>Search results</Text>
      <TouchableOpacity activeOpacity={0.3}>
      <Text style={{color:'#656565',fontSize:20}}>See More  </Text>
      </TouchableOpacity>
     </View>
     <Flats1/>
     <View style={{flexDirection:'row',top:20,paddingTop:10,alignItems:'center',justifyContent:'space-between'}}>
      <Text style={{color:'black',fontSize:25,fontWeight:'bold'}}>Neighbour's Search</Text>
      <TouchableOpacity activeOpacity={0.3}>
      <Text style={{color:'#656565',fontSize:20}}> More  </Text>
      </TouchableOpacity>
     </View>
     <Flats11/>
     <View style={{flexDirection:'row',borderRadius:20,top:20,padding:5,backgroundColor:'white'}}>
        <TouchableOpacity style={{margin:30}}>
      <Octicons name={'home'} size={30} color={'black'} />
      </TouchableOpacity>
      <TouchableOpacity style={{margin:30}}>
      <FontAwesome6 name={'basket-shopping'} size={30} color={'black'} />
      </TouchableOpacity>
      <TouchableOpacity style={{margin:30}}>
      <MaterialCommunityIcons name={'message-processing-outline'} size={30} color={'black'} />
      </TouchableOpacity>
      <TouchableOpacity style={{margin:30}}>
      <Ionicons name={'person-outline'} size={30} color={'black'} />
      </TouchableOpacity>

      </View>
     
     </View>
  )
}

export default Login

const styles = StyleSheet.create({})