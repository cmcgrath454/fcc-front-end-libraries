function MarkdownPreview(props) {
	return (
		<div className='window-wrapper'>
			<h2>Preview</h2>
			<section id='preview' className='markdown-body' dangerouslySetInnerHTML={{ __html: props.markdown }}></section>
		</div>
	);
}

export default MarkdownPreview;
