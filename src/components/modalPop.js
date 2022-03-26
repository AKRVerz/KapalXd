/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const modalPop = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'powderblue',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={{margin: 20}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 24, color: 'black', fontWeight: 'bold'}}>
            modalPop Tiket
          </Text>
          <View
            style={{
              height: 20,
            }}
          />
          <View
            style={{
              height: 310,
              width: 310,
              borderRadius: 10,
              backgroundColor: 'white',
              padding: 10,
            }}></View>
          <View style={{height: 20}} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default modalPop;
