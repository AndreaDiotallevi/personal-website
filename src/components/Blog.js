import React from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";
import BigONotation from "../utils/articles/BigONotation.md";

class Blog extends React.Component {
  state = { markdown: "" };

  componentWillMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(BigONotation)
      .then((res) => res.text())
      .then((text) => this.setState({ markdown: text }));
  }

  render() {
    const { markdown } = this.state;
    return (
      <div className="blog-component">
        <div className="blog-container">
          <ReactMarkdown
            source={markdown}
            renderers={{ code: CodeBlock }}
            escapeHtml={false}
          />
        </div>
      </div>
    );
  }
}

export default Blog;
