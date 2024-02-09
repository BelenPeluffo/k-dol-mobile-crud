import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LandingView from "./src/views/LadingView";

export default function App() {
  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", width: "100vw" }}
    >
      <LandingView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
