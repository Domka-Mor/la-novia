import React, {useContext}  from 'react';
import {PhotoContext} from '../context';
import {Link} from 'react-router-dom';
import Skeleton from './Skeleton';

export default function Card({photo}) {

	const context = useContext(PhotoContext);
	const {handleCard} = context;
	const{name, photos} = photo;
	const defaultPhoto = photos[0];

	return (
		<div className='card-carousel'>
	      	<div className='card-body'>
	      		{defaultPhoto && defaultPhoto.length !== 0 ?
	      			<>
	      				<Link to={`/category/${name}`} onClick={() => handleCard(photo)}>
		      				<div className='img-overlay'>
								<button type="button" className="btn btn-dark">					
									<svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
									  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
									</svg>
								</button>					
							</div>	
						</Link>				 
						<img src={defaultPhoto.src} srcSet={defaultPhoto.srcset} alt={name}/>
					</>
					:
					<Skeleton/>
				}	
	      	</div>
	      	<div className='card-footer'>
	      		<p>{name}</p>
	      	</div>
      	</div>
	)
}