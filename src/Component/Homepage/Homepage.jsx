import React from 'react'
import HOC from '../../HOC/HOC'
import Whychooseus from './Whychooseus'
import "../../Assets/Css/Homecss.css"
import Testimonial from './Testimonial'
import BeforeAfter from './BeforeAfter'

function Homepage() {
    return (
        <>
           <Whychooseus/>
     <BeforeAfter/>
           <Testimonial/>
        </>
    )
}

export default HOC(Homepage)