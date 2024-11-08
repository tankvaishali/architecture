import React from 'react'
import HOC from '../../HOC/HOC'
import "../../Assets/Css/AboutusPage.css"
import Aboutus from './Aboutus'
import Howwork from './Howwork'
import Vission from './Vission'
import Mission from './Mission'

function AboutusPage() {
  return (
   <>
   <Aboutus/>
   <Vission/>
   <Mission/>
   <Howwork/>
   </>
  )
}

export default HOC(AboutusPage)