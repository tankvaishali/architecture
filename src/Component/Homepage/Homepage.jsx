import React from 'react'
import HOC from '../../HOC/HOC'
import Whychooseus from './Whychooseus'
import "../../Assets/Css/Homecss.css"
import Testimonial from './Testimonial'
import BeforeAfter from './BeforeAfter'
import ArchitectureDesign from './ArchitectureDesign'
import About from './About'
import ClientLogo from './ClientLogo'

function Homepage() {
    return (
        <>
            <About/>
            <Whychooseus />
            <BeforeAfter />
            <Testimonial />
            <ArchitectureDesign/>
            <ClientLogo/>
        </>
    )
}

export default HOC(Homepage)