import React, { useEffect, useState } from "react";
import { IdolServices } from "../../database/IdolServices";
import { DB } from "../../database/db";

const GetIdols = () => {
  const idolService = new IdolServices(DB);
  const [idols, setIdols] = useState([]);

  useEffect(() => {
    const idols = idolService.getAll();
    console.log("idols", idols);
    setIdols(idols);
  },[])

  return typeof idols !== "string" ? (
    idols.map((idol) => <Text>{idol.name}</Text>)
  ) : (
    <Text>{idols}</Text>
  );
};

export default GetIdols;
