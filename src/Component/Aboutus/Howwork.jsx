import React, { useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { IoMdCheckboxOutline } from 'react-icons/io';
import Slider from 'react-slick';

function Howwork() {
    const [hoveredItem, setHoveredItem] = useState(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        arrows: false,
        dots: false,
     
        responsive: [
            {
              breakpoint: 1024,
              settings: { slidesToShow: 2 },
            },
            {
              breakpoint: 991,
              settings: { slidesToShow: 1 },
            },
            {
              breakpoint: 480,
              settings: { slidesToShow: 1 },
            },
          ],
    };

    const ProductItemlist = [
        {
            id: "01",
            backgroundImage: "https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/step1.jpg",
            name: "Receiving",
            title: "Concept design proposals are followed by the stage known as 'design development', which can also be referred to as 'schematic design' to capture the stage's purpose and intent.",
        },
        {
            id: "02",
            backgroundImage: "https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/step2.jpg",
            name: "Feasibility and assessment",
            title: "Concept design proposals are followed by the stage known as 'design development', which can also be referred to as 'schematic design' to capture the stage's purpose and intent.",
        },
        {
            id: "03",
            backgroundImage: "https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/step3.jpg",
            name: "Concept design",
            title: "Concept design proposals are followed by the stage known as 'design development', which can also be referred to as 'schematic design' to capture the stage's purpose and intent.",
        },
        {
            id: "04",
            backgroundImage: "https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/step1.jpg",
            name: "Design development",
            title: "Concept design proposals are followed by the stage known as 'design development', which can also be referred to as 'schematic design' to capture the stage's purpose and intent.",
        },
        {
            id: "05",
            backgroundImage: "https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/step2.jpg",
            name: "Pre Design",
            title: "Concept design proposals are followed by the stage known as 'design development', which can also be referred to as 'schematic design' to capture the stage's purpose and intent.",
        },
        {
            id: "06",
            backgroundImage: "https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/step3.jpg",
            name: "Idea",
            title: "Concept design proposals are followed by the stage known as 'design development', which can also be referred to as 'schematic design' to capture the stage's purpose and intent.",
        },
    ];

    return (
        <div className="howworkbg py-3">
            <div className="py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="h-100">
                                <div className="about-section">
                                    <div className="line"></div>
                                    <span>HOW WE WORK</span>
                                </div>
                                <h1 className="Discover text-dark py-3">Our easy steps to get interior design</h1>
                                <div className="pera">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vero nisi eius dicta. Odit quo beatae nulla quibusdam unde dolor.
                                </div>
                                <div className="d-flex my-2">
                                    <div>
                                        <div className="d-flex align-items-center align-content-center py-1">
                                            <div className="fs-5"><IoMdCheckboxOutline /></div>
                                            <div className="pera ps-2 fw-bold">Concept</div>
                                        </div>
                                        <div className="d-flex align-items-center align-content-center py-1">
                                            <div className="fs-5"><IoMdCheckboxOutline /></div>
                                            <div className="pera ps-2 fw-bold">Idea</div>
                                        </div>
                                    </div>
                                    <div className="ms-3 ms-lg-5">
                                        <div className="d-flex align-items-center align-content-center py-1">
                                            <div className="fs-5"><IoMdCheckboxOutline /></div>
                                            <div className="pera ps-2 fw-bold">Design</div>
                                        </div>
                                        <div className="d-flex align-items-center align-content-center py-1">
                                            <div className="fs-5"><IoMdCheckboxOutline /></div>
                                            <div className="pera ps-2 fw-bold">Execution</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-12 col-md-6 col-lg-9">
                            <div className="h-100">
                                <Slider {...settings} className= " h-100 p-0 m-0">
                                    {ProductItemlist.map((item) => (
                                        <div
                                            key={item.id}
                                            className="px-2"
                                            onMouseEnter={() => setHoveredItem(item.id)}
                                            onMouseLeave={() => setHoveredItem(null)}
                                           
                                            style={{ transition: "all 0.3s ease-in-out"}}
                                        >
                                            <div
                                                className="cardbox h-100 p-3 shadow-sm w-100 d-flex flex-column justify-content-between"
                                                style={{
                                                    transition: "all 0.3s ease-in-out",
                                                    background: hoveredItem === item.id 
                                                        ? `url(${item.backgroundImage}) center/cover`
                                                        : 'white',
                                                    color: hoveredItem === item.id ? 'white' : 'black',
                                                }}
                                            >
                                                <div className="howno p-1">{item.id}</div>
                                                <div className="fs-5 fw-bold pt-2 pt-lg-4">{item.name}</div>
                                                <div
                                                    style={{
                                                        color: hoveredItem === item.id ? 'white' : '#5a717c',
                                                    }}
                                                    className="pera py-3 pb-4 flex-grow-1"
                                                >
                                                    {item.title}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Howwork;
