import React from 'react';
import kratke from '../Videos/kratke.mp4';

export default function VideoBaner() {
	return (
		<div className='video-container container'>
			<video autoPlay={true} muted loop={true} controls={false} playsInline>
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