import React, { useState, useEffect } from "react";
import firebase from "./firebase";

async function GetSpirits() {
  alert("GetSpirits");

  var db = firebase.firestore();

  //listOfObjects.push("new");

  //alert(listOfObjects);

  let listOfObjects;

  await db
    .collection("Spirit")
    .get()
    .then(function(qSnap) {
      //alert(JSON.stringify(qSnap));
      listOfObjects = [];
      qSnap.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        listOfObjects.push(JSON.stringify(doc.data()));
      });
      alert(listOfObjects);
      //return listOfObjects;
    });
  return listOfObjects;
}

export default GetSpirits;
