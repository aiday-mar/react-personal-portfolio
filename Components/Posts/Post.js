import {useLocation} from 'react-router-dom'
import React from 'react';
import {useState,useEffect} from 'react';
import {DiscussionEmbed} from "disqus-react"


export default function Post(){
  let location = useLocation();
  const { postId, postTitle, postContent } = location.state

  const disqusShortname = "aiday"
  const disqusConfig = {
    url: window.location.href,
    identifier: postId, // Single post id
    title: postTitle // Single post title
  }

  return (
    <div>
      <div style={{textAlign: "center", marginTop:25, fontSize : 20, color: "#505e5a"}}>{postTitle}</div>,
      <div dangerouslySetInnerHTML={{ __html: postContent }} className = "container-article" 
      style={{marginTop : 20}}></div>
      <div style={{margin : "auto", justifyContent : "center", width : 50 + '%', marginTop : 100, borderTop: "solid 1px #000000"}}>
      <DiscussionEmbed 
        shortname={disqusShortname}
        config={disqusConfig}
      />
      </div>
    </div>
  );
}