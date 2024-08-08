const Editor = ({ markdown, onMarkdownChange }) => {
  return (
    <textarea
      id="editor"
      value={markdown}
      onChange={(e) => onMarkdownChange(e.target.value)}
    />
  );
};

export default Editor;
