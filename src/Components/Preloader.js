import React from 'react';
import kratke from '../Videos/kratke.mp4';

export default function Preloader() {
	return (
		<div className='banner'>
			<video autoPlay muted loop>
				<source src={kratke} type='video/mp4'/>
			</video>
			<h1>La Novia</h1>
			<div className="spinner">
			  <div className="bounce1"></div>
			  <div className="bounce2"></div>
			  <div className="bounce3"></div>
			</div>
		</div>
	)
}