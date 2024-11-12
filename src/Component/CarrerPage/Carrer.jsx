import React from 'react'
import "../../Assets/Css/CarrerPage.css";
import HOC from '../../HOC/HOC';
import CarrerForm from './CarrerForm';
import CarrerTable from './CarrerTable';
import CarrerIntro from './CarrerIntro';

function Carrer() {
    return (
        <>
            <CarrerTable/>
            <CarrerIntro/>
            <CarrerForm/>
        </>
    )
}

export default HOC(Carrer)