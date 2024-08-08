import React from "react";
import { marked } from "marked";

const Preview = ({ markdown }) => {
  const renderMarkdown = (markdown) => {
    return { __html: marked(markdown, { breaks: true }) };
  };

  return (
    <div id="preview" dangerouslySetInnerHTML={renderMarkdown(markdown)} />
  );
};

export default Preview;
