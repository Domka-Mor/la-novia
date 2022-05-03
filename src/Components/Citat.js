import React,{useEffect, useRef} from 'react';
import { gsap } from "gsap";

export default function Citat() {

	const citat = useRef();
	const citatEl = gsap.utils.selector(citat);

	useEffect(() => {
   		gsap.fromTo(citatEl("p"), {opacity: 0, x:-50}, {opacity: 1, x:0, duration: 0.5});
	}, []);

	return (
		<div className='citat d-flex align-items-center justify-content-center' ref={citat}>
		    <p>,,Nič, čo si na seba oblečiete, nie je dôležitejšie ako Váš úsmev." - <span>Connie Stevens</span></p>
		</div>       
	)
}