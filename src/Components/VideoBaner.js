import React from 'react';
import kratke from '../Videos/kratke.mp4';

export default function VideoBaner() {

	return (
		<div className='video-container container'>
			<div dangerouslySetInnerHTML={{ __html: `
		        <video
		          loop
		          muted
		          autoplay
		          playsinline
		          src="${kratke}"
		        />,` }}>		      	
		    </div>

			<div className='video-text'>
				<p>Svadobný salón</p>
				<h1>la novia</h1>
			</div>
		</div>
	)
}