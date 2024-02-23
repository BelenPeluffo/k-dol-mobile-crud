import React, { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import Dropdown from "../../components/Dropdown";
import { signs } from "../../constants/signs";
import { createPlanetPlacementsDropdownList } from "../../utils/createDropdownList";

const CreatIdol = () => {
  const [idolData, setIdolData] = useState({
    sun: "",
    moon: "",
  });

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
      <TextInput placeholder="Name" />
      {placementsList.map((dropdown) => dropdown)}
      {idolData && (
        <Text>
          {Object.keys(idolData).map((data) => `${data}: ${idolData[data]}\n`)}
        </Text>
      )}
    </ScrollView>
    // <View style={{ padding: 10 }}>
    // <Text style={{ fontSize: 20, justifyContent: "center" }}>
    //   Idol's astro data
    // </Text>
    // <Text>Name</Text>
    // <TextInput placeholder="Name" />
    // {placementsList.map((dropdown) => dropdown)}
    // {idolData && (
    //   <Text>
    //     {Object.keys(idolData).map((data) => `${data}: ${idolData[data]}\n`)}
    //   </Text>
    // )}
    // </View>
  );
};

export default CreatIdol;
