import React, { useContext } from "react";
import { ScrollView, Text } from "react-native";
import { DBContext } from "../../context/DBContext";

const Idols = () => {
  const { idols } = useContext(DBContext);
  console.log("idols", idols);

  return (
    <ScrollView>
      {idols.length > 0 ? (
        idols.map((idol) => <Text key={idol.id}>{idol.name}</Text>)
      ) : (
        <Text>There are no idols in your DB.</Text>
      )}
    </ScrollView>
  );
};

export default Idols;
