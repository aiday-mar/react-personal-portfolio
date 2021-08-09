import React from 'react';
import {firestore, storage} from "./../../firebaseConfig.js";
import React,{useState,useEffect} from 'react';
import firebase from "firebase/app";
import "firebase/firestore";

export default function Posts() {

    const [blogs,setBlogs]=useState([])
    const fetchBlogs=async()=>{
      const response=firestore.collection('Posts');
      const data=await response.get();
      data.docs.forEach(item=>{
       const jsonId = {id : item.id}
       const modifiedBlog = {...jsonId, ...item.data()}
       setBlogs([...blogs, modifiedBlog])
       console.log("Document id:", modifiedBlog.id)
       console.log("Document title:", modifiedBlog.title)
       console.log("Document body:", modifiedBlog.body)
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
              <div key={blog.id}>
                <h4>{blog.id}</h4>
                <h4>{blog.title}</h4>
                <p>{blog.body}</p>
              </div>
            )
          })
        }
      </div>
    );
}