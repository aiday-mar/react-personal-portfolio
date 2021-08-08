import React,{useState,useEffect} from 'react';

import {
  FirestoreCollection
} from "@react-firebase/firestore";
import firebaseConfig from './../../firebase.config.js';
import { FirestoreProvider } from "@react-firebase/firestore";
import firebase from "firebase/app";
import "firebase/firestore";

// export default class Posts extends React.Component
export default function Posts() {

  return(
    <FirestoreProvider firebase={firebase} {...firebaseConfig}>
      <FirestoreCollection path="/Posts/" limit={1}>
        {post => {
          return post.isLoading ? "Loading" : <pre>{post.title}</pre>;
        }}
      </FirestoreCollection>
    </FirestoreProvider>
  )
}