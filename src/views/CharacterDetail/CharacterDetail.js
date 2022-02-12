import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import './CharacterDetail.css';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import Spinner from '../../components/Spinner/Spinner';

const CharacterDetail = () => {
	const [character, setCharacter] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	// console.log(character);

	let id = useParams();

	let userID = id.id;

	// console.log(userID);

	useEffect(() => {
		axios(`https://api.github.com/users/${userID}`).then((res) =>
			setCharacter(res.data)
		);
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, [userID]);

	return (
		<div className='CharacterList-Container'>
			{isLoading ? (
				<Spinner />
			) : (
				<div className='CharacterList-detail'>
					{character.map((char) => {
						return (
							<div key={char.html_url}>
								<CharacterCard data={char} />
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default CharacterDetail;
