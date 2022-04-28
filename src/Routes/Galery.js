import React, {useContext} from 'react';
import {PhotoContext} from '../context';
import CardList from '../Components/CardList';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


export default function Galery() {

	const context = useContext(PhotoContext);
	const {photos} = context;

	return (
		<>
			<Navbar navUnder navHidden/>
			<div className='under'>				
				{photos && photos.length !== 0 && <CardList/>}
				<Footer/>
			</div>
		</>
	)
}