import { useEffect, useState } from "react";
import { IdolServices } from "../database/IdolServices";
import { DB } from "../database/db";
import { DBContext } from "./DBContext";

export const DBProvider = ({ children }) => {
  const idolService = new IdolServices(DB);
  const [idols, setIdols] = useState([]);

  useEffect(() => {
    const idols = getAllIdols();
    console.log("idols", idols);
    setIdols(idols);
  }, []);

  const createIdol = (idol) => {
    console.log("create Idol");
    idolService.create(idol);
    return 1;
  };

  const editIdol = (idol) => {
    idolService.update(idol);
  };

  function getAllIdols() {
    console.log("get all idols");
    return idolService.getAll();
  }

  const getIdol = (idolId) => {
    idolService.get(idolId);
  };

  return (
    <DBContext.Provider
      value={{ createIdol, getAllIdols, getIdol, editIdol, idols }}
    >
      {children}
    </DBContext.Provider>
  );
};
