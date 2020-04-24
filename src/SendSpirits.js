import React, { useState, useEffect } from "react";
import firebase from "./firebase";

async function SendSpirits(props) {
  alert("SendSpirits");
  alert(props.Name);

  var db = firebase.firestore();

  const docRef = await db.collection("Spirit").add({
    Name: props.Name
  });

  alert("SendSpirits: " + docRef.id);
  return docRef.id;
}

export default SendSpirits;
