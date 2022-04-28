import React, {Component} from 'react';
import {photos} from './Data';


const PhotoContext = React.createContext();


class PhotoProvider extends Component {

	state={
 		photos: [],
 		cardName: '',
 		cardImages: [],
 		cardImagesArr: []
 	};


 	componentDidMount() {
		this.setPhotos();
	}

	
	setPhotos = () => {
		let tempPhotos = [];
		photos.forEach(item => {
			const singleItem = { ...item};
			tempPhotos = [ ...tempPhotos, singleItem];
		});
		this.setState(() => {
			return {photos: tempPhotos}},
		 	() => {console.log(this.state.photos, "photos");}			
		)
	}


	handleCard = (card) => {
		const cardName = card.name;
 		const cardImages = card.photos;

 		const cardImagesArr = []
		cardImages.map(image => cardImagesArr.push(image.src))

		this.setState(() => {
			return {cardName: cardName, cardImages: cardImages, cardImagesArr: cardImagesArr}
		}, () => console.log(cardImages, cardName, cardImagesArr))
	}

render() {
		return (
			<PhotoContext.Provider value={{
				...this.state,
				handleCard: this.handleCard
			}}>
				{this.props.children}
			</PhotoContext.Provider>
		)
	}
}


const PhotoConsumer = PhotoContext.Consumer;

export {PhotoProvider,PhotoConsumer, PhotoContext};