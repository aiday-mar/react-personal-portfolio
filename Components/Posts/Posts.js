import React from 'react';
import {firestore, storage} from "./../../firebaseConfig.js";
import React,{useState,useEffect} from 'react';

export default function Posts() {

  var docRef = firestore.collection("Posts").doc("6Ep4X2Gpv2ZxcFYrXc2R");

  var getOptions = {
      source: 'cache'
  };

  docRef.get(getOptions).then((doc) => {
      console.log("Cached document data:", doc.data());
  }).catch((error) => {
      console.log("Error getting cached document:", error);
  });
}