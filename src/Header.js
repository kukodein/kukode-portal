import React from 'react';
import { Helmet } from 'react-helmet';

function Header() {
	return (
		<header>
			<Helmet>
				<title>Template React.js</title>
				<meta name="robots" content="noindex" />
			</Helmet>
			<h1>Template React.js</h1>
		</header>
	);
}

export default Header;