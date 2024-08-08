const Editor = ({ markdown, onMarkdownChange }) => {
  return (
    <textarea
      id="editor"
      value={markdown}
      onChange={(e) => onMarkdownChange(e.target.value)}
      className="w-1/2 h-96 p-4 bg-gray-950 bg-opacity-50 text-white mt-8 rounded-md border-2 border-pink-200"
    />
  );
};

export default Editor;
