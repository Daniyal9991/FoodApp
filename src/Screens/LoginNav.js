import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'


const LoginNav = () => {
    const navigation = useNavigation()


  return (
    <View>
      <Text>LoginNav</Text>
      
      
      <Button onPress={()=>navigation.replace('Signup')} title='GO to Signup'/>
    </View>
  )
}

export default LoginNav

const styles = StyleSheet.create({})