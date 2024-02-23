import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { createPlanetPlacementsDropdownList } from "../utils/createDropdownList";

const IdolDataForm = ({ actionType, onAction, setData }) => {
  const placementsList =
    createPlanetPlacementsDropdownList(handleDropdownChange);

  const handleNameChange = (name) => {
    console.log("name", name);
    setData((current) => ({ ...current, name }));
  };

  function handleDropdownChange(property) {
    return (value) =>
      setData((current) => {
        console.log("value?", value);
        return { ...current, [property]: value };
      });
  }

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 20, justifyContent: "center" }}>
        Idol's astro data
      </Text>
      <Text>Name</Text>
      <TextInput
        placeholder="Name"
        onChangeText={(value) => handleNameChange(value)}
      />
      <View
        style={{
          padding: 10,
          width: "100%",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {placementsList.map((dropdown) => dropdown)}
      </View>
      <Button
        title={actionType == "create" ? "Add idol" : "Edit idol"}
        onPress={onAction}
      ></Button>
    </View>
  );
};

export default IdolDataForm;
