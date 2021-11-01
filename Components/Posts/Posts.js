import React from 'react';
import {useState,useEffect} from 'react';
import {
  Link,
} from "react-router-dom";

const posts = {
  "results" : [{
    "id" : 1,
    "title" : "Studying the Angular router",
    "date" : "13/09/2021",
    "body" : "<div> Write this angular article </div>",
    "icon" : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/langfr-220px-Angular_full_color_logo.svg.png"
  },
  {
    "id" : 2,
    "title" : "Using service workers to perform offline tasks",
    "date" : "13/09/2021",
    "body" : "Describe the research done in this field",
    "icon" : "https://www.mozilla.org/media/img/logos/chrome/logo-chrome.36729db6cd71.png"
  },
  {
    "id" : 3,
    "title" : "Using Splunk for machine learning",
    "date" : "13/09/2021",
    "body" : "Talk abour the work done at Rolex",
    "icon" : "https://firebounty.com/image/528-product-security-vulnerability-report-form-splunk"
  }]
}

export default function Posts() {

  return (
    <div class="outer-posts">
    {
    React.Children.toArray(
      posts.results.map((blog, index) =>{
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