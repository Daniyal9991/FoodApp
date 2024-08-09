import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
const Flat = () => {
    
    const Menu = [
    {
        img:require('../assets/images/chicken.png'),
        dishname:'Vegetable Curry',
        name:'Found in 15 nearby restuarents',   
        rating:'$6.99 /person 3.0',
    },
    {
        img:require('../assets/images/chicken1.png'),

        dishname:'Fried Plantain',
        name:'Found in 15 nearby restuarents',   
        rating:'$6.99 /person 5.0',
    },
    {
        img:require('../assets/images/chicken.png'),

        dishname:'Chicken Pasta',
         name:'Found in 15 nearby restuarents',       
        rating:'$6.99 /person 4.0',
    },
    
   
    ]
  return (
    <View style={{flex:1,marginLeft:20}}>
        {/* {Menu[0].time} */}
        <FlatList
        showsVerticalScrollIndicator={false}
        data={Menu}
        numColumns={1}
        renderItem={({index,item})=>{
            return(
            <View style={{width:'95%',flexDirection:'row',backgroundColor:'white',padding:20,borderRadius:10,marginTop:10,paddingRight:40,paddingLeft:40,marginTop:20,justifyContent:'center',alignItems:'center'}}>      
            <Image style={{height:"150%",width:'50%'}} source={item.img}/>
            <View style={{flexDirection:'column'}}>
            <Text style={{fontWeight:'bold',color:'black',fontSize:18,marginBottom:10}}>{item.dishname}</Text>
            <Text style={{color:'black'}}>{item.name}</Text>
            <View style={{flexDirection:'row',marginBottom:10}}>
            
            
            <Text style={{color:'black'}}> {item.rating}</Text>
            <AntDesign name={'star'} size={20} color={'orange'}/>
            </View>
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