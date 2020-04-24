import React, { useState, useEffect } from "react";
import GetSpirits from "./GetSpirits";

const SpiritTable = () => {
  const [responseData, setResponseData] = useState();

  async function handleGetSpirit() {
    try {
      alert("handleGetSpirit");
      const response = await GetSpirits();
      alert("response: " + response);
      setResponseData(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      SPIRIT TABLE
      <br />
      <button onClick={() => handleGetSpirit()}>Get Spirit</button>
      Table Data: {JSON.stringify(responseData)}
      <br />
    </div>
  );
};

export default SpiritTable;
