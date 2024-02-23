import React, { useContext, useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { DBContext } from "../../context/DBContext";
import IdolDataAccordion from "../../components/IdolDataAccordion";
import { useIsFocused } from "@react-navigation/native";

const Idols = ({ navigation }) => {
  const { idols } = useContext(DBContext);
  const isFocused = useIsFocused();

  const handleNavigation = (view, idol) => {
    navigation.navigate(view, { id: idol.id });
  };

  useEffect(() => {}, [isFocused]);

  return (
    <ScrollView style={{ padding: 10, width: "100%" }}>
      {idols.length > 0 ? (
        <IdolDataAccordion idols={idols} onNavigate={handleNavigation} />
      ) : (
        <Text>There are no idols in your DB.</Text>
      )}
    </ScrollView>
  );
};

export default Idols;
