import Navbar from "../Navbar";
import MarkdownEditor from "./MarkdownEditor";
import MarkdownPreview from "./MarkdownPreview";
import { parse } from 'marked';
import { useEffect, useState } from 'react';

const exampleText = `# This is a heading element
## This is a subheading element
- List Item 1
- List Item 2`

function MarkdownApp() {
    const [input, setInput] = useState(exampleText);
    const [markdown, setMarkdown] = useState('');


    useEffect(() => {
        setMarkdown(parse(input));
    }, [input]);

    return (
        <>
            <Navbar header='Markdown Editor' />
            <MarkdownEditor text={input} setText={setInput} />
            <MarkdownPreview markdown={markdown} />
        </>
    )
}

export default MarkdownApp;