import React from 'react'
import HOC from '../../HOC/HOC'
import Whychooseus from './Whychooseus'
import "../../Assets/Css/Homecss.css"
import Testimonial from './Testimonial'
import BeforeAfter from './BeforeAfter'
import Bookappointment from './Bookappointment'
import Services from './Services'

function Homepage() {
    return (
        <>
           <Whychooseus/>
           <Bookappointment/>
           <BeforeAfter/>
           |<Services/>
           <Testimonial/>
        </>
    )
}

export default HOC(Homepage)