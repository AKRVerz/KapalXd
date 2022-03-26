import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from '../screen/Home';
import Pesanan from '../screen/Pesanan';
import Pembatalan from '../screen/Pembatalan';
import Lainnya from '../screen/Lainnya';

const Tab = createBottomTabNavigator();

const MyTab = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#206378',
        headerShown: false,
        tabBarStyle: {position: 'absolute'},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({}) => (
            <FontAwesome name="home" color="black" size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Pesanan"
        component={Pesanan}
        options={{
          tabBarIcon: ({}) => (
            <FontAwesome name="book" color="black" size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Pembatalan"
        component={Pembatalan}
        options={{
          tabBarIcon: ({}) => (
            <FontAwesome name="undo" color="black" size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Lainnya"
        component={Lainnya}
        options={{
          tabBarIcon: ({}) => (
            <MaterialIcons name="more-vert" color="black" size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTab;
