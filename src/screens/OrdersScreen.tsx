import React from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet, useColorScheme } from 'react-native';
import tw from 'twrnc';
import Ionicons from 'react-native-vector-icons/Ionicons';// find appropriate icons also for this if possible
// actually wherever you see Ionicons add and fix stuff there, add apt symbols, after finding them
import { colors } from '../theme/colors'; // Assuming you have this

export default function OrdersScreen() {
  const colorScheme = useColorScheme();
  
  return (
    <SafeAreaView style={tw`flex-1 bg-white dark:bg-gray-900 mt-10`}>

      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colorScheme === 'dark' ? colors.gray900 : colors.white}
      />

      <View style={tw`p-6 border-b border-gray-200 dark:border-gray-700 items-center`}>
        <Text style={tw`text-xl font-bold text-gray-900 dark:text-white`}>
          My Orders
        </Text>
      </View>

      <View style={tw`flex-1 items-center justify-center p-5`}>

        
        <Ionicons
          name="receipt-outline" // Example icon
          size={60}
          color={colors.teal600} 
          style={tw`mb-4`}
        />


        <Text style={tw`text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 text-center`}>
          No Orders Yet!
        </Text>
        <Text style={tw`text-gray-600 dark:text-gray-400 text-center`}>
          Looks like you haven't placed any orders. When you do, they'll show up here.
        </Text>
       
        {/* You could add a button to browse restaurants */}
        {/* <TouchableOpacity style={tw`mt-6 bg-teal-600 py-3 px-6 rounded-lg`}>
          <Text style={tw`text-white font-bold text-base`}>Start Ordering</Text>
        </TouchableOpacity> */}


      </View>
    </SafeAreaView>
  );
}