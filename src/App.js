import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Component/Homepage/Homepage';
import After from './HOC/After';
import AboutusPage from './HOC/AboutusPage';
import ContactUs from './Component/ContactUs/ContactUs';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/after' element={<After />} />
          <Route path='/aboutus' element={<AboutusPage />} />
          <Route path='/contactus' element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
