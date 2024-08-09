import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SignupNav = () => {
    const navigation = useNavigation()
  return (
    <View>
      <Text>SignupNav</Text>
      <Button title='Goback' onPress={()=>navigation.navigate('Login')}/>
    </View>
  )
}

export default SignupNav

const styles = StyleSheet.create({})