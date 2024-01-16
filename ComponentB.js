import React,{memo} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';


const ComponentB=({counter2}) =>{
    console.log("ComponentB")
  return (
    <View style={{  alignItems: 'center', justifyContent: 'center',backgroundColor:'yellow' }}>
      <Text style={{color:'red'}}>{counter2}</Text>
    </View>
  );
}
export default memo(ComponentB);