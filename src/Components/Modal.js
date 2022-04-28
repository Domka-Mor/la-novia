import React from 'react';


export default function Modal(props) {

	return (
		<div className='layer'>
			<div className='baner-body'>
				<div className='arrow-left' onClick={props.goBack}>
					<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
						<path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
					</svg>
				</div>
				<div className='baner-img'>
					<img src={props.imageToShow} alt={props.imageToShow}/>
				</div>
{/*				<div className='baner-text'><p>baner text</p></div>*/}
				<div className='arrow-right' onClick={props.goNext}>
					<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
					  	<path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
					</svg>
				</div>
			</div>
		</div>
	)
}