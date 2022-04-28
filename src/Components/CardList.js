import React, {useContext} from 'react';
import Card from './Card';
import {PhotoContext} from '../context';

export default function CardList() {

	const context = useContext(PhotoContext);
	let {photos} = context;

	if(photos && photos.length !== 0){
		photos = photos.map((photo,index) => 
          	<div key={index}>
          		<Card photo={photo}/>
          	</div>
    	)
	}
	else{
		photos = null;
	}

	return (
		<div className='cardList container'>			
			{photos}
		</div>
	)
}