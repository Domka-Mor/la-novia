import React,{useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Routes/Home';
import AboutUs from './Routes/AboutUs';
import Galery from './Routes/Galery';
import Product from './Routes/Product';
import Default from './Routes/Default';


function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      fakeRequest().then(() => {
        const el = document.querySelector(".preloader");
        
        if (el) {
          el.remove();  // removing the spinner element
          setLoading(true); // showing the app
        }
      });
  }, [loading]); 

  const fakeRequest = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 0));
  };

  if(!loading) {
    return null
  } 

  return (
    <>     
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/galery' element={<Galery/>} />
        <Route path='/category/:slug' element={<Product/>}/>
        <Route path='*' element={<Default/>}/>
      </Routes>
    </>
  );
}

export default App;
