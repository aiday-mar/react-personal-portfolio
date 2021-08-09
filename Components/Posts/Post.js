import {useLocation} from 'react-router-dom'
import React from 'react';
import {useState,useEffect} from 'react';

export default function Post(){
  let location = useLocation();
  const { postId, postTitle, postContent } = location.state
  return (
    <div>
      <div style={{textAlign: "center", marginTop:20, fontSize : 30, color: "#787a7d"}}>{postTitle}</div>,
      <div dangerouslySetInnerHTML={ { __html: postContent } }></div>
    </div>
  );
}