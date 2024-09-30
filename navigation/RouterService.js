import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ServicesScreen from '../screen/Services';
import AddNewService from '../screen/AddNewService';
import ServiceDetail from '../screen/ServiceDetail';

const Stack = createStackNavigator();

export const ServiceStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Services" component={ServicesScreen} />
      <Stack.Screen name="AddNewService" component={AddNewService} />
      <Stack.Screen name="ServiceDetail" component={ServiceDetail} />
    </Stack.Navigator>
  );
};
