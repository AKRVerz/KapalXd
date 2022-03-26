/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';

const dataTidakDitemukan = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: 600,
      }}>
      <Image
        style={{width: 300, height: 300}}
        source={require('../data/crash.jpg')}
      />
    </View>
  );
};

export default dataTidakDitemukan;
