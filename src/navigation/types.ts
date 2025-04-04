import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define Param lists for each navigator

export type TabParamList = {
  Home: undefined; // No params expected for Home tab
  Explore: undefined;
  Orders: undefined;
  Profile: undefined;
};

// For the Main Stack Navigator
export type RootStackParamList = {
  MainTabs: NavigatorScreenParams<TabParamList>; // Nested Tab Navigator
  NotFound: undefined;
  // Add other stack screens here if needed, e.g.:
  // Settings: undefined;
  // RestaurantDetails: { restaurantId: string };
};



// Type props for screens within the Root Stack
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;



export type TabScreenProps<T extends keyof TabParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, T>,
  RootStackScreenProps<keyof RootStackParamList> 
  // Allows navigation from tabs to stack screens
>;






declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}