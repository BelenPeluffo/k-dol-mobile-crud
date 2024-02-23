import React, { useContext, useEffect, useState } from "react";
import { DBContext } from "../../context/DBContext";
const GetIdols = () => {
  const [idols, setIdols] = useState([]);
  const { idolService } = useContext(DBContext);

  useEffect(() => {
    const idols = idolService.getAll();
    console.log("idols", idols);
    setIdols(idols);
  }, []);

  return typeof idols !== "string" ? (
    idols.map((idol) => <Text>{idol.name}</Text>)
  ) : (
    <Text>{idols}</Text>
  );
};

export default GetIdols;
