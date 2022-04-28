import React, {useContext}  from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './Card';
import {PhotoContext} from '../context';

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

	const context = useContext(PhotoContext);
	let {photos} = context;

	if(photos && photos.length !== 0){
		photos = photos.map((photo) => 
    	<div key={photo.id}>
    		<Card photo={photo}/>
    	</div>
    )
	}
	else{
		return null;
	}

	return (
		<div className= {`container ${props.className}`}>
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
	)
}