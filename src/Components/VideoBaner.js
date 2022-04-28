import React, { useEffect, useRef } from 'react';
import kratke from '../Videos/kratke.mp4';

export default function VideoBaner() {

	const videoEl = useRef(null);

	const attemptPlay = () => {
	    videoEl &&
    	videoEl.current &&
      	videoEl.current.play().catch(error => {
        	console.error("Error attempting to play", error);
    	});
	};

	useEffect(() => {
	    attemptPlay();
	}, []);

	return (
		<div className='video-container container'>
			<video autoPlay muted loop controls='' playsInline  preload="auto" ref={videoEl}>
				<source src={kratke} type='video/mp4'/>
				Your browser does not support the video tag.
			</video>
			<div className='video-text'>
				<p>Svadobný salón</p>
				<h1>la novia</h1>
			</div>
		</div>
	)
}