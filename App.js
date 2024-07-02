import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CheckoutScreen from "./screens/CheckoutScreen";
import CartScreen from "./screens/CartScreen";

import { Ionicons } from "@expo/vector-icons";
import SingleProductScreen from "./screens/SingleProductScreen";
import { ContextProvider } from "./contexts/CartContext";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#101010",
        headerStyle: {
          backgroundColor: "#101010",
        },
        headerTintColor: "#FFFFFF",
        sceneContainerStyle: { backgroundColor: "#ffff" },
      }}
    >
      <Tab.Screen
        name="Products"
        options={{
          title: "Home ",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Cart"
        options={{
          title: "Cart",

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-sharp" size={size} color={color} />
          ),

          // will set this options inside the Cart screen
        }}
        component={CartScreen}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <ContextProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MainProduct"
            component={TabNav}
            options={{
              headerShown: false,
              headerBackTitle: "Back",
              headerBackTitleVisible: false,
            }}
          />

          <Stack.Screen
            name="Checkout"
            options={{
              title: "Checkout",
            }}
            component={CheckoutScreen}
          />
          <Stack.Screen name="Product" component={SingleProductScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
