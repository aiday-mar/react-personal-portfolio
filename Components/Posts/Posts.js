import React from 'react';
import {useState,useEffect} from 'react';
import {
  Link,
} from "react-router-dom";

export default function Posts() {
  
    const [data,setData]=useState([]);

    
    const getData=()=>{
      fetch('postsJSON.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
      )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          setData(myJson)
        });
    }

    useEffect(()=>{
      getData()
    },[])

    return (
      <div class="outer-posts">
      {
      React.Children.toArray(
        data.map(blog=>{
          return(
            <div key={blog.id}>
              <div class="container-article">
                <div class="hover-container">
                    <Link to={{pathname: "/post", 
                    state: {postId : blog.id, postTitle : blog.title, postContent : blog.body}}} 
                    style={{ textDecoration: 'none', display : 'flex' }}>
                      <img src={blog.icon} style={{width : 20, height : 20, marginRight : 10 }}/>
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
