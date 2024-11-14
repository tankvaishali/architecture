// import React, { useState, useEffect } from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function ArchitectureDesign() {
//     const [hoverIndex, setHoverIndex] = useState(null); // state to track hovered index
//     const [inView, setInView] = useState(false); // state to track if the section is in view

//     const slides = [
//         {
//             title: "BUILDING THE",
//             subtitle: "FUTURE CITIES",
//             description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, voluptatibus.",
//             backgroundImage: 'https://darkarc.liquid-themes.com/wp-content/uploads/2022/04/1.jpg',
//         },
//         {
//             title: "INFLUENTIAL AND",
//             subtitle: "IMPACTFUL",
//             description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, impedit.",
//             backgroundImage: 'https://darkarc.liquid-themes.com/wp-content/uploads/2022/04/2.jpg',
//         },
//         {
//             title: "FUNCTIONAL",
//             subtitle: "INTERIOR DESIGN",
//             description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, perferendis.",
//             backgroundImage: 'https://darkarc.liquid-themes.com/wp-content/uploads/2022/04/3.jpg',
//         },
//         {
//             title: "AWARD-WINNING",
//             subtitle: "ARCHITECTURE",
//             description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, perferendis.",
//             backgroundImage: 'https://darkarc.liquid-themes.com/wp-content/uploads/2022/04/4.jpg',
//         }
//     ];

//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 1000,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         adaptiveHeight: true,
//     };

//     useEffect(() => {
//         const handleScroll = () => {
//             const section = document.querySelector('.Probg_img');
//             const rect = section.getBoundingClientRect();
//             setInView(rect.top <= window.innerHeight && rect.bottom >= 0); // Check if section is in view
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <div
//             className="Probg_img"
//             style={{
//                 backgroundImage: inView && hoverIndex === null
//                     ? 'url(https://darkarc.liquid-themes.com/wp-content/uploads/2022/04/default.jpg)' // Default image
//                     : hoverIndex !== null
//                     ? `url(${slides[hoverIndex].backgroundImage})` // Image changes on hover
//                     : 'none',
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat',
//                 height: '100vh', // Full-screen height for the section
//                 transition: 'background-image 0.5s ease-in-out',
//             }}
//         >
//             <Slider {...settings}>
//                 {slides.map((slide, index) => (
//                     <div
//                         key={index}
//                         className="col-12"
//                         onMouseEnter={() => setHoverIndex(index)} // set hovered index
//                         onMouseLeave={() => setHoverIndex(hoverIndex)} // keep the hover image even after mouse leaves
//                     >
//                         <div className="pro_mainbox col-lg-3 border border-1 border-white w-100 vh-100 d-flex align-items-end mx-auto">
//                             <div className="cont_main">
//                                 <div className="py-3 px-4">
//                                     <h3 className="pro_tittle fw-bold">
//                                         {slide.title} <div>{slide.subtitle}</div>
//                                     </h3>
//                                 </div>
//                                 <div className="pro_cont px-4 pb-4">{slide.description}</div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// }

// export default ArchitectureDesign;

import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ArchitectureDesign() {
    const [hoverIndex, setHoverIndex] = useState(null);
    const [inView, setInView] = useState(false);

    const slides = [
        {
            title: "BUILDING THE",
            subtitle: "FUTURE CITIES",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, voluptatibus.",
            backgroundImage: 'https://darkarc.liquid-themes.com/wp-content/uploads/2022/04/1.jpg',
        },
        {
            title: "INFLUENTIAL AND",
            subtitle: "IMPACTFUL",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, impedit.",
            backgroundImage: 'https://darkarc.liquid-themes.com/wp-content/uploads/2022/04/2.jpg',
        },
        {
            title: "FUNCTIONAL",
            subtitle: "INTERIOR DESIGN",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, perferendis.",
            backgroundImage: 'https://darkarc.liquid-themes.com/wp-content/uploads/2022/04/3.jpg',
        },
        {
            title: "AWARD-WINNING",
            subtitle: "ARCHITECTURE",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, perferendis.",
            backgroundImage: 'https://darkarc.liquid-themes.com/wp-content/uploads/2022/04/4.jpg',
        }
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector('.Probg_img');
            const rect = section.getBoundingClientRect();
            setInView(rect.top <= window.innerHeight && rect.bottom >= 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className="Probg_img overflow-hidden"
            style={{
                backgroundImage: inView && hoverIndex === null
                    ? `url(${slides[0].backgroundImage})`
                    : hoverIndex !== null
                        ? `url(${slides[hoverIndex].backgroundImage})`
                        : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                transition: 'background-image 0.5s ease-in-out',
            }}
        >
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="col-12"
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                    >
                        <div className="pro_mainbox col-lg-3 border border-1 border-white w-100 vh-100 d-flex align-items-end mx-auto">
                            <div className="cont_main">
                                <div className="py-3 px-4">
                                    <h3 className="pro_tittle fw-bold">
                                        {slide.title} <div>{slide.subtitle}</div>
                                    </h3>
                                </div>
                                <div className="pro_cont px-4 pb-4">{slide.description}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ArchitectureDesign;