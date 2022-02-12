import './App.css';

// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// COMPONENTS
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

// VIEWS
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import CharacterDetail from './views/CharacterDetail/CharacterDetail';

const App = () => {
	return (
		<Router>
			<div className='App'>
				<Header />
				<Nav />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/detail/:id' element={<CharacterDetail />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
