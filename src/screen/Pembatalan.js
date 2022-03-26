/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';

const Pembatalan = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'powderblue',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={{margin: 20}}>
        <Image
          style={{width: 300, height: 300}}
          source={require('../data/crash.jpg')}
        />
      </View>
      <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
        Tidak Ada Aktivitas Pada Pembatalan Tiket
      </Text>
    </SafeAreaView>
  );
};

export default Pembatalan;
