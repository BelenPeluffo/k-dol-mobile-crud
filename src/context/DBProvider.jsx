import { IdolServices } from "../database/IdolServices";
import { DB } from "../database/db";
import { DBContext } from "./DBContext";

export const DBProvider = ({ children }) => {
  const idolService = new IdolServices(DB);

  const createIdol = (idol) => {
    console.log("create Idol");
    idolService.create(idol);
    return 1;
  };

  return (
    <DBContext.Provider value={{ createIdol }}>{children}</DBContext.Provider>
  );
};
