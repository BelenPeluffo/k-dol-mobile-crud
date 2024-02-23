import React, { useContext, useState } from "react";
import { ScrollView, Text, TextInput, Button, View } from "react-native";
import { createPlanetPlacementsDropdownList } from "../../utils/createDropdownList";
import { DBContext } from "../../context/DBContext";

const CreatIdol = () => {
  const [idolData, setIdolData] = useState({
    name: "",
    sun: "",
    moon: "",
  });
  const { createIdol } = useContext(DBContext);

  const handleNameChange = (name) => {
    console.log('name', name);
    setIdolData((current) => ({ ...current, name }));
  };

  const handleDropdownChange = (property) => {
    return (value) =>
      setIdolData((current) => {
        console.log("value?", value);
        return { ...current, [property]: value };
      });
  };

  const placementsList =
    createPlanetPlacementsDropdownList(handleDropdownChange);

  return (
    <ScrollView style={{ padding: 10 }}>
      <Text style={{ fontSize: 20, justifyContent: "center" }}>
        Idol's astro data
      </Text>
      <Text>Name</Text>
      <TextInput
        placeholder="Name"
        onChangeText={(value) => handleNameChange(value)}
      />
      <View style={{ padding: 10 }}>
        {placementsList.map((dropdown) => dropdown)}
      </View>
      <Button
        title="Add idol"
        onPress={() => createIdol(idolData)}
      ></Button>
      {idolData && (
        <Text>
          {Object.keys(idolData).map((data) => `${data}: ${idolData[data]}\n`)}
        </Text>
      )}
    </ScrollView>
  );
};

export default CreatIdol;
