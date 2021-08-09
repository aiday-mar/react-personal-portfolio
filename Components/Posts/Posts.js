import React from 'react';
import {firestore, storage} from "./../../firebaseConfig.js";
import React,{useState,useEffect} from 'react';
import "firebase/firestore";
import {
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";

export default function Posts() {
  
    const [blogs,setBlogs]=useState([])

    const fetchBlogs=async()=>{
      const posts = []
      const response=firestore.collection('Posts');
      const data=await response.get();
      data.docs.forEach(item=>{
       const jsonId = {id : item.id}
       const modifiedBlog = {...jsonId, ...item.data()}
       posts.push(modifiedBlog)
      })
      setBlogs(posts)
    }

    useEffect(() => {
      fetchBlogs();
    }, [])

    return (
      <div class="outer-posts">
      {
      React.Children.toArray(
        blogs.map(blog=>{
          return(
            <div key={blog.id}>
              <div class="container-article">
                <div class="hover-container">
                  <NavLink to={`${blog.id}`} style={{ textDecoration: 'none' }}>
                    <div className="link-post">
                      {blog.title}
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          )
        }))
      }
      </div>
    );
}
