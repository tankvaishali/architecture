import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Component/Homepage/Homepage';

import ContactUs from './Component/ContactUs/ContactUs';
import AboutusPage from './Component/Aboutus/AboutusPage';
import Carrer from './Component/CarrerPage/Carrer';
import { useEffect } from 'react';
import Aos from 'aos';

function App() {

  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/aboutus' element={<AboutusPage />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/carrer' element={<Carrer />} />
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
