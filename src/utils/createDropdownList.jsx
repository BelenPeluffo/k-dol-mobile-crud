import Dropdown from "../components/Dropdown";
import { positions } from "../constants/positions";
import { signs } from "../constants/signs";

export const createPlanetPlacementsDropdownList = (handler) => {
  return positions.map((position) => (
    <Dropdown
      label={`${position.label} sign`}
      options={signs}
      setValue={handler(position.label)}
    />
  ));
};
