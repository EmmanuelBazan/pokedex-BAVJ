import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NavigationComponent from "./src/navigation/NavigationComponent";

export default function App() {
  return (
    <NavigationContainer>
      <NavigationComponent/>
    </NavigationContainer>
  );
}
