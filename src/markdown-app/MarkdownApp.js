import Navbar from "../Navbar";
import MarkdownEditor from "./MarkdownEditor";
import MarkdownPreview from "./MarkdownPreview";
import { parse } from 'marked';
import { useEffect, useState } from 'react';

const exampleText = `# This is a heading element
## This is a subheading element

Here's some inline code: \`<div></div>\`

\`\`\`
// Here's a code block
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make lists
- List Item
- **And bold text**

You can add [links](https://colinmcgrath.tech) (Check out my website)

> or Block Quotes!

or images
![Markdown Logo](https://img.icons8.com/small/512/markdown.png)
`

function MarkdownApp() {
    const [input, setInput] = useState(exampleText);
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        setMarkdown(parse(input), [{breaks:true}]);
    }, [input]);

    return (
        <>
            <Navbar header='Markdown Editor' />
            <div className="d-md-flex gap-md-5 mx-md-5 align-items-start">
              <MarkdownEditor text={input} setText={setInput} />
              <MarkdownPreview markdown={markdown} />
            </div>
        </>
    )
}

export default MarkdownApp;