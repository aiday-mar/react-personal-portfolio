import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from './projectsData.js';

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
                      pathname: '/project/' + blog.id,
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
