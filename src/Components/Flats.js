import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
const Flats = () => {
    
    const Menu = [
    {
        img:require('../assets/images/chicken3.png'),
        rating:'4.6',
        dishname:'Spicy Noodles',

    },
    {
        img:require('../assets/images/chicken.png'),
        rating:'4.7',
        dishname:'Shrimps Pasta',
        
    },
    {
        img:require('../assets/images/chicken1.png'),
        rating:'4.8',
        dishname:'Chicken Pasta',
        
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
            <View style={{backgroundColor:'white',bottom:20,borderRadius:10,marginRight:20,marginTop:20,paddingTop:10,height:'90%',paddingRight:30,marginLeft:20}}>
             <View style={{marginLeft:30}}>
             <Image style={{height:'70%',width:'100%'}} source={item.img}/>
             
             <View style={{flexDirection:'row'}}>
             <Text style={{color:'black'}}>{item.rating}</Text>
             <AntDesign name={'star'} size={20} color={'yellow'} />
             </View>
             </View>
            <Text style={{fontWeight:'bold',color:'black',fontSize:18,paddingLeft:10}}>{item.dishname}</Text>
            
           
            </View>
            )
        }}
        />
        </View>
   
  )
}

export default Flats

const styles = StyleSheet.create({})