import React, {useEffect, useRef} from 'react';
import Navbar from '../Components/Navbar';
import VideoBaner from '../Components/VideoBaner';
import Footer from '../Components/Footer';
import nevesta from '../Images/Pozadia/nevesta.jpg';
import { gsap, TweenMax } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutUs() {

	gsap.registerPlugin(ScrollTrigger);
	const about = useRef();
	const qAbout = gsap.utils.selector(about);

	useEffect(() => {
	    gsap.fromTo(qAbout("#h1"), 
	    	{opacity: 0, x: -50}, 
	    	{opacity: 1, x: 0, duration: 1}     
	    );
	    gsap.fromTo(qAbout("#p1"), 
	    	{opacity: 0, x: -50}, 
	    	{opacity: 1, x: 0, duration: 0.5, delay: 0.5}     
	    );
	    gsap.fromTo(qAbout("#p2"), 
	    	{opacity: 0, x: -50}, 
	    	{opacity: 1, x: 0, duration: 0.5, delay: 1}     
	    );
	    gsap.fromTo(qAbout("#p3"), 
	    	{opacity: 0, x: -50}, 
	    	{opacity: 1, x: 0, duration: 0.5, delay: 1.5}     
	    );
	    TweenMax.to(qAbout(".bi-geo-alt"), 0.1, 
	    	{x:"-=5", yoyo:true, repeat:5,
		    	scrollTrigger: {
			        trigger: ".bi-geo-alt"
			    }
			}
		);
		TweenMax.to(qAbout(".bi-telephone"), 0.1, 
	    	{y:"-=5", yoyo:true, repeat:5, delay: 0.5,
		    	scrollTrigger: {
			        trigger: ".bi-telephone"
			    }
			}
		);
	}, []);

	return (
		<>	
			<Navbar navCenter navHidden/>
			<div className='main' ref={about}>
				<div className='container about-space'>	
					<div className='d-flex row rowCols'>
						<div className='col'>
							<div className='about-left' >
								<h1 id='h1'>O nás</h1>
								<p id='p1'>Počas svojho veľkého dňa si každá nevesta zaslúži mať na sebe okrem úsmevu aj tie najkrajšie svadobné šaty.</p>
								<p id='p2'>S ich výberom Vám pomôžeme v našom salóne. Váš veľký deň budeme prežívať s Vami a veľmi radi Vám poradíme a pomôžeme.</p>
								<p id='p3'>S úsmevom sa tešíme na Vašu návštevu.</p>
							</div>
						</div>
						<div className='col'>
							<div className='about-right'> 
								<img src={nevesta} alt={nevesta}/>
							</div>
						</div>
					</div>
				</div>

				<div className='container bg-about'>	
					<div className='d-flex row'>
						<div className='about-card'>
							<div className='about-card-body'>
								<h1>Navštívte nás !</h1>
								<div className='adresa'>																
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
										<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
									  	<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
									</svg>
									<p>Moyzesova 36, Košice</p>
								</div>
								<div className='kontakt'>									
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
										<path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
									</svg>
									<p>+421 902 889 058</p>
								</div>
								<p>Skúška šiat trvá hodinu a je potrebné sa vopred telefonicky objednať.</p>
								{/*<p>Nájsť a kontaktovať nás možete aj na Instagrame a Facebooku</p>*/}
							</div>
						</div>
					</div>
				</div>

				<div className='container about-text'>
					<p>„Je lepšie raz skúsiť ako stokrát vidieť...“</p>
				</div>

				<div className='container pb-5'>
					<VideoBaner/>
				</div>

				<Footer/>
			</div>
		</>
	)
}
