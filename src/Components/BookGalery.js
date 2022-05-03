import React,{useState, useEffect, useContext, useRef} from 'react';
import {PhotoContext} from '../context';
import {Link} from 'react-router-dom';
import Skeleton from './Skeleton';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function BookGalery() {
	
	const context = useContext(PhotoContext);
	const {photos} = context;

	gsap.registerPlugin(ScrollTrigger);
	const bookGalery = useRef();
	const qBookGalery = gsap.utils.selector(bookGalery);

	const names = photos.map(photo => photo.name);
	const mainImages = photos.map(photo => photo.photos[0]);
	const images = [];
	photos.map(photo => images.push([ photo.photos[0], photo.photos[2] ]));

	const [imageToShow, setImageToShow] = useState(mainImages[0]);
	let [slidesToShow, setSlidesToShow] = useState(images[0]);
	const [satyToShow, setSatyToShow] = useState(names[0]);

	useEffect(() => {

	}, [imageToShow,slidesToShow,satyToShow]); 

	useEffect(() => {

	    gsap.fromTo(qBookGalery(".book-logo"), 
	    	{opacity: 0, x: -50}, 
	    	{
	    		opacity: 1, 
	    		x: 0, duration: 1, 
	    		scrollTrigger: {
		        trigger: ".book-logo"
		      }
		    }     
	    );

	    gsap.fromTo(qBookGalery(".book-card"), 
	    	{opacity: 0, x: -50}, 
	    	{
	    		opacity: 1, 
	    		x: 0, duration: 1, 
	    		scrollTrigger: {
		        trigger: ".book-card",
		        start: "top center"
		      }
		    }     
	    );

	    gsap.fromTo(qBookGalery(".book-card-footer"), 
	    	{opacity: 0, x: -50}, 
	    	{
	    		opacity: 1, 
	    		x: 0, duration: 1, 
	    		scrollTrigger: {
		        trigger: ".book-card-footer"
		      }
		    }     
	    );
	}, []);

	const goNext = (e) => {
		e.stopPropagation();
		const photos = mainImages;
		let slides = images;
		let saty = names;
		let currentIndex = photos.indexOf(imageToShow);
		if (currentIndex >= photos.length - 1) {
		    let nextImage = photos[0];
		    let nextSlides = slides[0];
		    let nextSaty = saty[0];
		    setImageToShow(nextImage);
		    setSlidesToShow(nextSlides);
		    setSatyToShow(nextSaty);
		} 
		else {
		    let nextImage = photos[currentIndex + 1];
		    let nextSlides = slides[currentIndex + 1];
		    let nextSaty = saty[currentIndex + 1];
		    setImageToShow(nextImage);
		    setSlidesToShow(nextSlides);
		    setSatyToShow(nextSaty);
		}
	};


	if(slidesToShow && slidesToShow.length !== 0){
		slidesToShow = slidesToShow.map((slide,index) => {
			return(
				<div className='box' key={index}>
					<img src={slide.src} srcSet={slide.srcset} alt={slide.name}/>
				</div>	
			)
		})
	}
	else{
		return null
	}

	return (
		<div className='bookGalery-main' ref={bookGalery}>
			<div className='bookGalery-left'>
				<li className='book-logo'>
					La Novia
				</li>
				<div className='book-card'>
					<div className='book-card-body'> 														
						{imageToShow && imageToShow.length !== 0 ? 
							<>
								<div className='img-overlay'>
									<Link to={`/category/${satyToShow}`}>
										<button type="button" className="btn btn-dark">
											<svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
											  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
											</svg>
										</button>
									</Link>
								</div>	
								<img src={imageToShow.src} srcSet={imageToShow.srcset} alt={imageToShow}/>
							</>
							:
							<Skeleton/>
						}														
              		</div>
	              	<div className='book-card-footer'>
	              		{satyToShow && satyToShow.length !== 0 ? <p>{satyToShow}</p> : null}
	              	</div>
				</div>
				<div className='book-nav'>
					<svg onClick={goNext} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
					  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
					</svg>
				</div>
			</div>

			<div className='bookGalery-right'>			
				<div className='box-div'>
					{slidesToShow}
				</div>
			</div>
		</div>
	)
}