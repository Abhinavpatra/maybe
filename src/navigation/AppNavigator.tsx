import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import NotFoundScreen from '../screens/NotFoundScreen'; 
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
 
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={BottomTabNavigator}
        options={{ headerShown: false }} 
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen} 
        options={{
          title: 'Oops!',
          presentation: 'modal', 
        }}
      />


      {/* Add other screens outside the tabs here if needed */
      /* e.g., <Stack.Screen name="Settings" component={SettingsScreen} /> 
      all other screens for non-tabs to be added here in case required, or for reformat please notify me man
      */}
      
    </Stack.Navigator>
  );
};

export default AppNavigator;