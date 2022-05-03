import React, {useContext, useEffect, useRef}  from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './Card';
import {PhotoContext} from '../context';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 
  }
};

export default function CardCarousel(props) {

	gsap.registerPlugin(ScrollTrigger);
	const carousel = useRef();
	const qCarousel = gsap.utils.selector(carousel);

	const context = useContext(PhotoContext);
	let {photos} = context;
	
  useEffect(() => {

		if(props.className === 'container-carousel'){
			gsap.fromTo(qCarousel(".container-carousel"), 
	    	{opacity: 0, x: -50}, 
	    	{
	    		opacity: 1, 
	    		x: 0, duration: 1, 
	    		scrollTrigger: {
		        trigger: ".container-carousel"
		      }
		    }     
	    );
		}

		if(props.className === 'carousel-product'){
			gsap.fromTo(qCarousel(".carousel-product"), 
	    	{opacity: 0, x: -50}, 
	    	{
	    		opacity: 1, 
	    		x: 0, duration: 1, 
	    		scrollTrigger: {
		        trigger: ".carousel-product"
		      }
		    }     
	    );
		}

		if(props.textStyle === 'text-carousel'){
	    gsap.fromTo(qCarousel(".text-carousel"), 
	    	{opacity: 0, x: -50}, 
	    	{
	    		opacity: 1, 
	    		x: 0, duration: 1, 
	    		scrollTrigger: {
		        trigger: ".container-carousel"
		      }
		    }     
	    );
	  }

	  if(props.textStyle === 'text-carousel-product'){
	    gsap.fromTo(qCarousel(".text-carousel-product"), 
	    	{opacity: 0, x: -50}, 
	    	{
	    		opacity: 1, 
	    		x: 0, duration: 1, 
	    		scrollTrigger: {
		        trigger: ".carousel-product"
		      }
		    }     
	    );
	  }
  }, []);

	if(photos && photos.length !== 0){
		photos = photos.map((photo) => 
    	<div key={photo.id} id='photos'>
    		<Card photo={photo}/>
    	</div>
    )
	}
	else{
		return null;
	}

	return (
		<div id='carousel' ref={carousel}>
			<div className= {`container ${props.className}`} >
				<div className={props.textStyle}>
					<p>{props.text}</p>
				</div>

				<Carousel 
					responsive={responsive}
					swipeable={true}
	        infinite={true}
	        arrows={true}
	        autoPlaySpeed={3000}                  
	        transitionDuration={500}
	        containerClass='main-carousel'
				>
			  		
		    	{photos}
	            
				</Carousel>
			</div>
		</div>
	)
}