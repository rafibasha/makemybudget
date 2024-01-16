import React, {memo}from 'react';

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


const ComponentA=({counter1}) =>{
    console.log("ComponentA")
  return (
    <View style={{  alignItems: 'center', justifyContent: 'center',backgroundColor:'yellow' }}>
      <Text style={{color:'blue'}}>{counter1}</Text>
    </View>
  );
}
export default memo(ComponentA);