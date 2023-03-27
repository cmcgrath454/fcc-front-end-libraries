function MarkdownEditor(props) {
    return (
        <textarea
            id="editor"
            onChange={event => {
                event.preventDefault();
                props.setText(event.target.value);
            }}
            value={props.text}
            >
        </textarea>
    )
}

export default MarkdownEditor;