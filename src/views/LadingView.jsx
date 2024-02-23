import React from "react";
import { Button, Text, View } from "react-native";
import { Navigation } from "react-native-navigation";

const LandingView = ({ navigation }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Text
        style={{
          fontSize: 50,
          width: "100%",
          marginBottom: 10,
          textAlign: "center",
        }}
      >
        Welcome to kIdol CRUD
      </Text>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        What R we going to do today?
      </Text>
      <Button
        title="Go to CRUD"
        onPress={() => navigation.navigate("CRUD")}
      ></Button>
    </View>
  );
};

export default LandingView;
