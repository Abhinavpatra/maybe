import React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import tw from 'twrnc';
import { colors } from '../theme/colors';

export default function ExploreScreen() {
  return (
    <SafeAreaView style={tw`flex-1 items-center justify-center bg-white dark:bg-gray-900 mt-10`}>
       <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <Text style={tw`text-xl text-gray-800 dark:text-white`}>Explore Screen</Text>
      
      {/*for details yahan */}
    </SafeAreaView>
  );
}