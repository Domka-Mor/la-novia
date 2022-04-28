import React from 'react';
import baner4 from '../Images/Banner/baner4.jpg';
import baner5 from '../Images/Banner/baner5.jpg';
import baner6 from '../Images/Banner/baner6.jpg';
import baner7 from '../Images/Banner/baner7.jpg';
import baner8 from '../Images/Banner/baner8.jpg';


export default function BanerFaded() {

	return (
		<div className='container py-5'>
			<div id='slide'>
				<div style={{backgroundImage: `url(${baner6})`}}>
				    <div className='slide-text'>
					    <p>La Novia</p>
					    <p>Svadobný salón...</p>
				    </div>
				</div>
				<div style={{backgroundImage: `url(${baner5})`}}>
					<div className='slide-text'>
						<p>La Novia</p>						
						<p>Kolekcia výnimočných svadobných šiat...</p>
					</div>
				</div>
				<div style={{backgroundImage: `url(${baner4})`}}>
					<div className='slide-text'>
						<p>La novia</p>
						<p>Individuálny prístup a poradenstvo...</p>
					</div>
				</div>
				<div style={{backgroundImage: `url(${baner7})`}}>
					<div className='slide-text'>
						<p>La novia</p>
						<p>Zameraná na detail...</p>
					</div>
				</div>
				<div style={{backgroundImage: `url(${baner8})`}}>
					<div className='slide-text'>
						<p>La novia</p>
						<p>Miesto, kde sa plnia sny...</p>
					</div>
				</div>
			</div>
		</div>
	)
}