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
import Projectdata from './Component/Project/Projectdata';

import ProjectListing from './Component/Project/ProjectListing';
import ProjectInnerList from './Component/Project/ProjectInnerList';
import ScrollToTop from './HOC/ScrollToTop';

function App() {

  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/aboutus' element={<AboutusPage />} />
          <Route path='/project' element={<Projectdata />} />
     <Route path='/project/:id' element={<ProjectListing/>}/>
     <Route path='/project/:id/id2' element={<ProjectInnerList/>}/>
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/carrer' element={<Carrer />} />
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
