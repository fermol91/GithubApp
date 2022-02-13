import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';



function CharacterCard ({ data}) {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component='img'
				height='440'
				image={data.avatar_url}
				alt='Avatar Usuario'
			/>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					Name: {data.login}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					Repo: {data.repos_url}
				</Typography>
				<div>
				<Link to={`/detail/${data.id}`}><Button>Detalle</Button></Link>
				</div>
			</CardContent>
		</Card>
	);
}

export default CharacterCard;