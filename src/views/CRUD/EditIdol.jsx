import React, { useContext, useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import IdolDataForm from "../../components/IdolDataForm";
import { DBContext } from "../../context/DBContext";

const EditIdol = ({ route, navigation }) => {
  const { getIdol } = useContext(DBContext);
  const { id } = route.params;
  const [idolData, setIdolData] = useState();

  useEffect(() => {
    console.log('We doing this shit');
    const dataToUpdate = getIdol(id);
    console.log('dataToUpdate', dataToUpdate);
    setIdolData(dataToUpdate);
  }, []);

  console.log("idolData", idolData);

  const handleEdit = () => {};

  return (
    <ScrollView style={{ padding: 10 }}>
      <Text>{id ? id : null}</Text>
      <IdolDataForm
        actionType="create"
        onAction={handleEdit}
        setData={setIdolData}
      />
    </ScrollView>
  );
};

export default EditIdol;
