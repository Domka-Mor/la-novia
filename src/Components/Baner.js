import React,{useState, useEffect, useRef} from 'react';
import Skeleton from './Skeleton';
import {Link} from 'react-router-dom';
import baner4 from '../Images/Sofi/Sofi1.jpg';
import baner1 from '../Images/Banner/baner6.jpg';
import baner2 from '../Images/Banner/baner9.jpg';
import baner3 from '../Images/Banner/baner4.jpg';
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Baner() {

	gsap.registerPlugin(ScrollTrigger);
	const baner = useRef();
	const qBaner = gsap.utils.selector(baner);

	const banerImages = [baner1,baner2,baner3,baner4];
	const [imageToShow, setImageToShow] = useState(banerImages[0]);

	useEffect(() => {	
		gsap.fromTo(qBaner("p"), 
	    	{opacity: 0, y: -50}, 
	    	{opacity: 1, y: 0, duration: 1, 
				scrollTrigger: {
		        	trigger: ".baner-body"
		    	}
		    }     
	    );
	    gsap.fromTo(qBaner(".baner-button"), 
	    	{opacity: 0, y: -25}, 
	    	{opacity: 1, y: 0, duration: 1, delay: 0.5, 
				scrollTrigger: {
		        	trigger: ".baner-body"
		    	}
		    }     
	    );
  	}, []);

	useEffect(() => {

  		var interval = setInterval(() => autoNext(),5000)

	    return () => {
	    	clearInterval(interval)
	    }

	}, [imageToShow]); 

	const autoNext = () => {
		const photos = banerImages;
		let currentIndex = photos.indexOf(imageToShow);
		if (currentIndex >= photos.length - 1) {
		    let nextImage = photos[0];
		    setImageToShow(nextImage);
		} 
		else {
		    let nextImage = photos[currentIndex + 1];
		    setImageToShow(nextImage);
		}
	}

	let HandleImage;
	if (imageToShow && imageToShow.length !== 0) {
		HandleImage = <img src={imageToShow} alt={imageToShow}/>					
	} else {		
		HandleImage = <Skeleton/>				
	}

	return (
		<div className='baner-show' ref={baner}>
			<div className='baner-body container'>
				<div className='baner-img'>{HandleImage}</div>
				<div className='baner-text'>
					<p>Objavte novú kolekciu</p>
					<Link to='/galery'>
						<button type="button" className="btn btn-dark btn-lg baner-button">					
							Vstúpiť
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}