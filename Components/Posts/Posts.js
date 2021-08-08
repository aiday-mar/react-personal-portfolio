import React from 'react';
import {firestore} from "./../../firebaseConfig.js";
import React,{useState,useEffect} from 'react';

export default function Posts() {

  const [blogs,setBlogs]=useState([])
  const fetchBlogs=async()=>{
    const response=db.collection('Posts');
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