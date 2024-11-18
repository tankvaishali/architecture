import React from 'react'
import HOC from '../../HOC/HOC'
import Whychooseus from './Whychooseus'
import "../../Assets/Css/Homecss.css"
import Testimonial from './Testimonial'
import BeforeAfter from './BeforeAfter'
import ArchitectureDesign from './ArchitectureDesign'
import About from './About'

function Homepage() {
    return (
        <>
            <About/>
            <Whychooseus />
            <BeforeAfter />
            <Testimonial />
            <ArchitectureDesign/>
        </>
    )
}

export default HOC(Homepage)