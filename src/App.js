import React, { useState } from "react";
import Editor from "./components/Editor.jsx";
import Preview from "./components/Preview.jsx";
import "./App.css";

function App() {
  const initialMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [freeCodeCamp](https://www.freecodecamp.com), [Igneczi Tibor](https://igneczitibor.hu) and
> Block Quotes!

And if you want to get really crazy, even tables:

| Wild Header | Crazy Header | Another Header? |
| ------------ | ------------- | --------------- |
| Your content can | be here, and it | can be here.... |
| And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. But the list goes on...

- Even if you use dashes or asterisks.

And last but not least, let's not forget embedded images:
![React Logo w/ Text](https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U)
`;

  const [markdown, setMarkdown] = useState(initialMarkdown);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-purple-950 to-gray-950">
      <Editor markdown={markdown} onMarkdownChange={setMarkdown} />
      <Preview markdown={markdown} />
    </div>
  );
}

export default App;
