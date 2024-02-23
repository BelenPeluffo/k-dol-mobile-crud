import React from "react";
import { Button, Text, View } from "react-native";

const CRUD = ({ navigation }) => {
  return (
    <View
      style={{
        padding: 10,
        justifyContent: "center",
        width: "100%",
        flex: 1,
      }}
    >
      <Text style={{ textAlign: "center" }}>CRUD page</Text>
      <Button
        title="See idols"
        onPress={() => navigation.navigate("get")}
      ></Button>
      <Button
        title="Add idol"
        onPress={() => navigation.navigate("add")}
      ></Button>
    </View>
  );
};

export default CRUD;
