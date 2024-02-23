import React, { useContext } from "react";
import { ScrollView, Text } from "react-native";
import { DBContext } from "../../context/DBContext";
import IdolDataAccordion from "../../components/IdolDataAccordion";

const Idols = ({ navigation }) => {
  const { idols } = useContext(DBContext);
  
  const handleNavigation = (view, idol) => {
    navigation.navigate(view, { id: idol.id });
  }

  return (
    <ScrollView style={{ padding: 10 }}>
      {idols.length > 0 ? (
        <IdolDataAccordion idols={idols} onNavigate={handleNavigation} />
      ) : (
        <Text>There are no idols in your DB.</Text>
      )}
    </ScrollView>
  );
};

export default Idols;
