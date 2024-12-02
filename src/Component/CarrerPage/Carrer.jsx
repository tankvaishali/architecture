import React from 'react'
import "../../Assets/Css/CarrerPage.css";
import HOC from '../../HOC/HOC';
import CarrerForm from './CarrerForm';
import CarrerTable from './CarrerTable';
import CarrerIntro from './CarrerIntro';
import MainSection from '../../HOC/MainSection';

function Carrer() {
    return (
        <>
            <MainSection text="Carrer" classs='careerbgimg' />
            <CarrerTable />
            <CarrerIntro />
            <CarrerForm />
        </>
    )
}

export default HOC(Carrer)