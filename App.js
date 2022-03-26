import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyTab from './src/components/MyTab';
import Konfirmasi from './src/screen/Konfirmasi';
import DetailTiket from './src/screen/DetailTiket';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MyTab" component={MyTab} />
        <Stack.Screen name="Konfirmasi" component={Konfirmasi} />
        <Stack.Screen name="DetailTiket" component={DetailTiket} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
