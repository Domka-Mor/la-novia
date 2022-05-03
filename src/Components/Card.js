import React, {useContext, useEffect, useState}  from 'react';
import {PhotoContext} from '../context';
import {Link} from 'react-router-dom';
import Skeleton from './Skeleton';
import { gsap } from "gsap";


export default function Card({photo}) {

	const context = useContext(PhotoContext);
	const {handleCard} = context;
	const{name, photos} = photo;
	const defaultPhoto = photos[0];

	const [visible, setVisible] = useState(false);
	const [cardRef, setCardRef] = useState();

	useEffect(() => {
	    
  		let didCancel = false;
	    let observer;

 		if (cardRef && visible !== true) {
		 	if (IntersectionObserver) {
		      	observer = new IntersectionObserver(
		            entries => {
		              entries.forEach(entry => {
		                if (
		                  !didCancel && entry.isIntersecting
		                ) {
		                  setVisible(entry.isIntersecting);
		                  observer.unobserve(cardRef);
		                }
		              });
		            },
		            {
		              threshold: 0.2
		            }
		          );
		          observer.observe(cardRef);
			} else {
	          // Old browsers fallback
	          setVisible(true)
		    }
		}

	    return () => {
	    	didCancel = true;
	    	if (observer && observer.unobserve) {
		    	observer.unobserve(cardRef);
		    }
	    }

	}, [cardRef, visible]);


	return (
      	<div className='card-carousel' ref={setCardRef}>
	  		<div className='card-body'>
		      		{defaultPhoto && defaultPhoto.length !== 0 && visible ?
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