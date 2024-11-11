import React from 'react'
import HOC from '../../HOC/HOC'
import "../../Assets/Css/AboutusPage.css"
import Aboutus from './Aboutus'
import Howwork from './Howwork'
import Vission from './Vission'
import Mission from './Mission'
import Awards from './Awards'
import Contactredirect from './Contactredirect'

function AboutusPage() {
  return (
   <>
   <Aboutus/>
   <Howwork/>
   <Vission/>
   <Mission/>
   <Awards/>
   <Contactredirect/>
   </>
  )
}

export default HOC(AboutusPage)