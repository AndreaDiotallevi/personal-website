import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import blogPosts from "../utils/blogPosts";

const BlogList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog-list-component">
      <div className="blog-list-container">
        <ul>
          {blogPosts.map((blogPost) => (
            <li key={blogPost.title}>
              <div>
                <Link
                  to={`/blog/${blogPost.url}`}
                  className="no-background-image"
                >
                  <img src={blogPost.imageUrl} alt={blogPost.title}></img>
                </Link>
              </div>
              <div>
                <h1>
                  <Link to={`/blog/${blogPost.url}`}>{blogPost.title}</Link>
                </h1>
                <p>{blogPost.date}</p>
                <p>{blogPost.summary}</p>
                {/* <p>{blogPost.date}</p> */}
                <ul>
                  {blogPost.tags.map((tag) => (
                    <li key={tag}>
                      <p>{tag}</p>
                    </li>
                  ))}
                </ul>
                <div>
                  {/* <p>{blogPost.date}</p> */}
                  <Link to={`/blog/${blogPost.url}`}>read more</Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogList;
