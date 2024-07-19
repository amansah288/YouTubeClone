import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TextInput,
  Pressable,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import ShortVi from "./ShortVi";
import CreatScreen from "./CreatScreen";
import SubcriptionScreen from "./SubcriptionScreen";
import UserScreen from "./UserScreen";
import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Notification from "./Notification";
import SearchScreen from "./SearchScreen";
import SVScreen from "./SVScreen";
import { supabase } from "../Auth/Client";
import { useState } from "react";
import AuthScreen from "./AuthScreen";
import SetingScreen from "./SetingScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function MainScreen({ navigation }) {
  const [newCont, setNewCont] = useState(true);
  const [main, setMain] = useState(false);

  const [token, setToken] = useState(false);

  function AllScreen({ navigation }) {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { paddingBottom: 15, height: "9%" },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Foundation name="home" size={24} color="black" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Shorts"
          component={ShortVi}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image
                  src="https://img.icons8.com/?size=100&id=2X8KoO8YIB6T&format=png&color=000000"
                  style={{ height: 24, width: 24 }}
                />
              ) : (
                <Image
                  src="https://img.icons8.com/?size=100&id=ajczeHCWXbyR&format=png&color=000000"
                  style={{ height: 24, width: 24 }}
                />
              ),
          }}
        />
        <Tab.Screen
          name="Create"
          component={CreatScreen}
          options={{
            tabBarIcon: () => (
              <AntDesign name="pluscircleo" size={26} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Subcription"
          component={SubcriptionScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons
                  name="youtube-subscription"
                  size={24}
                  color="black"
                />
              ) : (
                <Image
                  src="https://img.icons8.com/?size=100&id=ofOsKkKZXlIp&format=png&color=000000"
                  style={{ height: 24, width: 24 }}
                />
              ),
          }}
        />
        <Tab.Screen
          name="You"
          component={UserScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome name="user" size={24} color="black" />
              ) : (
                <FontAwesome name="user-o" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="All" component={AllScreen} />
        <Stack.Screen name="Notif" component={Notification} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ShortVideo" component={ShortVi} />
        <Stack.Screen name="Setting" component={SetingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
