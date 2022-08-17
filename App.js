import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from "./screens/Login";
import PhotoList from "./components/PhotoList";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => {
          return {
            tabBarActiveTintColor: "lightblue",
            tabBarInactiveTintColor: "lightgrey",
          };
        }}
      >
        <Tab.Screen
          name="home"
          component={PhotoList}
          options={() => {
            return { tabBarIcon: () => <Icon name="house" size="20" /> };
          }}
        />

        <Tab.Screen
          name="login"
          component={Login}
          options={() => {
            return {
              tabBarIcon: () => (
                <Icon name="sc-telegram" type="evilicon" size="20" />
              ),
            };
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

    // <SafeAreaView style={styles.safeArea}>
    // <Login />
    // <PhotoList />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
});
