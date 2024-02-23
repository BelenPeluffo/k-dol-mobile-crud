import { useContext, useState } from "react";
import { Button, Text, View } from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import { translatateValue } from "../utils/translateValue";
import { DBContext } from "../context/DBContext";

const IdolDataAccordion = ({ idols, onNavigate }) => {
  const { deleteIdol } = useContext(DBContext);
  const [selectedIdol, setSelectedIdol] = useState([]);
  const idolName = (idol) => (
    <View style={{ paddingBottom: 10 }}>
      <Text style={{ fontSize: 20 }}>{idol.name}</Text>
    </View>
  );

  const idolPlacements = (idol) => (
    <View style={{ width: "100%" }}>
      <Text style={{ fontSize: 20 }}>
        {Object.keys(idol).map((property) =>
          property != "name" && property != "id"
            ? `${property}: ${translatateValue(idol[property])}\n`
            : null
        )}
      </Text>
      <View style={{ width: "100%", flexDirection: "row" }}>
        <Button
          title="Edit"
          onPress={() => onNavigate("edit", idol)}
        ></Button>
        <Button
          title="Delete"
          onPress={() => deleteIdol(idol.id)}
        ></Button>
      </View>
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
