import Navbar from "../Navbar";
import MarkdownEditor from "./MarkdownEditor";
import MarkdownPreview from "./MarkdownPreview";
import { parse } from 'marked';
import { useEffect, useState } from 'react';

const exampleText = `# This is a heading element
## This is a subheading element
Here's some inline code, \`<div></div>\`
\`\`\`
// Here's a code block
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
You can make lists
- List Item 1
- List Item 2

**Bold text**

You can add [links](https://google.com)

> or Block Quotes!
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
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
            <MarkdownEditor text={input} setText={setInput} />
            <MarkdownPreview markdown={markdown} />
            <script src="test.js"></script>
        </>
    )
}

export default MarkdownApp;