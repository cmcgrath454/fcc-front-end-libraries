function MarkdownEditor(props) {
	return (
		<div className='window-wrapper'>
			<h2>Editor</h2>
			<textarea
				id='editor'
				spellCheck='false'
				onChange={(event) => {
					event.preventDefault();
					props.setText(event.target.value);
				}}
				value={props.text}></textarea>
		</div>
	);
}

export default MarkdownEditor;
