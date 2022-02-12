import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CharacterList.css';


import { Link } from 'react-router-dom';

import CharacterCard from '../CharacterCard/CharacterCard';
import Spinner from '../Spinner/Spinner';

const CharacterList = () => {
	const [characters, setCharacters] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios('https://api.github.com/users').then((res) =>
			setCharacters(res.data)
		);
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				<div className='CharacterList-container'>
					{characters.map((char) => {
						return (
							<div key={char.char_id}>
								<Link to={`/detail/${char.char_id}`} className='Link'>
									<CharacterCard data={char} />
								</Link>
							</div>
						);
					})}
				</div>
			)}
		</>
	);
};

export default CharacterList;
