// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Slider from "react-slick";
// import { ProjectList } from '../Project/ProjectListItem';

// function ArchitectureDesign() {
//     const [hoverIndex, setHoverIndex] = useState(null);
//     const [inView, setInView] = useState(true);

//     const slides = [
//         {

//             title: "RESIDENCIAL",
//             subtitle: "Manufacturing",
//             description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, voluptatibus.",
//             backgroundImage: 'https://darkarc.liquid-themes.com/wp-content/uploads/2022/04/1.jpg',
//         },
//         {
//             title: "COMMERCIAL",
//             subtitle: "Renovating",
//             description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, impedit.",
//             backgroundImage: 'https://darkarc.liquid-themes.com/wp-content/uploads/2022/04/2.jpg',
//         },
//         {

//             title: "RESIDENCIAL",
//             subtitle: "Manufacturing",
//             description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, perferendis.",
//             backgroundImage: 'https://darkarc.liquid-themes.com/wp-content/uploads/2022/04/3.jpg',
//         },
//         {
//             title: "COMMERCIAL",
//             subtitle: "Renovating",
//             description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, impedit.",
//             backgroundImage: 'https://darkarc.liquid-themes.com/wp-content/uploads/2022/04/2.jpg',
//         },
//         {

//             title: "RESIDENCIAL",
//             subtitle: "Manufacturing",
//             description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, perferendis.",
//             backgroundImage: 'https://darkarc.liquid-themes.com/wp-content/uploads/2022/04/3.jpg',
//         },
//     ];

//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 1000,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         adaptiveHeight: true,
//         nextArrow: <CustomArrow direction="next" />,
//         prevArrow: <CustomArrow direction="prev" />,
//         responsive: [
//             {
//                 breakpoint: 1200,
//                 settings: {
//                     slidesToShow: 3,
//                 },
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2,
//                 },
//             },
//             {
//                 breakpoint: 576,
//                 settings: {
//                     slidesToShow: 1,
//                 },
//             },
//         ],
//     };

//     useEffect(() => {
//         const handleScroll = () => {
//             const section = document.querySelector('.Probg_img');
//             const rect = section.getBoundingClientRect();
//             setInView(rect.top <= window.innerHeight && rect.bottom >= 0);
//         };

//         window.addEventListener('scroll', handleScroll);
//         handleScroll();

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     function CustomArrow(props) {
//         const { onClick, direction } = props;
//         return (
//             <div
//                 className={`custom-arrow ${direction}`}
//                 onClick={onClick}
//             >
//                 {direction === "next" ? '→' : '←'}
//             </div>
//         );
//     }

//     return (
//         <>
//             <div className=' py-0 py-lg-5 overflow-hidden'>
//                 <div
//                     className="Probg_img shadow-lg my-5"
//                     style={{
//                         backgroundImage: hoverIndex === null && inView
//                             ? `url(${slides[0].backgroundImage})`
//                             : hoverIndex !== null
//                                 ? `url(${slides[hoverIndex].backgroundImage})`
//                                 : 'none',
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
//                         backgroundRepeat: 'no-repeat',
//                         height: '100vh',
//                         transition: 'background-image 0.5s ease-in-out',
//                     }}
//                 >
//                     <Slider {...settings}>
//                         {ProjectList.map((slide, index) => (
//                             <Link to={`/project/${slide.id}  `} className='text-decoration-none'>
//                                 <div
//                                     key={index}
//                                     className="col-12"
//                                     onMouseEnter={() => setHoverIndex(index)}
//                                     onMouseLeave={() => setHoverIndex(null)}
//                                 >
//                                     <div className="pro_mainbox col-lg-4 w-100 vh-100 d-flex align-items-end mx-auto">
//                                         <div className="cont_main py-3">
//                                             <div className="px-4">
//                                                 <h3 className="pro_tittle fw-bold">
//                                                     {slide.name}
//                                                 </h3>
//                                             </div>
//                                             <div className="pro_cont px-4 pb-4">{slide.loremContent}</div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Link>
//                         ))}
//                     </Slider>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default ArchitectureDesign;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { ProjectList } from '../Project/ProjectListItem';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

function ArchitectureDesign() {
    const [hoverIndex, setHoverIndex] = useState(null);
    const [inView, setInView] = useState(true);

    const slides = [
        {
            backgroundImage: 'https://darkarc.liquid-themes.com/wp-content/uploads/2022/04/1.jpg',
        },
        {
            backgroundImage: 'https://darkarc.liquid-themes.com/wp-content/uploads/2022/04/2.jpg',
        },
        {
            backgroundImage: 'https://darkarc.liquid-themes.com/wp-content/uploads/2022/04/3.jpg',
        },
        {
            backgroundImage: 'https://darkarc.liquid-themes.com/wp-content/uploads/2022/04/2.jpg',
        },
        {
            backgroundImage: 'https://darkarc.liquid-themes.com/wp-content/uploads/2022/04/3.jpg',
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        nextArrow: <CustomArrow direction="next" />,
        prevArrow: <CustomArrow direction="prev" />,
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
                    slidesToShow: 2,
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
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function CustomArrow(props) {
        const { onClick, direction } = props;
        return (
            <div
                className={`custom-arrow ${direction}`}
                onClick={onClick}
            >
               {direction === "next" ? <FaLongArrowAltRight /> : <FaLongArrowAltLeft />}
            </div>
        );
    }

    return (
        <>
            <div className='py-0 py-lg-5 overflow-hidden'>
                <div
                    className="Probg_img shadow-lg my-5 my-lg-0"
                    style={{
                        backgroundImage: hoverIndex === null && inView
                            ? `url(${slides[0].backgroundImage})`
                            : hoverIndex !== null
                                ? `url(${slides[hoverIndex].backgroundImage})`
                                : 'none',
                    }}
                >
                    <Slider {...settings}>
                        {ProjectList.map((slide, index) => (
                            <Link to={`/project/${slide.id}`} className='text-decoration-none' key={index}>
                                <div
                                    className="col-12"
                                    onMouseEnter={() => setHoverIndex(index)}
                                    onMouseLeave={() => setHoverIndex(null)}
                                >
                                    <div className="pro_mainbox col-lg-4 w-100 d-flex align-items-end mx-auto">
                                        <div className="cont_main py-3">
                                            <div className="px-4">
                                                <h3 className="pro_tittle fw-bold">
                                                    {slide.name}
                                                </h3>
                                            </div>
                                            <div className="pro_cont px-4 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, perferendis.</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default ArchitectureDesign;
