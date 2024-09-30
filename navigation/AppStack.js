import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { CustomerScreen, AdminScreen, SettingScreen, TransactionScreen } from '../screen/index';
import { ServiceStack } from './RouterService';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Customer') {
          iconName = focused ? 'person' : 'person-outline';
        } else if (route.name === 'Admin') {
          iconName = focused ? 'shield' : 'shield-outline';
        } else if (route.name === 'Transaction') {
          iconName = focused ? 'construct' : 'construct-outline';
        } else if (route.name === 'Setting') {
          iconName = focused ? 'settings' : 'settings-outline';
        }

        return <Ionicons name={iconName} color={color} size={24} />;
      },
    })}
    activeColor="#e91e63" 
    inactiveColor="gray"
    barStyle={{ backgroundColor: '#ffffff' }} // Tab bar style
  >
    <Tab.Screen name="Home" component={ServiceStack} options={{ headerShown: false }} />
    <Tab.Screen name="Customer" component={CustomerScreen} options={{ headerShown: false }} />
    <Tab.Screen name="Admin" component={AdminScreen} options={{ headerShown: false }} />
    <Tab.Screen name="Transaction" component={TransactionScreen} options={{ headerShown: false }} />
    <Tab.Screen name="Setting" component={SettingScreen} options={{ headerShown: false }} />
  </Tab.Navigator>
);

export const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={TabNavigator} />
    </Stack.Navigator>
  );
};
