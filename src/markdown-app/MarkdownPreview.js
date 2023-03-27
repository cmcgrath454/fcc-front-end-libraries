function MarkdownPreview(props) {
    return (
        <section
            id="preview"
            dangerouslySetInnerHTML={{ __html: props.markdown }}>
        </section>
    )
}

export default MarkdownPreview;