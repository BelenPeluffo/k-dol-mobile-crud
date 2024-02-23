import { signs } from "../constants/signs";

export const translatateValue = (value, valueType = "sign") => {
  console.log("value", value);
  return valueType === "sign"
    ? signs.filter((sign) => sign.value == value)[0].label
    : "positions";
};
