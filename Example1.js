import {View, Text} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';

const Example1 = () => {
  return (
    <View style={{flex: 1}}>
      <Animatable.Image
        source={require('./images/food1.png')}
        style={{width: 350, height: 350, marginLeft: -50, marginTop: -50}}
        animation={'zoomIn'}
        duration={1400}
      />
    </View>
  );
};

export default Example1;
