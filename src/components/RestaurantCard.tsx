import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';

interface RestaurantCardProps {
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  onPress: () => void;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  name,
  cuisine,
  rating,
  deliveryTime,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw`bg-white dark:bg-gray-800 rounded-lg shadow-md mb-4 overflow-hidden`}
    >
      {/* The custom Image jo chahiye for each restaurant */}
      <View style={tw`w-full h-32 bg-gray-200 dark:bg-gray-700`}>
        <Image
          // source={{ uri: 'your_image_uri' }} Add image source later

          source={{ uri: '../assets/images/restaurant-image.jpeg' }} 

          style={tw`w-full h-full`}
          resizeMode="cover"
        />
      </View>
      <View style={tw`p-3`}>
        <Text style={tw`text-lg font-bold text-gray-900 dark:text-white mb-1`}>{name}</Text>
        <Text style={tw`text-sm text-gray-600 dark:text-gray-400 mb-2`}>{cuisine}</Text>
        <View style={tw`flex-row justify-between items-center`}>
          <View style={tw`flex-row items-center`}>
             <Text style={tw`text-sm text-gray-700 dark:text-gray-300`}>{rating}</Text>
          </View>
          <Text style={tw`text-sm text-gray-700 dark:text-gray-300`}>{deliveryTime}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};