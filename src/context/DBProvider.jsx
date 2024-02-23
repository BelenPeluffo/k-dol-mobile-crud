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

  const deleteIdol = (idolId) => {
    idolService.delete(idolId);
  }

  const editIdol = (idol) => {
    idolService.update(idol);
    return 1;
  };

  function getAllIdols() {
    console.log("get all idols");
    return idolService.getAll();
  }

  const getIdol = (idolId) => {
    return idolService.get(idolId);
  };

  return (
    <DBContext.Provider
      value={{ createIdol, deleteIdol, getAllIdols, getIdol, editIdol, idols }}
    >
      {children}
    </DBContext.Provider>
  );
};
