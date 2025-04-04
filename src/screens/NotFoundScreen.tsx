import React from 'react';
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, useColorScheme } from 'react-native';
import tw from 'twrnc';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme/colors'; 

export default function NotFoundScreen() {
  const navigation = useNavigation();
    const colorScheme = useColorScheme();
  

  // Function to go back or to the home screen
  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('MainTabs', { screen: 'Home' });
    }
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white dark:bg-gray-900 mt-10`}>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colorScheme === 'dark' ? colors.gray900 : colors.white}
      />

      <View style={tw`flex-1 items-center justify-center p-8`}>
        <Ionicons
          name="alert-circle-outline"
          size={70}
          color={colors.redError} 
          style={tw`mb-5`}
        />
        <Text style={tw`text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 text-center`}>
          Oops! Screen Not Found
        </Text>
        <Text style={tw`text-gray-600 dark:text-gray-400 text-center mb-8`}>
          The screen you're looking for doesn't seem to exist or might have been moved.
        </Text>

        {/* Button to navigate back or home */}
        <TouchableOpacity
          onPress={handleGoBack}
          style={tw`bg-teal-600 py-3 px-8 rounded-lg shadow-md`}
        >
          <Text style={tw`text-white font-bold text-base`}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}