import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const posts = {
  results: [
    {
      id: 1,
      title: 'Using Spark to build a recommendation engine',
      date: '13/09/2021',
      body: '<div> <p>I need to render this article</p> </div>',
      icon: 'https://logowik.com/content/uploads/images/scala3486.jpg',
    },
    {
      id: 2,
      title: 'Optimizing the poisson algorithm execution using CUDA in C++',
      date: '13/09/2021',
      body: 'Describe the project',
      icon: 'https://jtes.net/wp-content/uploads/2015/05/NVIDIA_CUDA_V_2C_r.jpg',
    },
    {
      id: 3,
      title:
        'Creating a neural network to classify numbers using Keras in Python',
      date: '13/09/2021',
      body: 'Talk about the project for EPFL',
      icon: 'https://www.logiciels.pro/wp-content/uploads/2021/05/keras-avis-prix-alternatives-logiciel.webp',
    },
  ],
};

export default function Projects() {
  return (
    <div class="outer-posts">
      {React.Children.toArray(
        posts.results.map((blog, index) => {
          return (
            <div key={blog.id}>
              <div class="container-article">
                <div class="hover-container">
                  <Link
                    to={{
                      pathname: '/project',
                      state: {
                        postId: blog.id,
                        postTitle: blog.title,
                        postContent: blog.body,
                      },
                    }}
                    style={{
                      textDecoration: 'none',
                      display: 'flex',
                      fontFamily: 'Arial Narrow',
                    }}
                  >
                    <img
                      src={blog.icon}
                      style={{ width: 20, height: 20, marginRight: 10 }}
                    />
                    <div class="link-post">{blog.title}</div>
                  </Link>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
