import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyProducts from './screens/MyProducts';
import MyCart from './screens/MyCart';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyProducts">
        <Stack.Screen
          name="MyProducts"
          component={MyProducts}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyCart"
          component={MyCart}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
