function TwitterSVG(props) {
	return (
		<>
			<svg viewBox='0 -2 20 20' version='1.1'>
				<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
					<g id='Dribbble-Light-Preview' transform='translate(-60.000000, -7521.000000)'>
						<g id='icons' transform='translate(56.000000, 160.000000)'>
							<path
								style={{ fill: props.color, transition: 'fill 1s ease' }}
								d='M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705'
								id='twitter-[#154]'></path>
						</g>
					</g>
				</g>
			</svg>
		</>
	);
}

function QuoteSVG(props) {
	return (
		<svg clip-rule='evenodd' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' version='1.1' viewBox='0 0 64 64'>
			<rect x='-640' width='1280' height='800' fill='none' />
			<g>
				<path
					style={{ fill: props.color, transition: 'fill 1s ease' }}
					d='m27.194 12v8.025c-2.537 0.14-4.458 0.603-5.761 1.39-1.304 0.787-2.22 2.063-2.749 3.829-0.528 1.766-0.793 4.292-0.793 7.579h9.303v19.145h-19.081v-18.201c0-7.518 1.612-13.025 4.836-16.522 3.225-3.497 7.973-5.245 14.245-5.245zm28.806 0v8.025c-2.537 0.14-4.457 0.586-5.761 1.338-1.304 0.751-2.247 2.028-2.828 3.829-0.581 1.8-0.872 4.344-0.872 7.631h9.461v19.145h-19.186v-18.201c0-7.518 1.603-13.025 4.809-16.522 3.207-3.497 7.999-5.245 14.377-5.245z'
					fill-rule='nonzero'
				/>
			</g>
		</svg>
	);
}

export { TwitterSVG, QuoteSVG };