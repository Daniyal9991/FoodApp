import { Button, StyleSheet, Text, TextInput, View,} from 'react-native'
import React, { useState } from 'react'

const Hooks = () => {
    const[counter,setcounter]=useState(0)
    const[value,setvalue]=useState(0)
    const Increament=()=>{
      setcounter(counter+1)
    }
    const Increamentbyammount=()=>{
      setcounter(parseInt(counter)+parseInt(value))
    }
    const Decreamentbyammount=()=>{
      setcounter(counter>0?parseInt(counter)-parseInt(value):0)
    }
  const Decreament=()=>{
    setcounter(counter>0? counter -1:0)
  }
  return (
    <View style={{backgroundColor:'black',flex:1,padding:50}}>
        <Button title='Increament' onPress={Increament} />
        <Text style={{fontSize:40,textAlign:'center'}}>{counter}</Text>
      <Button title='Decreament'onPress={Decreament} />
      <TextInput style={{backgroundColor:'grey', padding:10,borderRadius:20}}  placeholder='Enter Number' placeholderTextColor={'white'} onChangeText={(value)=>setvalue(value)}/>
      <Button title='Increamentbyammount' onPress={Increamentbyammount}/>
      <Button title='Decreamentbyammount' onPress={Decreamentbyammount}/>
    </View>
  )

}

export default Hooks

const styles = StyleSheet.create({})