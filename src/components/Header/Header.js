import React from 'react';
import './Header.css';
import img from './github.png';

const Header = () => {
	return (
		<div className='Header'>
			<h1>Users of Git Hub App</h1>
			<img src={img} alt='Breaking Bad Logo' width='150px' />
		</div>
	);
};

export default Header;
