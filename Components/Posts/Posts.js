import React from 'react';
// import {firestore, storage} from "./../../firebaseConfig.js";
import React,{useState,useEffect} from 'react';
import firebase from "firebase/app";
import "firebase/firestore";

export default function Posts() {

    
    const firebaseConfig = {
    apiKey: "AIzaSyCt881Whr_wRdjoiXMaYT9tDVWoFMjM8Dk",
    authDomain: "aiday-marlen-kyzy.firebaseapp.com",
    databaseURL: "https://aiday-marlen-kyzy.firebaseio.com",
    projectId: "aiday-marlen-kyzy",
    storageBucket: "aiday-marlen-kyzy.appspot.com",
    messagingSenderId: "215890159247",
    appId: "1:215890159247:web:6c6e0a7e5262a3e57372fa",
    measurementId: "G-X55KFKXFK7"
    };

    if (!firebase.apps.length) {
        const firebaseApp = firebase.initializeApp(firebaseConfig);
    }

    const firestore = firebase.firestore();
    firestore.enableLogging(true);

    const [blogs,setBlogs]=useState([])
    const fetchBlogs=async()=>{
      const response=firestore.collection('Posts');
      const data=await response.get();
      data.docs.forEach(item=>{
       setBlogs([...blogs,item.data()])
      })
    }
    useEffect(() => {
      fetchBlogs();
    }, [])
    return (
      <div>
        {
          blogs && blogs.map(blog=>{
            return(
              <div>
                <h4>{blog.title}</h4>
                <p>{blog.body}</p>
              </div>
            )
          })
        }
      </div>
    );
}