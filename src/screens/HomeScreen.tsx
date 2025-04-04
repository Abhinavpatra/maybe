import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView, 
  StatusBar,    
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // find right image imports for this as well
import tw from 'twrnc';
import { SearchBar } from '../components/SearchBar';
import { CategoryCard } from '../components/CategoryCard';
import { RestaurantCard } from '../components/RestaurantCard';
import { colors } from '../theme/colors';


const categories = [
  'Pizza', 'Burger', 'Sushi', 'Indian', 'Mexican', 'Italian', 'Chinese', 'Thai',
];

const featuredRestaurants = [
  { name: 'Pizza Paradise', cuisine: 'Italian', rating: 4.8, deliveryTime: '30-40 min' },
  { name: 'Sushi Master', cuisine: 'Japanese', rating: 4.9, deliveryTime: '25-35 min' },
  { name: 'Burger House', cuisine: 'American', rating: 4.7, deliveryTime: '20-30 min' },
];

// export default function HomeScreen({ navigation }: TabScreenProps<'Home'>) { // Option 1: Use props
export default function HomeScreen() { // Option 2: Use hook (simpler if not passing props down)


   // const navigation = useNavigation(); // Use hook if needed for navigation actions

  return (
    
    <SafeAreaView style={tw`flex-1 bg-white dark:bg-gray-900 mt-10`}>
       <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

      <View style={tw`flex-row justify-between items-center px-4 py-3`}>
        <Text style={tw`text-2xl font-bold text-gray-900 dark:text-white`}>
          Hi User-Everyone
        </Text>

        {/* Maybe add a notification icon or similar here */}

        <TouchableOpacity>
           <Ionicons name="notifications-outline" size={24} color={colors.gray900} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar />

        {/* For Categories add stuuf and shit here  */}
        
        <View style={tw`px-4 mt-2`}>
          <Text style={tw`text-xl font-bold mb-3 text-gray-900 dark:text-white`}>
            Categories
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`mb-4`}>
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                title={category}
                onPress={() => console.log('Category pressed:', category)}
              />
            ))}
          </ScrollView>
        </View>

        {/* Featured Restaurants Section */}
        <View style={tw`px-4 mt-4 mb-4`}>
          <Text style={tw`text-xl font-bold mb-3 text-gray-900 dark:text-white`}>
            Featured Restaurants
          </Text>
          {featuredRestaurants.map((restaurant, index) => (
            <RestaurantCard
              key={index}
              name={restaurant.name}
              cuisine={restaurant.cuisine}
              rating={restaurant.rating}
              deliveryTime={restaurant.deliveryTime}
              onPress={() => console.log('Restaurant pressed:', restaurant.name)}



              // onPress={() => navigation.navigate('RestaurantDetails', { restaurantId: restaurant.id })} // Example navigation to the full page if we make it SOMEDAY


            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}