import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import Dropdown from "../../components/Dropdown";
import { signs } from "../../constants/signs";

const CreatIdol = () => {
  const [idolData, setIdolData] = useState({
    sun: "",
  });

  const handleDropdownChange = (property) => {
    return (value) =>
      setIdolData((current) => {
        console.log('value?', value);
        return { ...current, [property]: value };
      });
  };

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 20, justifyContent: "center" }}>
        Idol's astro data
      </Text>
      <Text>Name</Text>
      <TextInput placeholder="Name" />
      {/* <Text>Sun sign</Text> */}
      <Dropdown
        label={"Sun sign"}
        options={signs}
        setValue={handleDropdownChange("sun")}
      />
      {idolData && <Text>{Object.keys(idolData).map((data) => `${data}: ${idolData[data]}`)}</Text>}
    </View>
  );
};

export default CreatIdol;
