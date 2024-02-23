import { useState } from "react";
import { Button, Text, View } from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import { translatateValue } from "../utils/translateValue";

const IdolDataAccordion = ({ idols, onNavigate }) => {
  const [selectedIdol, setSelectedIdol] = useState([]);
  const idolName = (idol) => (
    <View style={{ paddingBottom: 10 }}>
      <Text style={{ fontSize: 20 }}>{idol.name}</Text>
    </View>
  );

  const idolPlacements = (idol) => (
    <View>
      <Text style={{ fontSize: 20 }}>
        {Object.keys(idol).map((property) =>
          property != "name" && property != "id"
            ? `${property}: ${translatateValue(idol[property])}\n`
            : null
        )}
      </Text>
      <Button title="Edit" onPress={() => onNavigate("add", idol)}></Button>
    </View>
  );

  const updateSelectedIdol = (selectedIdol) => {
    console.log("selectedIdol", selectedIdol);
    setSelectedIdol(selectedIdol);
  };
  return (
    <Accordion
      sections={idols}
      activeSections={selectedIdol}
      renderSectionTitle={() => null}
      renderHeader={idolName}
      renderContent={idolPlacements}
      onChange={updateSelectedIdol}
    />
  );
};

export default IdolDataAccordion;
