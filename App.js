import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Notes from "./components/Notes.js";
import React from "react";
import { StyleSheet } from "react-native";
import { AppRegistry } from "react-native";

const Page = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Page.Navigator>
        <Page.Screen
          name="Notes"
          component={Notes}
          options={{ title: 'Notes' }}
        />
        <Page.Screen
          name="Homepage"
          component={Home}
          options={{ title: 'Homepage' }}
        />
      </Page.Navigator>
    </NavigationContainer>

  )
}

const styles = () => StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})

AppRegistry.registerComponent('main', () => App); 
