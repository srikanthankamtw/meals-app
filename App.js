import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import CategoryScreen from "./Screens/CategoryScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import MealsScreen from "./Screens/MealsScreen";
import MealDetailsScreen from "./Screens/MealDetailsScreen";
import FavouritesScreen from "./Screens/FavouritesScreen";
import { Ionicons } from "@expo/vector-icons";
import FavouritesContextProvider from "./store/context/favouritesContext";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Categories"
        component={CategoryScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <FavouritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="AllCatgeories"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen name="Items" component={MealsScreen}></Stack.Screen>
            <Stack.Screen
              name="Item"
              component={MealDetailsScreen}
              options={{
                drawerIcon: ({ color, size }) => (
                  <Ionicons name="heart" size={size} color={color} />
                ),
              }}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </FavouritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({});
