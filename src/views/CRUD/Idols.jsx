import React, { useContext } from "react";
import { ScrollView, Text } from "react-native";
import { DBContext } from "../../context/DBContext";
import IdolDataAccordion from "../../components/IdolDataAccordion";

const Idols = () => {
  const { idols } = useContext(DBContext);
  console.log("idols", idols);

  return (
    <ScrollView style={{ padding: 10 }}>
      {idols.length > 0 ? (
        <IdolDataAccordion idols={idols} />
      ) : (
        <Text>There are no idols in your DB.</Text>
      )}
    </ScrollView>
  );
};

export default Idols;
