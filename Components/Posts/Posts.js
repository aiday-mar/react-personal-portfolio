import React from 'react';
import {useState,useEffect} from 'react';
import {
  Link,
} from "react-router-dom";
import {firestore, storage} from "./../../firebaseConfig.js";
import "firebase/firestore";


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
                    <Link to={{pathname: "/post", 
                    state: {postId : blog.id, postTitle : blog.title, postContent : blog.body}}} 
                    style={{ textDecoration: 'none' }}>
                      <div class="link-post">
                        {blog.title}
                      </div>
                    </Link>
                </div>
              </div>
            </div>
          )
        }))
      }
      </div>
    );
}
