/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard';

const Stack = createNativeStackNavigator();

const MainNavigation = (props: any) => {
  return (
    <View style={{flex: 1}}>
      <Stack.Navigator initialRouteName={props.initialScreen}>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </View>
  );
};

export default MainNavigation;
