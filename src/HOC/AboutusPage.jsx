import React from 'react'
import HOC from './HOC'
import Aboutus from './Aboutus'
import "../Assets/Css/AboutusPage.css"

function AboutusPage() {
  return (
   <>
   <Aboutus/>
   </>
  )
}

export default HOC(AboutusPage)