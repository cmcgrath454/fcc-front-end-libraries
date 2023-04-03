const classes = {
	nav: 'd-flex text-center align-items-center py-5',
};

function Navbar(props) {
	return (
		<nav className={classes.nav}>
			<div>
				{props.header !== 'React Apps' && (
					<a href={process.env.PUBLIC_URL}>
						<img src={process.env.PUBLIC_URL + '/images/back.png'} alt='back button' />
					</a>
				)}
			</div>
			<h1>{props.header}</h1>
			<div></div>
		</nav>
	);
}

export default Navbar;
