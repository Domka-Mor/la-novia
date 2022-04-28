import React, {useContext} from 'react';
import {PhotoContext} from '../context';
import Navbar from '../Components/Navbar';
import Citat from '../Components/Citat';
import BanerFaded from '../Components/BanerFaded';
import CardCarousel from '../Components/CardCarousel';
import BookGalery from '../Components/BookGalery';
import Footer from '../Components/Footer';
import Baner from '../Components/Baner';


export default function Home() {

	const context = useContext(PhotoContext);
	const {photos} = context;

	return (
		<>
	      <Navbar navCenter navHidden/>
	      <div className='main'>
	        <Citat/>
	        <BanerFaded/>
	        {photos && photos.length !== 0 && <CardCarousel className='container-carousel' textStyle='text-carousel' text='Výnimočné šaty, pre výnimočnú ženu'/>}
	         <Baner/>
	        {photos && photos.length !== 0 && <BookGalery/>}
	        <Footer/>
	      </div>
	    </>
	)
}