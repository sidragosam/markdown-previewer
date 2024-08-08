import React from "react";
import { marked } from "marked";

const Preview = ({ markdown }) => {
  const renderMarkdown = (markdown) => {
    return { __html: marked(markdown, { breaks: true }) };
  };

  return (
    <div
      dangerouslySetInnerHTML={renderMarkdown(markdown)}
      className="w-1/2 p-4 bg-gray-950 bg-opacity-50 text-white mt-8 rounded-md mb-8 border-2 border-pink-200"
    />
  );
};

export default Preview;
