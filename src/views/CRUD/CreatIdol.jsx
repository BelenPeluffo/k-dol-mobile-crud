import React, { useContext, useState } from "react";
import { ScrollView, Text, TextInput, Button, View, Alert } from "react-native";
import { createPlanetPlacementsDropdownList } from "../../utils/createDropdownList";
import { DBContext } from "../../context/DBContext";

const CreatIdol = ({ navigation }) => {
  const [idolData, setIdolData] = useState({
    name: "",
    sun: "",
    moon: "",
  });
  const { createIdol } = useContext(DBContext);
  const placementsList =
    createPlanetPlacementsDropdownList(handleDropdownChange);

  const handleNameChange = (name) => {
    console.log("name", name);
    setIdolData((current) => ({ ...current, name }));
  };

  function handleDropdownChange(property) {
    return (value) =>
      setIdolData((current) => {
        console.log("value?", value);
        return { ...current, [property]: value };
      });
  }

  const handleCreate = () => {
    console.log("is this shit working?");
    const response = createIdol(idolData);
    response > 0 &&
      Alert.alert(
        `${idolData.name} was added successfully`,
        "You'll be redirected to Idols list",
        [
          {
            text: "OK",
            onPress: () => navigation.navigate("get"),
          },
        ]
      );
  };

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
      <Button title="Add idol" onPress={handleCreate}></Button>
      {idolData && (
        <Text>
          {Object.keys(idolData).map((data) => `${data}: ${idolData[data]}\n`)}
        </Text>
      )}
    </ScrollView>
  );
};

export default CreatIdol;
