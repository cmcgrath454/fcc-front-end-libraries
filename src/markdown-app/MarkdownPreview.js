function MarkdownPreview(props) {
    return (
        <section dangerouslySetInnerHTML={{__html: props.markdown}}></section>
    )
}

export default MarkdownPreview;