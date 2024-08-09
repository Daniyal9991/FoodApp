import { StyleSheet, Text, View,TouchableOpacity,Image,FlatList, ImageBackground } from 'react-native'
import React from 'react'
import  { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
const Home1 = () => {
  const[counter,setcounter]=useState(0)
  
  const Increament =()=>{
    setcounter(counter+1)
  }
  const Decreament=()=>{
    setcounter(counter>0? counter -1:0)
  }
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
      <View style={{padding:10,alignItems:'flex-end'}}>
    
      <Ionicons name={'heart'} size={30} color={'red'} />
       <Image style={{width:'65%',marginRight:60,height:'53%'}} source={require('../assets/images/chicken.png')}/>
       </View>
       <View style={{marginLeft:20,bottom:150}}>
        <View >
       <Text style={{color:'grey'}}>2.5 Km.5 Mins</Text>
       <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>Shrimps Pasta</Text>
      
       <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-end'}}> 
       <Text style={{color:'black'}}>4.8</Text>
       <Ionicons name={'star'} size={18} color={'yellow'} />
       <Text style={{color:'grey',marginRight:190}}>5k+ Rating</Text>
       <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'white',borderRadius:10,padding:5}}>
       <TouchableOpacity onPress={Decreament}>
        <Text style={{color:'red',fontSize:30,borderWidth:1,borderColor:'green',borderRadius:20}}> -</Text>
       </TouchableOpacity>
       <Text style={{fontSize:30,textAlign:'center',color:'black',backgroundColor:'red'}}>{counter}</Text>
       <TouchableOpacity onPress={Increament}>
        <Text style={{color:'green',fontSize:30,borderWidth:1,borderColor:'green',borderRadius:20}}>+</Text>
       </TouchableOpacity>
       </View>
       </View>
       </View>
       <Text style={{color:'black',fontSize:25,padding:10}}>Vulputate tincidunt convallis pulvinar egestas consequat, aliquam lectus nibh. Leo purus nisi, nibh condimentum aliquam eu quis. Ultrices arcu pharetra.</Text>
       <Text style={{color:'grey',fontSize:18}}>Convallis pulvinar egestas consequat</Text>
       </View>
       <View style={{flexDirection:'row',bottom:130,backgroundColor:'white',borderRadius:10,padding:20,alignItems:'center',justifyContent:'flex-end'}}>
       <Text style={{color:'black',fontSize:30,fontWeight:'bold',marginRight:90}}>$19.99</Text>
      <View style={{flexDirection:'row',backgroundColor:'red',padding:10,borderRadius:20,alignItems:'center'}}>
       <TouchableOpacity activeOpacity={0.5}>
       <Text style={{color:'white',marginRight:15,padding:15}}>Check out</Text>
       </TouchableOpacity>
       <TouchableOpacity activeOpacity={0.5}>
       <FontAwesome6 name={'basket-shopping'} size={30} color={'white'} />
       </TouchableOpacity>
       </View>
       </View>
    </View>
  )
}

export default Home1

const styles = StyleSheet.create({})