import React from 'react';
import kratke from '../Videos/kratke.mp4';

export default function VideoBaner() {

	return (
		<div className='video-container container d-none d-sm-block'>
			<div dangerouslySetInnerHTML={{ __html: `
		        <video
		          loop
		          muted
		          autoPlay
		          playsInline
		        >
			        <source src=${kratke} type="video/mp4" />
			        Your browser does not support the video tag.
		        </video>
		        `}}>		      	
		    </div>

			<div className='video-text'>
				<p>Svadobný salón</p>
				<h1>la novia</h1>
			</div>
		</div>
	)
}