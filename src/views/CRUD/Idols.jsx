import React, { useContext, useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { DBContext } from "../../context/DBContext";
import IdolDataAccordion from "../../components/IdolDataAccordion";
import { useIsFocused } from "@react-navigation/native";

const Idols = ({ navigation }) => {
  const { idols, deleteIdol, getAllIdols } = useContext(DBContext);
  const isFocused = useIsFocused();

  const handleNavigation = (view, idol) => {
    navigation.navigate(view, { id: idol.id });
  };

  const handleDelete = (idol) => {
    deleteIdol(idol.id);
    getAllIdols();
  };

  useEffect(() => {
    console.log("isFocused", isFocused);
  }, [isFocused]);

  return (
    <ScrollView style={{ padding: 10, width: "100%" }}>
      {idols.length > 0 ? (
        <IdolDataAccordion
          idols={idols}
          onEdit={handleNavigation}
          onDelete={handleDelete}
        />
      ) : (
        <Text>There are no idols in your DB.</Text>
      )}
    </ScrollView>
  );
};

export default Idols;
