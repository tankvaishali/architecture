import React from 'react'
import HOC from '../../HOC/HOC'
import Whychooseus from './Whychooseus'
import "../../Assets/Css/Homecss.css"
import Testimonial from './Testimonial'
import BeforeAfter from './BeforeAfter'
import ArchitectureDesign from './ArchitectureDesign'
import About from './About'
import Homeslider from './Homeslider'
import Bookappointment from './Bookappointment'
import ClientLogo from './ClientLogo'
import News from './News'

function Homepage() {
    return (
        <>
            <Homeslider />
            <About />
            <Whychooseus />
            <BeforeAfter />
            <ArchitectureDesign />
            <Bookappointment />
            <News />
            <Testimonial />
            <ClientLogo />
        </>
    )
}

export default HOC(Homepage)