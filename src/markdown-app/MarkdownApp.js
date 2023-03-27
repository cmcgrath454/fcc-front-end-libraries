import { useState } from 'react';
import Navbar from "../Navbar";
import MarkdownEditor from "./MarkdownEditor";
import MarkdownPreview from "./MarkdownPreview";
import { parse } from 'marked';

function MarkdownApp() {
    const [input, setInput] = useState('');
    const [markdown, setMarkdown] = useState('');

    function handleChange(e) {
        e.preventDefault();
        setMarkdown(parse(input));

        setInput(e.target.value);
    }

    return (
        <>
            <Navbar header='Markdown Editor' />
            <MarkdownEditor text={input} handleChange={handleChange} />
            <MarkdownPreview markdown={markdown} />
        </>

    )

}

export default MarkdownApp;