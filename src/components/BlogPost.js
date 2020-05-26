import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

const BlogPost = (props) => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function fetchBlogPost() {
      const file = await import(`../blogPosts/${props.match.params.url}.md`);
      const response = await fetch(file.default);
      const text = await response.text();

      setMarkdown(text);
    }

    fetchBlogPost();
  }, [props]);

  return (
    <div className="blog-post-component">
      <div className="blog-post-container">
        <ReactMarkdown
          source={markdown}
          renderers={{ code: CodeBlock }}
          escapeHtml={false}
        />
      </div>
    </div>
  );
};

export default BlogPost;
