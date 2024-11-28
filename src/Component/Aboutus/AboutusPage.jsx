import React from 'react'
import HOC from '../../HOC/HOC'
import "../../Assets/Css/AboutusPage.css"
import Aboutus from './Aboutus'
import Howwork from './Howwork'
import Vission from './Vission'
import Mission from './Mission'
import Awards from './Awards'
import Contactredirect from './Contactredirect'
import ClientLogo from '../Homepage/ClientLogo'
import Team from './Team'

function AboutusPage() {
  return (
    <>
      <Aboutus />
      <Vission />
      <Mission />
      <Howwork />
      <Contactredirect />
      <Awards />
      {/* <Team /> */}
      <ClientLogo />
    </>
  )
}

export default HOC(AboutusPage)