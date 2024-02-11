import React from "react";
import { Button, Text, View } from "react-native";
import { Navigation } from "react-native-navigation";

const LandingView = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontSize: 50, width: "100%", marginBottom: 10 }}>
        Welcome to kIdol CRUD
      </Text>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        What R we going to do today?
      </Text>
      <Button title="Go to CRUD" /*onPress={}*/></Button>
    </View>
  );
};

Navigation.registerComponent('Home', () => LandingView);

export default LandingView;
