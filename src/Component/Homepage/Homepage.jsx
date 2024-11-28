import React from "react";
import HOC from "../../HOC/HOC";
import Whychooseus from "./Whychooseus";
import "../../Assets/Css/Homecss.css";
import Testimonial from "./Testimonial";
import BeforeAfter from "./BeforeAfter";
import ArchitectureDesign from "./ArchitectureDesign";
import About from "./About";
import Homeslider from "./Homeslider";
import Bookappointment from "./Bookappointment";
import ClientLogo from "./ClientLogo";
import News from "./News";
import Quality from "./Quality";
import PromoVideo from "./PromoVideo";
import Service from "./Service";

function Homepage() {
  return (
    <>
      <Homeslider />
      <About />
      <Whychooseus />
      <Quality />
      <BeforeAfter />
      <ArchitectureDesign />
      <Bookappointment />
      <PromoVideo />
      <Service />
      <News />
      <Testimonial />
      <ClientLogo />
    </>
  );
}

export default HOC(Homepage);
