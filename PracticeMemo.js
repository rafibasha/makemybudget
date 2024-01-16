import React, { useCallback, useState } from 'react';

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

import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
function PracticeMemo() {
  const [counter1, setcounter1 ] = useState(0)
  const [counter2, setcounter2 ] = useState(0)
  const increment = useCallback(()=>{
    setcounter1(counter1+1)
  },[counter2])
  const decrement = useCallback(()=>{
    setcounter2(counter2+1)
  },[counter1])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'yellow' }}>
      <ComponentA counter1={counter1} myfunction={increment}/>
      
      <Button title='increment1' onPress={increment} ></Button>
      <ComponentB counter2={counter2} myfunction={decrement}/>
      <Button title='increment2'  onPress={decrement}></Button>
    </View>
  );
}
export default PracticeMemo;