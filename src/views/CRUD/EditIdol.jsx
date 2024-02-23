import React, { useContext, useEffect, useState } from "react";
import { Alert, ScrollView } from "react-native";
import IdolDataForm from "../../components/IdolDataForm";
import { DBContext } from "../../context/DBContext";

const EditIdol = ({ route, navigation }) => {
  const { getIdol, editIdol } = useContext(DBContext);
  const { id } = route.params;
  const [idolData, setIdolData] = useState();

  useEffect(() => {
    console.log("We doing this shit");
    const dataToUpdate = getIdol(id);
    console.log("dataToUpdate", dataToUpdate);
    setIdolData(dataToUpdate);
  }, []);

  console.log("idolData", idolData);

  const handleEdit = () => {
    const response = editIdol(idolData);
    response > 0 &&
      Alert.alert(
        `${idolData.name} data was updated successfully`,
        "You'll be redirected to Idols list",
        [
          {
            text: "OK",
            onPress: () => navigation.goBack(),
          },
        ]
      );
  };

  return (
    <ScrollView style={{ padding: 10 }}>
      <IdolDataForm
        actionType="edit"
        onAction={handleEdit}
        setData={setIdolData}
        initialValues={idolData ? idolData : null}
      />
    </ScrollView>
  );
};

export default EditIdol;
