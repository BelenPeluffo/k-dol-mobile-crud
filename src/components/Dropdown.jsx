import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { Text, View } from "react-native";

const Dropdown = ({ label, options, setValue }) => {
  const [option, setOption] = useState(0);

  return (
    <View>
      <Text>{label}</Text>
      <RNPickerSelect
        placeholder={{ id: 0, label: `Select ${label.toLowerCase()}` }}
        items={options}
        onValueChange={(value) => {
          setOption(value);
          setValue(value);
        }}
        value={option || 0}
      />
    </View>
  );
};

export default Dropdown;
