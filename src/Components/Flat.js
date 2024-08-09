import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
const Flat = () => {
    
    const Menu = [
    {
        dishname:'Breakfast',
        img:require('../assets/images/chicken.png')
    },
    {
        dishname:'Lunch      ',
        img:require('../assets/images/chicken1.png')
    },
    {
        dishname:'Dinner     ',
        img:require('../assets/images/chicken3.png')
    },
    ]
  return (
    <View style={{flex:1}}>
        {/* {Menu[0].time} */}
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={Menu}
        
        renderItem={({index,item})=>{
            return(
            <View style={{backgroundColor:'white',marginRight:10,borderRadius:10,height:'50%',paddingRight:10,marginLeft:20}}>
            
            <Text style={{fontWeight:'bold',color:'black',fontSize:18,paddingLeft:10}}>{item.dishname}</Text>
            <View style={{marginLeft:50}}>
            <Image source={item.img}/>
            </View>
            </View>
            )
        }}
        />
        </View>
   
  )
}

export default Flat

const styles = StyleSheet.create({})