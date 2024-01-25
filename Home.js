import { View, Text,Button } from 'react-native'
import React from 'react'

const Home = (props) => {
    console.log("props:",props)
  return (
    <View style={{ flex: 1, backgroundColor:'red',alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Details')}
      />
      <Button
       testID="SignInButton"
        title="Go to Example1"
        onPress={() => props.navigation.navigate('Example1')}
      />
    </View>
  )
}

export default Home