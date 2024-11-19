// import React, { useState, useEffect } from "react"
// import { Button, Container, Row, Col } from "react-bootstrap"
// import { ChevronLeft, ChevronRight, Circle } from "lucide-react"
// import { CSSTransition, TransitionGroup } from "react-transition-group"
// import "bootstrap/dist/css/bootstrap.min.css"

// const projects = [
//   {
//     id: 1,
//     title: "Geometric Wonder",
//     architect: "Zaha Hadid",
//     year: "2023",
//     description: "A masterpiece of parametric design, pushing the boundaries of form and function.",
//     image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww",
//   },
//   {
//     id: 2,
//     title: "Urban Oasis",
//     architect: "Bjarke Ingels",
//     year: "2024",
//     description: "Blending nature with urban living, creating a sustainable haven in the city center.",
//     image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww",
//   },
//   {
//     id: 3,
//     title: "Sustainable Skyscraper",
//     architect: "Norman Foster",
//     year: "2025",
//     description: "A pinnacle of eco-friendly design, harnessing renewable energy and vertical gardens.",
//     image: "https://images.unsplash.com/photo-1478860409698-8707f313ee8b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     id: 4,
//     title: "Floating Pavilion",
//     architect: "Kengo Kuma",
//     year: "2026",
//     description: "An ethereal structure that seems to defy gravity, merging traditional and modern techniques.",
//     image: "https://images.unsplash.com/photo-1481026469463-66327c86e544?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
//   },
// ]

// export default function Homeslider() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [direction, setDirection] = useState("next")
//   const [progress, setProgress] = useState(0)

//   const goToNext = () => {
//     setDirection("next")
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
//     setProgress(0)
//   }

//   const goToPrevious = () => {
//     setDirection("prev")
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
//     setProgress(0)
//   }

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prevProgress) => {
//         if (prevProgress >= 100) {
//           goToNext()
//           return 0
//         }
//         return prevProgress + 1
//       })
//     }, 100)
//     return () => clearInterval(interval)
//   }, [currentIndex])

//   return (
//     <div className="carousel-container">
//       <div className="blueprint-bg"></div>
//       <TransitionGroup>
//         <CSSTransition
//           key={currentIndex}
//           classNames={direction}
//           timeout={300}
//         >
//           <div className="carousel-slide">
//             <img
//               src={projects[currentIndex].image}
//               alt={projects[currentIndex].title}
//               className="carousel-image"
//             />
//             <div className="carousel-content">
//               <Container>
//                 <Row className="justify-content-end">
//                   <Col md={8} lg={6} className="bg-light bg-opacity-25 text-dark my-3 py-4">
//                     <h2 className="carousel-title py-2">{projects[currentIndex].title}</h2>
//                     <p className="carousel-subtitle py-2">
//                       {projects[currentIndex].architect} | {projects[currentIndex].year}
//                     </p>
//                     <p className="carousel-description py-2">{projects[currentIndex].description}</p>
//                   </Col>
//                 </Row>
//               </Container>
//             </div>
//           </div>
//         </CSSTransition>
//       </TransitionGroup>
//       <div className="carousel-controls">
//         <Button variant="outline-light" onClick={goToPrevious} className="carousel-control">
//           <ChevronLeft size={24} />
//         </Button>
//         <div className="carousel-indicators">
//           {projects.map((_, index) => (
//             <Circle
//               key={index}
//               size={12}
//               className={`carousel-indicator ${index === currentIndex ? "active" : ""}`}
//             />
//           ))}
//         </div>
//         <Button variant="outline-light" onClick={goToNext} className="carousel-control">
//           <ChevronRight size={24} />
//         </Button>
//       </div>
//       <div className="progress-bar-container">
//         <div
//           className="progress-bar"
//           style={{ width: `${progress}%` }}
//         ></div>
//       </div>
//       <style jsx>{`
//         .carousel-container {
//           position: relative;
//           width: 100%;
//           height: 84vh;
//           overflow: hidden;
//           background-color: #1a1a1a;
//         }

//         .blueprint-bg {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' /%3E%3C/g%3E%3C/svg%3E");
//           opacity: 0.1;
//           animation: blueprint 20s linear infinite;
//         }

//         @keyframes blueprint {
//           0% { background-position: 0 0; }
//           100% { background-position: 100px 100px; }
//         }

//         .carousel-slide {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//         }

//         .carousel-image {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }

//         .carousel-content {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           right: 0;
//           padding: 2rem;
//           background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
//           color: white;
//         }

//         .carousel-title {
//           font-size: 2.5rem;
//           font-weight: bold;
//           margin-bottom: 0.5rem;
//         }

//         .carousel-subtitle {
//           font-size: 1.2rem;
//           color: #cccccc;
//           margin-bottom: 0.5rem;
//         }

//         .carousel-description {
//           font-size: 1rem;
//           max-width: 600px;
//         }

//         .carousel-controls {
//           position: absolute;
//           bottom: 2rem;
//           left: 10%;
//           transform: translateX(-50%);
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//           z-index: 10;
//         }

//         .carousel-control {
//           background-color: var(--maincolor--);
//           border: none;
//           border-radius: 50%;
//           padding: 0.5rem;
//           transition: all 0.3s;
//         }

//         .carousel-control:hover {
//           background-color: rgba(255, 255, 255, 0.3);
//           transform: scale(1.1);
//         }

//         .carousel-indicators {
//           display: none;
//           gap: 0.5rem;
//         }

//         .carousel-indicator {
//           transition: all 0.3s;
//         }

//         .carousel-indicator.active {
//           transform: scale(1.25);
//           fill: white;
//         }

//         .progress-bar-container {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           right: 0;
//           height: 4px;
//           background-color: rgba(255,255,255,0.2);
//         }

//         .progress-bar {
//           height: 100%;
//           background-color: white;
//           transition: width 0.1s linear;
//         }

//         /* Animation classes */
//         .next-enter {
//           transform: translateX(100%);
//         }

//         .next-enter-active {
//           transform: translateX(0);
//           transition: transform 300ms ease-in-out;
//         }

//         .next-exit {
//           transform: translateX(0);
//         }

//         .next-exit-active {
//           transform: translateX(-100%);
//           transition: transform 300ms ease-in-out;
//         }

//         .prev-enter {
//           transform: translateX(-100%);
//         }

//         .prev-enter-active {
//           transform: translateX(0);
//           transition: transform 300ms ease-in-out;
//         }

//         .prev-exit {
//           transform: translateX(0);
//         }

//         .prev-exit-active {
//           transform: translateX(100%);
//           transition: transform 300ms ease-in-out;
//         }

//         @media (max-width: 768px) {
//           .carousel-title {
//             font-size: 2rem;
//           }

//           .carousel-subtitle {
//             font-size: 1rem;
//           }

//           .carousel-description {
//             font-size: 0.9rem;
//           }

//           .carousel-controls {
//           left: 50%;
//           }

//         .carousel-content {
//           bottom: 36px;
//         }
//         }
//       `}</style>
//     </div>
//   )
// }



import React, { useState, useEffect } from 'react';
import 'animate.css';
import { Carousel } from 'react-bootstrap';

function Homeslider() {
  const [textAnimationClass, setTextAnimationClass] = useState('');
  const [imageAnimationClass, setImageAnimationClass] = useState('');

  useEffect(() => {
    setTextAnimationClass('animate__fadeIn animate__delay-1s');
    setImageAnimationClass('animate__fadeInRight animate__delay-1s');
    const time1 = setTimeout(() => {
      setTextAnimationClass('animate__fadeOutLeft animate__slow');
      setImageAnimationClass('animate__fadeOutRight animate__slow');
    }, 4000);
    return () => {
      clearTimeout(time1)
    }
  }, []);

  const handleSlideChange = (event) => {
    const { direction } = event;

    setTextAnimationClass('animate__fadeIn animate__delay-1s');
    setImageAnimationClass('animate__fadeInRight animate__delay-1s');

    setTimeout(() => {
      if (direction === 'prev') {
        setTextAnimationClass('animate__fadeOutRight animate__slow d-none');
        setImageAnimationClass('animate__fadeOutLeft animate__slow d-none');
      } else {
        setTextAnimationClass('animate__fadeOutLeft animate__slow');
        setImageAnimationClass('animate__fadeOutRight animate__slow');
      }
    }, 4500);
  };

  return (
    <Carousel
      className="icons overflow-x-hidden"
      pause={false}
      interval={5000}

      indicators={false}
      prevIcon={false}
      nextIcon={false}
      onSlide={handleSlideChange}
    >
      <Carousel.Item>
        <div className='position-relative'>
          <img
            src={"https://illustrarch.com/wp-content/uploads/2024/08/digital_CV_information_of_an_architect_-ar_32_-_5f7938fa-46d5-47bd-b064-80e57c7dd18c_3-3-min.jpg"}
            className="vh-100 img-fluid w-100 object-fit-cover shadowed-image"
            alt="First slide"
          />
          <div className="shadow_inset"></div>
        </div>
        <Carousel.Caption>
          <div className="container col-lg-9 col-ms-10 col-12">
            <div className="row align-items-sm-center align-items-start justify-content-center mx-auto py-5 container">
              <div className={`border-top border-2 py-2 animate__animated ${imageAnimationClass}`}></div>
              <div className={`lh-lg col-lg-6 col-md-6 col-12 ps-sm-0 ps-4 text-sm-start text-center animate__animated ${textAnimationClass}`}>
                <p className='lh-lg animate__animated animate__fadeInLeft animate__delay-1s text-md-start text-sm-center text-start '>1/03</p>
                <h1 className='fw-bold lh-base jr_tittle fs-1 text-capitalize text-md-start text-sm-center text-start display-5 animate__animated animate__fadeIn animate__delay-2s animate__slow' style={{ fontFamily: 'Oswald, sans-serif' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
              </div>
              <div className={`col-lg-6 col-md-6 p-lg-2 p-0 col-12 animate__animated ${imageAnimationClass}`}>
                <img
                  src={"https://visualizingarchitecture.com/wp-content/uploads/2016/05/Culture_Center_Intro_06_Final.jpg"}
                  alt=""
                  className='col-lg-12 col-md-9 col-sm-7 col-10 img-fluid object-fit-fill animate__animated animate__fadeLeft p-lg-2 p-0'
                />
              </div>
              <div className={`border-bottom border-2 py-3 animate__animated  animate__fadeInLeft ${textAnimationClass}`}></div>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      < Carousel.Item>
        <div className='position-relative'>
          <img
            src={"https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/home4_img-10.jpg"}
            className="vh-100 img-fluid w-100 object-fit-cover shadowed-image"
            alt="First slide"
          />
          <div className="shadow_inset"></div>
        </div>
        <Carousel.Caption>
          <div className="container col-lg-9 col-ms-10 col-12">
            <div className="row align-items-sm-center align-items-start justify-content-center mx-auto py-5 container">
              <div className={`border-top border-2 py-2 animate__animated ${imageAnimationClass}`}></div>
              <div className={`lh-lg col-lg-6 col-md-6 col-12 ps-sm-0 ps-4 text-sm-start text-center animate__animated ${textAnimationClass}`}>
                <p className='lh-lg animate__animated animate__fadeInLeft animate__delay-1s text-md-start text-sm-center text-start '>2/03</p>
                <h1 className='fw-bold lh-base jr_tittle fs-1  text-capitalize text-md-start text-sm-center text-start display-5 animate__animated animate__fadeIn animate__delay-2s animate__slow' style={{ fontFamily: 'Oswald, sans-serif' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
              </div>
              <div className={`col-lg-6 col-md-6 p-lg-2 p-0 col-12 animate__animated ${imageAnimationClass}`}>
                <img
                  src={"https://img.freepik.com/free-photo/modern-styled-small-entryway_23-2150712887.jpg?ga=GA1.1.294526294.1713588320&semt=ais_hybrid"}
                  alt=""
                  className='col-lg-12 col-md-9 col-sm-7 col-10 img-fluid object-fit-fill animate__animated animate__fadeLeft p-lg-2 p-0'
                />
              </div>
              <div className={`border-bottom border-2 py-3 animate__animated  animate__fadeInLeft ${textAnimationClass}`}></div>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className='position-relative'>
          <img
            src={"https://darkarc.liquid-themes.com/wp-content/uploads/2022/04/2.jpg "}
            className="vh-100 img-fluid w-100 object-fit-cover shadowed-image custom-shadow "
            alt="First slide"
          />
          <div className="shadow_inset"></div>
        </div>
        <Carousel.Caption>
          <div className="container col-lg-9 col-ms-10 col-12">
            <div className="row align-items-sm-center align-items-start justify-content-center mx-auto py-5 container">
              <div className={`border-top border-2 py-2 animate__animated ${imageAnimationClass}`}></div>
              <div className={`lh-lg col-lg-6 col-md-6 col-12 ps-sm-0 ps-4 text-sm-start text-center animate__animated ${textAnimationClass}`}>
                <p className='lh-lg animate__animated animate__fadeInLeft animate__delay-1s text-md-start text-sm-center text-start '>3/03</p>
                <h1 className='fw-bold lh-base jr_tittle fs-1  text-capitalize text-md-start text-sm-center text-start display-5 animate__animated animate__fadeIn animate__delay-2s animate__slow' style={{ fontFamily: 'Oswald, sans-serif' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
              </div>
              <div className={`col-lg-6 col-md-6 p-lg-2 p-0 col-12 animate__animated ${imageAnimationClass}`}>
                <img src={"https://darkarc.liquid-themes.com/wp-content/uploads/2022/04/3.jpg"}
                  alt=""
                  className='col-lg-12 col-md-9 col-sm-7 col-10 img-fluid object-fit-cover animate__animated animate__fadeLeft p-lg-2 p-0'
                />
              </div>
              <div className={`border-bottom border-2 py-3 animate__animated  animate__fadeInLeft ${textAnimationClass}`}></div>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Homeslider;