import {useLocation} from 'react-router-dom'
import React from 'react';
import {useState,useEffect} from 'react';
<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&display=swap');
</style>

export default function Post(){
  let location = useLocation();
  const { postId, postTitle, postContent } = location.state
  return (
    <div>
      <div style={{textAlign: "center", marginTop:25, fontSize : 20, color: "#505e5a"}}>{postTitle}</div>,
      <div dangerouslySetInnerHTML={{ __html: postContent }} className = "container-article" style={{marginTop : 20}}></div>
    </div>
  );
}