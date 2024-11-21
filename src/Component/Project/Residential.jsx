// import React, { useRef } from "react";
// import Slider from "react-slick";
// import HOC from "../../HOC/HOC";

// function Residential() {
//   const sliderRef = useRef(null);

//   const data = [
//     {
//       img: "https://img.freepik.com/free-photo/shot-panoramic-composition-living-room_23-2150315646.jpg?t=st=1731407482~exp=1731411082~hmac=6152e8a429c6f0d0fd715cb2f17713bdadd08ddd0425b423c1fbdc65a77d29ea&w=1060",
//       h1: "78$",
//       p: "Finger Splints",
//     },
//     {
//       img: "https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf_105762-2175.jpg?t=st=1731407718~exp=1731411318~hmac=29473b08d3de49bb3f4c6598c254522c3bf34d42540f2589cec30d4ac01aff8a&w=900",
//       h1: "78$",
//       p: "Rubber Footwear",
//     },
//     {
//       img: "https://img.freepik.com/free-photo/modern-dining-room-living-room-with-luxury-decor_105762-1672.jpg?ga=GA1.1.294526294.1713588320",
//       h1: "78$",
//       p: "Blue Poron And EVA GentleStep Insole",
//     },
//   ];

//   const settings = {
//     dots: false,
//     infinite: true,
//     arrows: true,
//     speed: 1500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: false,

//     responsive: [
//       {
//         breakpoint: 991,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//     ],
//   };

//   const handleWheel = (e) => {
//     e.preventDefault();
//     if (sliderRef.current) {
//       const slider = sliderRef.current;
//       if (e.deltaY > 0) {
//         slider.slickNext(); // Scroll right on downward scroll
//       } else {
//         slider.slickPrev(); // Scroll left on upward scroll
//       }
//     }
//   };

//   return (
//     <div
//       className="slider-container w-100"
//       onWheel={handleWheel} // Intercept the vertical scroll event
//     >
//       <div className="container">
//         <div className="row align-items-center justify-content-center border border-1 border-dark">
//           <Slider {...settings} ref={sliderRef} className="product_slickdot">
//             {data.map((item, index) => (
//               <div key={index} className="p-3 Hover mb-5">
//                 <div className="border p-3 rounded-4 ProductHover text-center">
//                   <img
//                     src={item.img}
//                     alt=""
//                     className="rounded-4 w-75 h-100 mx-auto"
//                   />
//                   <div className="pt-3">
//                     <p className="contentdata fs-6 fw-bold">{item.p}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HOC(Residential);

// const data = [
//   {

//     img: "https://img.freepik.com/free-photo/shot-panoramic-composition-living-room_23-2150315646.jpg?t=st=1731407482~exp=1731411082~hmac=6152e8a429c6f0d0fd715cb2f17713bdadd08ddd0425b423c1fbdc65a77d29ea&w=1060",
//     no: "01",
//     client: "diamond process0",
//     location: "Surat, Gujarat",
//     construction: "2022",
//     typo: "manufacturing",
//     p: "Finger Splints",
//   },
//   {
//     img: "https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf_105762-2175.jpg?t=st=1731407718~exp=1731411318~hmac=29473b08d3de49bb3f4c6598c254522c3bf34d42540f2589cec30d4ac01aff8a&w=900",
//     no: "01",
//     client: "diamond process0",
//     location: "Surat, Gujarat",
//     construction: "2022",
//     typo: "manufacturing",
//     p: "Rubber Footwear",
//   },
//   {
//     img: "https://img.freepik.com/free-photo/modern-dining-room-living-room-with-luxury-decor_105762-1672.jpg?ga=GA1.1.294526294.1713588320",
//     no: "01",
//     client: "diamond process0",
//     location: "Surat, Gujarat",
//     construction: "2022",
//     typo: "manufacturing",
//     p: "Blue Poron And EVA GentleStep Insole",
//   },
// ];

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import HOC from "../../HOC/HOC";
import "../../Assets/Css/Project.css"
// import HOC from "../../HOC/HOC";

function Recidential() {
  const sliderRef = useRef(null);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const autoplayTimeout = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

   
  };

  const data = [
    {
      img: "https://img.freepik.com/free-photo/shot-panoramic-composition-living-room_23-2150315646.jpg?t=st=1731407482~exp=1731411082~hmac=6152e8a429c6f0d0fd715cb2f17713bdadd08ddd0425b423c1fbdc65a77d29ea&w=1060",

      client: "Mayur Tank",
      location: "Surat, Gujarat",
      construction: "2022",
      typo: "manufacturing",
      p: "White Palace",
    },
    {
      img: "https://img.freepik.com/free-photo/shot-panoramic-composition-living-room_23-2150315646.jpg?t=st=1731407482~exp=1731411082~hmac=6152e8a429c6f0d0fd715cb2f17713bdadd08ddd0425b423c1fbdc65a77d29ea&w=1060",

      client: "William Mushkin",
      location: "Surat, Gujarat",
      construction: "2025",
      typo: "Constructor",
      p: "kitchen",
    },
    {
      img: "https://img.freepik.com/free-photo/shot-panoramic-composition-living-room_23-2150315646.jpg?t=st=1731407482~exp=1731411082~hmac=6152e8a429c6f0d0fd715cb2f17713bdadd08ddd0425b423c1fbdc65a77d29ea&w=1060",

      client: "Mayur Tank",
      location: "Surat, Gujarat",
      construction: "2022",
      typo: "manufacturing",
      p: "White Palace",
    },
    {
      img: "https://img.freepik.com/free-photo/shot-panoramic-composition-living-room_23-2150315646.jpg?t=st=1731407482~exp=1731411082~hmac=6152e8a429c6f0d0fd715cb2f17713bdadd08ddd0425b423c1fbdc65a77d29ea&w=1060",

      client: "William Mushkin",
      location: "Surat, Gujarat",
      construction: "2025",
      typo: "Constructor",
      p: "kitchen",
    },   
    {
      img: "https://img.freepik.com/free-photo/shot-panoramic-composition-living-room_23-2150315646.jpg?t=st=1731407482~exp=1731411082~hmac=6152e8a429c6f0d0fd715cb2f17713bdadd08ddd0425b423c1fbdc65a77d29ea&w=1060",

      client: "Mayur Tank",
      location: "Surat, Gujarat",
      construction: "2022",
      typo: "manufacturing",
      p: "White Palace",
    },
    {
      img: "https://img.freepik.com/free-photo/shot-panoramic-composition-living-room_23-2150315646.jpg?t=st=1731407482~exp=1731411082~hmac=6152e8a429c6f0d0fd715cb2f17713bdadd08ddd0425b423c1fbdc65a77d29ea&w=1060",

      client: "William Mushkin",
      location: "Surat, Gujarat",
      construction: "2025",
      typo: "Constructor",
      p: "kitchen",
    },
  ];
  return (
    <>
      <div className="about-company bg_slideImage w-100">
        <div className="container">

        <div className="about-section justify-content-center pt-4" data-aos="fade-up"
                                    data-aos-duration="1500" data-aos-once="true" >
                                    <div className="line  "></div>
                                    <span className='fw-medium'>Recidential</span>
                                </div>
                                <h1 className="Discover text-dark pt-2 text-center" data-aos="fade-down"
                                    data-aos-duration="1800" data-aos-once="true">We Can Build Your Recidential Projects</h1>

          <div className="row align-items-center justify-content-center">
            <Slider {...settings} ref={sliderRef} className="product_slickdot resid">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="container main_aboutSec d-flex align-items-center justify-content-center py-5 my-0 my-lg-3"
                >
                  <div className="content p-3 p-lg-4 z-0">
                    <h1
                      className="text-white py-2 display-5"
                      style={{ letterSpacing: "1px" }}
                    >
                      {item.p}
                    </h1>
                    <p className="text-white">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Omnis, odit.
                    </p>
                    <p style={{ color: "rgba(245, 245, 245, 0.523)" }}>
                      {item.client}
                    </p>
                    <div>
                      <div className="d-flex  align-content-center align-items-center ">
                        <div
                          style={{ color: "rgba(245, 245, 245, 0.523)" }}
                          className="fs-1 fw-bold pe-3 fs-5"
                        >
                          01
                        </div>
                        <div className="text-white  fs-6">
                          <span className="fw-bold">Project : </span>{" "}
                          {item.typo}
                        </div>
                      </div>
                      <div className="d-flex align-content-center align-items-center ">
                        <div
                          style={{ color: "rgba(245, 245, 245, 0.523)" }}
                          className="fs-1 fw-bold pe-3 fs-5"
                        >
                          02
                        </div>
                        <div className="text-white  fs-6">
                          <span className="fw-bold ">Clients :</span>{" "}
                          {item.client}
                        </div>
                      </div>
                      <div className="d-flex  align-content-center align-items-center ">
                        <div
                          style={{ color: "rgba(245, 245, 245, 0.523)" }}
                          className="fs-1 fw-bold pe-3 fs-5"
                        >
                          03
                        </div>
                        <div className="text-white  fs-6">
                          <span className="fw-bold">Construciton : </span>{" "}
                          {item.construction}
                        </div>
                      </div>
                      <div className="d-flex  align-content-center align-items-center ">
                        <div
                          style={{ color: "rgba(245, 245, 245, 0.523)" }}
                          className="fs-1 fw-bold pe-3 fs-5"
                        >
                          04
                        </div>
                        <div className="text-white  fs-6">
                          <span className="fw-bold">Location : </span>{" "}
                          {item.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="image_about z-1">
                    <img
                      src={item.img}
                      alt=""
                      className="team-image h-100 w-100 img-fluid"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default HOC(Recidential);
