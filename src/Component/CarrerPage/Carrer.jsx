import React from 'react'
import "../../Assets/Css/CarrerPage.css";
import HOC from '../../HOC/HOC';
import CarrerForm from './CarrerForm';
import CarrerTable from './CarrerTable';
import CarrerSlider from './CarrerSlider';

function Carrer() {
    return (
        <>
            <CarrerForm/>
            <CarrerTable/>
            <CarrerSlider/>
        </>
    )
}

export default HOC(Carrer)