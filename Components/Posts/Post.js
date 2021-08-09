import {useLocation} from 'react-router-dom'
import React from 'react';
import {useState,useEffect} from 'react';

export default function Post(){
  let location = useLocation();
  const { postId, postTitle, postContent } = location.state
  return (
    <div>
      <h2>{postTitle}</h2>,
      <div dangerouslySetInnerHTML={ { __html: postContent } }></div>
    </div>
  );
}