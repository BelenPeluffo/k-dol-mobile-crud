import React, { useContext, useState } from "react";
import { ScrollView, Alert } from "react-native";
import { DBContext } from "../../context/DBContext";
import IdolDataForm from "../../components/IdolDataForm";

const CreatIdol = ({ navigation }) => {
  const { createIdol } = useContext(DBContext);
  const [idolData, setIdolData] = useState({});

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
      <IdolDataForm
        actionType="create"
        onAction={handleCreate}
        setData={setIdolData}
      />
    </ScrollView>
  );
};

export default CreatIdol;
