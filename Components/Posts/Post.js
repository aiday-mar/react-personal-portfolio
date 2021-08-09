import {useLocation} from 'react-router-dom'
import React from 'react';
import {useState,useEffect} from 'react';

export default function Post(){
  let location = useLocation();
  const { postId } = location.state
  return (
  <h1>Hi!</h1>,
  <h2>{postId}</h2>
  );
}