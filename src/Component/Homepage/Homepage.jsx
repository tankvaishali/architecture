import React from 'react'
import HOC from '../../HOC/HOC'
import Whychooseus from './Whychooseus'
import "../../Assets/Css/Homecss.css"
import Testimonial from './Testimonial'

function Homepage() {
    return (
        <>
           <Whychooseus/>
           <Testimonial/>
        </>
    )
}

export default HOC(Homepage)