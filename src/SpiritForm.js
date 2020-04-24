import React, { useState, useEffect } from "react";

import SendSpirits from "./SendSpirits";

const SpiritForm = () => {
  const [receivedId, setReceivedId] = useState();

  async function handleSendSpirit(params) {
    try {
      const docRefId = await SendSpirits(params);
      setReceivedId(JSON.stringify(docRefId));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {}, []);

  return (
    <div>
      SEND SPIRIT
      <br />
      Last Sent Spirit Id: {receivedId}
      <br />
      <button
        onClick={() =>
          handleSendSpirit({
            Name: "Spirit"
          })
        }
      >
        Send Spirit
      </button>
    </div>
  );
};

export default SpiritForm;
