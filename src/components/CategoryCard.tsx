import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import tw from 'twrnc';
import { colors } from '../theme/colors'; // Optional

interface CategoryCardProps {
  title: string;
  onPress: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw`mr-3 items-center`}
    >
      <View style={tw`w-16 h-16 bg-teal-100 rounded-full items-center justify-center mb-1`}>
        {/* Inset icon here bhai */}
        <Text style={tw`text-2xl`}>🍕</Text>
      </View>
      <Text style={tw`text-sm text-gray-700 dark:text-gray-300`}>{title}</Text>
    </TouchableOpacity>
  );
};