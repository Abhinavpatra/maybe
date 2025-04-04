import React from 'react';
import { View, TextInput } from 'react-native';
import tw from 'twrnc';
import { colors } from '../theme/colors'; 

export const SearchBar = () => {
  return (
    <View style={tw`flex-row items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-lg mx-4 my-4`}>
      <TextInput
        placeholder="Search restaurants or dishes"
        placeholderTextColor={colors.gray500}
        style={tw`flex-1 text-gray-900 dark:text-white`}
      />
    </View>
  );
};