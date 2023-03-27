function MarkdownEditor(props) {
    return (
        <textarea onChange={event => props.handleChange(event)}>{props.text}</textarea>
    )
}

export default MarkdownEditor;