import React, {useContext, useEffect, useRef} from 'react';
import Card from './Card';
import {PhotoContext} from '../context';
import { gsap } from "gsap";


export default function CardList() {

	const galery = useRef();

	const context = useContext(PhotoContext);
	let {photos} = context;

	useEffect(() => {
	    gsap.fromTo(".cardList", 
	    	{opacity: 0, x: -50}, 
	    	{opacity: 1, x: 0, duration: 1}     
	    );
	}, []);

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
		<div className='cardList container' ref={galery}>			
			{photos}
		</div>
	)
}