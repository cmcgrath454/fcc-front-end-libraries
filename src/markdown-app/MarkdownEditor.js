function MarkdownEditor(props) {
    return (
        <textarea
            id = "editor"
            onChange={event => props.setText(event.target.value)}>
            {props.text}
        </textarea>
    )
}

export default MarkdownEditor;