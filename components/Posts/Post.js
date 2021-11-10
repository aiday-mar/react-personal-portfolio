import { useLocation } from 'react-router-dom';
import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from './postsData.js';

function getPost(id) {
  const key = Object.keys(posts.results).find(index => posts.results[index].id === id)
  return posts.results[key]
}

export default function Post() {
  //let location = useLocation();
  //const { postId, postTitle, postContent } = location.state;

  const { id } = useParams()
  const post = getPost(id);

  return (
    <div style={{ fontFamily: 'Arial Narrow' }}>
      <div
        style={{
          textAlign: 'center',
          marginTop: 25,
          fontSize: 20,
          color: '#505e5a',
        }}
      >
        {post.title}
      </div>
      ,
      <div
        dangerouslySetInnerHTML={{ __html: post.title }}
        className="container-article"
        style={{ marginTop: 20 }}
      ></div>
      <div
        style={{
          margin: 'auto',
          justifyContent: 'center',
          width: 50 + '%',
          marginTop: 100,
          borderTop: 'solid 1px #000000',
        }}
      ></div>
    </div>
  );
}
