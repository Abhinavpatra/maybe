import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import tw from 'twrnc';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Use correct import
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Use correct import
import { useNavigation } from '@react-navigation/native'; // For navigation actions
import { colors } from '../theme/colors';
import { JSX } from 'react/jsx-runtime';

export default function ProfileScreen() { 


  // const navigation = useNavigation(); // Use hook if needed

  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profileImage: null // In the real app we make for him , this would be a URI string or undefined
  };

  interface MenuItem {
    id: string;
    title: string;
    icon: (props: { size: number; color: string }) => JSX.Element;
    navigateTo?: string; // Optional: only needed if navigating
    onPress?: () => void; // Optional: for actions like logout
    textColor?: string;
  }

  const handleNavigate = (screenName: string | undefined): void => {
    if (screenName) {
      console.log(`Navigating to ${screenName}`);
      
    } else {
       console.log('No navigation target specified for this item.');
    }
  };

  // Handle logout
  const handleLogout = () => {
    console.log('Logging out...');
    // Add your actual logout logic here
    // e.g., clear auth tokens, navigate to Login screen
    // navigation.navigate('AuthStack'); // Example navigation after logout
  };


  const menuItems: MenuItem[] = [
    { id: 'settings', title: 'Settings', icon: props => <Ionicons name="settings-outline" {...props} />, navigateTo: 'Settings' }, // Assumes 'Settings' screen exists in RootStack
    { id: 'payment', title: 'Payment Methods', icon: props => <MaterialIcons name="credit-card" {...props} />, navigateTo: 'PaymentMethods' }, // Assumes 'PaymentMethods' screen exists
    { id: 'notifications', title: 'Notifications', icon: props => <Ionicons name="notifications-outline" {...props} />, navigateTo: 'Notifications' }, // Assumes 'Notifications' screen exists
    { id: 'favorites', title: 'Favorites', icon: props => <Ionicons name="heart-outline" {...props} />, navigateTo: 'Favorites' }, // Assumes 'Favorites' screen exists
    { id: 'addresses', title: 'Addresses', icon: props => <Ionicons name="location-outline" {...props} />, navigateTo: 'Addresses' }, // Assumes 'Addresses' screen exists
    { id: 'help', title: 'Help & Support', icon: props => <Ionicons name="help-circle-outline" {...props} />, navigateTo: 'HelpSupport' }, // Assumes 'HelpSupport' screen exists
    { id: 'logout', title: 'Log Out', icon: props => <MaterialIcons name="logout" {...props} color={colors.redError} />, onPress: handleLogout, textColor: colors.redError }
  ];


  //above is random AI generated array

  return (
    <SafeAreaView style={tw`flex-1 bg-white dark:bg-gray-900 mt-10`}>
       <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

      <View style={tw`p-6 border-b border-gray-200 dark:border-gray-700`}>
        <Text style={tw`text-2xl font-bold text-gray-900 dark:text-white text-center`}>
          Profile
        </Text>
      </View>

      <ScrollView style={tw`flex-1`}>
        {/* User Info Section */}
        <View style={tw`items-center my-6 px-4`}>
           {/* For image of user */}
          <Image
            source={user.profileImage ? { uri: user.profileImage } : require('../assets/images/default-avatar.png')}
            style={tw`w-24 h-24 rounded-full bg-gray-200 mb-3 border-2 border-gray-300`}
            resizeMode="cover"
          />
          <Text style={tw`text-xl font-bold text-gray-900 dark:text-white mb-1`}>
            {user.name}
          </Text>
          <Text style={tw`text-gray-500 dark:text-gray-400`}>
            {user.email}
          </Text>
           {/* for the  Edit Button */}
           <TouchableOpacity style={tw`mt-3 py-1 px-4 border border-teal-600 rounded-full`}>
              <Text style={tw`text-teal-600 font-semibold`}>Edit Profile</Text>
           </TouchableOpacity>
        </View>

        {/* Menu Items Section */}
        <View style={tw`mb-8`}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={tw`flex-row items-center py-4 px-6 border-b border-gray-100 dark:border-gray-800`}
              onPress={() => item.onPress ? item.onPress() : handleNavigate(item.navigateTo)}
              activeOpacity={0.7}
            >
              <View style={tw`w-8 items-center`}>
                {item.icon({ size: 22, color: item.textColor || colors.gray500 })}
              </View>
              <Text
                style={[
                  tw`flex-1 ml-4 text-base`,
                  item.textColor ? { color: item.textColor } : tw`text-gray-800 dark:text-white`
                ]}
              >
                {item.title}
              </Text>
              {item.navigateTo && (
                 <MaterialIcons name="chevron-right" size={24} color={colors.gray500} />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}