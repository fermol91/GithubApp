import './Nav.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className='Navigation'>
			<ul className='List-ul'>
				<Link to='/' className='Link'>
					Home
				</Link>
				<Link to='/about' className='Link'>
					About
				</Link>
				<Link to='/contact' className='Link'>
					Contact
				</Link>
			</ul>
		</nav>
	);
};

export default NavBar;
