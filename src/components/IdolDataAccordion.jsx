import { useState } from "react";
import { Text, View } from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import { translatateValue } from "../utils/translateValue";

const IdolDataAccordion = ({ idols }) => {
  const [selectedSection, setSelectedSection] = useState([]);
  const idolName = (idol) => (
    <View>
      <Text style={{ fontSize: 20 }}>{idol.name}</Text>
    </View>
  );

  const idolPlacements = (idol) => (
    <View>
      <Text style={{ fontSize: 20 }}>
        {Object.keys(idol).map((property) =>
          property != "name" && property != "id"
            ? `${property}: ${translatateValue(idol[property])}`
            : null
        )}
      </Text>
    </View>
  );

  const updateSelectedIdol = (selectedIdol) => {
    console.log("selectedIdol", selectedIdol);
    setSelectedSection(selectedIdol);
  };
  return (
    <Accordion
      sections={idols}
      activeSections={selectedSection}
      renderSectionTitle={() => null}
      renderHeader={idolName}
      renderContent={idolPlacements}
      onChange={updateSelectedIdol}
    />
  );
};

export default IdolDataAccordion;
