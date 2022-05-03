import React,{useState, useEffect, useContext, useRef} from 'react';
import {PhotoContext} from '../context';
import Navbar from '../Components/Navbar';
import Backdrop from '../Components/Backdrop';
import Modal from '../Components/Modal';
import Skeleton from '../Components/Skeleton';
import CardCarousel from '../Components/CardCarousel';
import {useNavigate} from 'react-router-dom';
import { gsap, TweenMax } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const responsive = {
  superLarge: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 
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

export default function Product() {

	gsap.registerPlugin(ScrollTrigger);
	const product1 = useRef();
	const qProduct1= gsap.utils.selector(product1);
	const product2 = useRef();
	const qProduct2= gsap.utils.selector(product2);

	const [modalOpen, setModalOpen] = useState(false);
	const [imageToShow, setImageToShow] = useState(null);

	const context = useContext(PhotoContext);
	let {photos,cardImagesArr,cardName,cardImages} = context;

	let navigate = useNavigate();

	useEffect(() => {
		if(cardImages.length === 0 || photos.length === 0){
		 	navigate("../galery", { replace: true })
		}
	}, [imageToShow,modalOpen]); 

	const showImage = (photo) => {
    setImageToShow(photo.src);
    setModalOpen(true);	   
	};

	useEffect(() => {
    gsap.fromTo(qProduct1("#h1"), 
    	{opacity: 0, x: -50}, 
    	{opacity: 1, x: 0, duration: 1}     
    );
		var cards = gsap.utils.toArray(qProduct1('#photo'));
    cards.forEach((card,index) => {
			gsap.fromTo(card, {opacity: 0, x: -50}, {opacity: 1, x: 0, duration: 1,delay: `${index}`});			  
		})
    TweenMax.to(qProduct1(".bi-telephone"), 0.1, 
    	{x:"-=5", yoyo:true, repeat:5, delay: 1,
	    	scrollTrigger: {
		        trigger: ".bi-telephone"
		    }
			}
		);
		TweenMax.to(qProduct1(".bi-geo-alt"), 0.1, 
    	{x:"-=5", yoyo:true, repeat:5, delay: 2,
	    	scrollTrigger: {
		        trigger: ".bi-geo-alt"
		    }
			}
		);
	}, []);

	useEffect(() => {
    gsap.fromTo(qProduct2("#h1"), 
    	{opacity: 0, x: -50}, 
    	{opacity: 1, x: 0, duration: 1}     
    );
    gsap.fromTo(qProduct2("#p"), 
    	{opacity: 0, x: -50}, 
    	{opacity: 1, x: 0, duration: 0.5, delay: 1}     
    );
    var cards = gsap.utils.toArray(qProduct2('#photo'));
    cards.forEach((card,index) => {
			gsap.fromTo(card, {opacity: 0, x: -50}, {opacity: 1, x: 0, duration: 1, delay: 1.5});			  
		})
    TweenMax.to(qProduct2(".bi-telephone"), 0.1, 
    	{x:"-=5", yoyo:true, repeat:5, delay: 2.5,
	    	scrollTrigger: {
		        trigger: ".bi-telephone"
		    }
			}
		);
		TweenMax.to(qProduct2(".bi-geo-alt"), 0.1, 
    	{x:"-=5", yoyo:true, repeat:5, delay: 3,
	    	scrollTrigger: {
		        trigger: ".bi-geo-alt"
		    }
			}
		);
	}, []);

	const goNext = (e) => {
		e.stopPropagation();
		const photos = cardImagesArr;
		let currentIndex = photos.indexOf(imageToShow);
		console.log(currentIndex)
		if (currentIndex >= photos.length - 1) {
		    let nextImage = photos[0];
		    console.log(nextImage,'next')
		    setImageToShow(nextImage);
		} 
		else {
		    let nextImage = photos[currentIndex + 1];
		    setImageToShow(nextImage);
		    console.log(imageToShow)
		}
	};

	const goBack = (e) => {
		e.stopPropagation();
		const photos = cardImagesArr;
		let currentIndex = photos.indexOf(imageToShow);
		if (currentIndex <= 0) {
		    let nextImage = photos[photos.length - 1];
		    setImageToShow(nextImage);
		} 
		else {
		    let nextImage = photos[currentIndex - 1];
		    setImageToShow(nextImage);
		}
	};

	const closeModal = () => {
	    setModalOpen(false);	   
	};

	if(cardImages && cardImages.length !== 0){
		cardImages = cardImages.map((photo,index) => 
    	<div className='productPhoto' key={index} id='photo'>
    		{photo && photo.length !== 0 ? 
    			<img src={photo.src} srcSet={photo.srcset} alt={photo.name} onClick={() => showImage(photo)}/>
    			:
    			<Skeleton/>
    		}
    	</div>
    )
	}


	return (
		<>
			<Navbar navLeft navHidden/>
			<div className='main'>	

				<div className='d-none d-md-block'>
					<div className='container' ref={product1}>
						<div className='d-flex row'>
							<div className='col'>
								<div className='photoWraper'>
									{cardImages}
								</div>
							</div>
							<div className='col'>
								<div className='textWraper'>
									<h1 id='h1'>{cardName}</h1>
									<p>Rezervujte si skúšku šiat už dnes.</p>
									<p>Staňte sa vo svoj veľký deň výnimočnou.</p>
									<p>Bližšie informácie v salóne.</p>	
									<div className='product-kontakt mt-5'>									
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
											<path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
										</svg>
										<p>+421 902 889 058</p>
									</div>												
									<div className='product-adresa'>																
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
											<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
										  	<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
										</svg>
										<p>Moyzesova 36, Košice</p>
									</div>
									<div className='arrow-product' onClick={() => navigate(-1)}>
										<svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
											<path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
										</svg>
										<p>Späť</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='d-md-none'>
					<div className='container' ref={product2}>
						<div className='d-flex row'>
							<div className='col'>
								<div className='textWraper'>
									<h1 id='h1'>{cardName}</h1>
									<div id='p'>
										<p>Rezervujte si skúšku šiat už dnes.</p>
										<p>Staňte sa vo svoj veľký deň výnimočnou.</p>
										<p>Bližšie informácie v salóne.</p>	
									</div>		
									<div className='product-kontakt mt-4'>									
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
											<path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
										</svg>
										<p>+421 902 889 058</p>
									</div>												
									<div className='product-adresa'>																
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
											<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
										  	<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
										</svg>
										<p>Moyzesova 36, Košice</p>
									</div>
									<div className='arrow-product' onClick={() => navigate(-1)}>
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
											<path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
										</svg>
										<p>Späť</p>
									</div>
								</div>
							</div>
						</div>
						<div className='d-flex row'>
							<div className='col'>
								<div className='photoWraper2'>
									{cardImages}
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='container product-space'>
					<CardCarousel className='carousel-product' textStyle='text-carousel-product' text='Mohli by Vás zaujať...'/>
				</div>				
			</div>

			{modalOpen && <Backdrop  onClose={closeModal}/>}

			{modalOpen && (
				<Modal
					goNext={goNext}
					goBack={goBack}
					imageToShow={imageToShow}
				/>                
      )}
		</>
	)
}