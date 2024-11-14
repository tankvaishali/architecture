import React from 'react'
import HOC from '../../HOC/HOC'
import Whychooseus from './Whychooseus'
import "../../Assets/Css/Homecss.css"
import Testimonial from './Testimonial'
import BeforeAfter from './BeforeAfter'
import ArchitectureDesign from './ArchitectureDesign'

function Homepage() {
    return (
        <>
            <Whychooseus />
            <BeforeAfter />
            <Testimonial />
            <ArchitectureDesign/>
        </>
    )
}

export default HOC(Homepage)