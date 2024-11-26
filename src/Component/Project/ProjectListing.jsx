import React, { useRef, useState } from 'react';
import HOC from '../../HOC/HOC';
import { Link, useParams } from 'react-router-dom';
import { ProjectList } from './ProjectListItem';

import Slider from "react-slick";

function ProjectListing() {
    const { id } = useParams(); // Destructure id from useParams
    const data = ProjectList.filter((item) => item.id == id); // Ensure proper comparison
    console.log(data);

    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        adaptiveHeight: true,
        swipe: false,               // Disable swipe gestures
        draggable: false,
    };

    return (
        <>
            <div className="about-company bg_slideImage w-100">
                {data.map((item, index) => (
                    <div className="container">
                        <div className="about-section justify-content-center pt-4" data-aos="fade-up"
                            data-aos-duration="1500" data-aos-once="true" >
                            <div className="line"></div>
                            <span className="fw-medium">{item.id}</span>
                        </div>
                        <h1 className="Discover text-dark pt-2 text-center" data-aos="fade-down"
                            data-aos-duration="1800" data-aos-once="true">
                            We Can Build Your {item.id} Projects
                        </h1>
                        <div className="row align-items-center justify-content-center">
                            <div>
                                <Slider {...settings} className="product_slickdot resid">
                                    {item.inner_data.map((inner_data) => {
                                        return (
                                            <div
                                                key={index}
                                                className="container main_aboutSec d-flex align-items-center justify-content-center py-5 my-0 my-lg-3"
                                            >
                                                <div className="content p-3 p-lg-4 z-0">
                                                    <h1 className="text-white py-2 display-5" style={{ letterSpacing: "1px" }}>
                                                        {inner_data.h1}
                                                    </h1>
                                                    <p className="text-white">
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, odit.
                                                    </p>
                                                    <p style={{ color: "rgba(245, 245, 245, 0.523)" }}>{inner_data.id}</p>
                                                    <div>
                                                        <div className="d-flex align-content-center align-items-center">
                                                            <div style={{ color: "rgba(245, 245, 245, 0.523)" }} className="fs-1 fw-bold pe-3 fs-5">01</div>
                                                            <div className="text-white fs-6 text-capitalize"><span className="fw-bold">Project: </span>{inner_data.h1}</div>
                                                        </div>
                                                        <div className="d-flex align-content-center align-items-center">
                                                            <div style={{ color: "rgba(245, 245, 245, 0.523)" }} className="fs-1 fw-bold pe-3 fs-5">02</div>
                                                            <div className="text-white fs-6 text-capitalize"><span className="fw-bold">Client: </span>{inner_data.clients}</div>
                                                        </div>
                                                        <div className="d-flex align-content-center align-items-center">
                                                            <div style={{ color: "rgba(245, 245, 245, 0.523)" }} className="fs-1 fw-bold pe-3 fs-5">03</div>
                                                            <div className="text-white fs-6 text-capitalize"><span className="fw-bold">Construction: </span>{inner_data.constructions}</div>
                                                        </div>
                                                        <div className="d-flex align-content-center align-items-center">
                                                            <div style={{ color: "rgba(245, 245, 245, 0.523)" }} className="fs-1 fw-bold pe-3 fs-5">04</div>
                                                            <div className="text-white fs-6 text-capitalize"><span className="fw-bold">Location: </span>{inner_data.locate}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="image_about z-1">
                                                    <img src={inner_data.mainimg} alt="" className="team-image h-100 w-100 img-fluid" />
                                                </div>
                                            </div>
                                        )
                                    })}

                                </Slider>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default HOC(ProjectListing);
