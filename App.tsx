
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import SplashScreen from 'react-native-splash-screen'; // Import if using this library
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {

  // useEffect(() => {
  //   // Hide the native splash screen once the JS bundle loads
  //   // Make sure react-native-splash-screen is configured natively
  //   SplashScreen.hide();
  // }, []);

  // Note: Default StatusBar settings can be set here, but often managed per-screen
  // or per-navigator for more control.

  return (
    <SafeAreaProvider>
      {/* NavigationContainer should wrap everything */}
      <NavigationContainer>
        {/* AppNavigator contains your stack and tab setup */}
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;