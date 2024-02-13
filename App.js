import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LandingView from "./src/views/LadingView";
import { Navigation } from "react-native-navigation";
import CRUD from "./src/views/CRUD";
import { AppNavigation } from "./src/routes/AppNavigation";

export default function App() {
  return (
    <AppNavigation />
  );
}

App.options = {
  topBar: {
    title: {
      text: 'Home'
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
