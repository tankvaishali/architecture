import React from 'react';
import HOC from '../../HOC/HOC';
import { useParams } from 'react-router-dom';
import { ProjectList } from './ProjectListItem';
import Slider from "react-slick";

function ProjectListing() {
    const { id } = useParams();
    const data = ProjectList.filter((item) => item.id == id);

    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 1000, // Adjust speed for smooth transitions
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Keep reasonable timing
        pauseOnHover: false,
        adaptiveHeight: true,
        swipe: true,
        draggable: false, // Disable dragging to match your requirements
    };

    return (
        <div className="about-company bg_slideImage w-100">
            {data.map((item) => (
                <div key={item.id} className="container">
                    <div
                        className="about-section justify-content-center pt-4"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-aos-once="true"
                    >
                        <div className="line"></div>
                        <span className="fw-medium">{item.id}</span>
                    </div>
                    <h1
                        className="Discover text-dark pt-2 text-center"
                        data-aos="fade-down"
                        data-aos-duration="1800"
                        data-aos-once="true"
                    >
                        We Can Build Your {item.id} Projects
                    </h1>
                    <Slider {...settings}>
                        {item.inner_data?.map((inner_data, index) => (
                            <div key={index}>
                                <div className="row align-items-center justify-content-center">
                                    {/* {/ Left Section (Text) /} */}
                                    <div className="text-light col-md-6 col-10 py-5 px-3">
                                        <div className="bg-dark p-5 inner_data1">
                                            <h1
                                                className="text-white py-2 display-5"
                                                style={{ letterSpacing: "1px" }}
                                            >
                                                {inner_data.h1}
                                            </h1>
                                            <p className="text-white me-4">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, odit.
                                            </p>
                                            <p style={{ color: "rgba(245, 245, 245, 0.523)" }}>
                                                {inner_data.id}
                                            </p>
                                            <div>
                                                <div className="d-flex align-content-center align-items-center">
                                                    <div
                                                        style={{ color: "rgba(245, 245, 245, 0.523)" }}
                                                        className="fs-1 fw-bold pe-3 fs-lg-5 fs-md-3"
                                                    >
                                                        01
                                                    </div>
                                                    <div className="text-white fs-6 text-capitalize">
                                                        <span className="fw-bold">Project: </span>
                                                        {inner_data.h1}
                                                    </div>
                                                </div>
                                                <div className="d-flex align-content-center align-items-center">
                                                    <div
                                                        style={{ color: "rgba(245, 245, 245, 0.523)" }}
                                                        className="fs-1 fw-bold pe-3 fs-lg-5 fs-md-3"
                                                    >
                                                        02
                                                    </div>
                                                    <div className="text-white fs-6 text-capitalize">
                                                        <span className="fw-bold">Client: </span>
                                                        {inner_data.clients}
                                                    </div>
                                                </div>
                                                <div className="d-flex align-content-center align-items-center">
                                                    <div
                                                        style={{ color: "rgba(245, 245, 245, 0.523)" }}
                                                        className="fs-1 fw-bold pe-3 fs-lg-5 fs-md-3"
                                                    >
                                                        03
                                                    </div>
                                                    <div className="text-white fs-6 text-capitalize">
                                                        <span className="fw-bold">Construction: </span>
                                                        {inner_data.constructions}
                                                    </div>
                                                </div>
                                                <div className="d-flex align-content-center align-items-center">
                                                    <div
                                                        style={{ color: "rgba(245, 245, 245, 0.523)" }}
                                                        className="fs-1 fw-bold pe-3 fs-lg-5 fs-md-3"
                                                    >
                                                        04
                                                    </div>
                                                    <div className="text-white fs-6 text-capitalize">
                                                        <span className="fw-bold">Location: </span>
                                                        {inner_data.locate}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* {/ Right Section (Image) /} */}
                                    <div className="col-md-6 col-10">
                                        <div className="inner_data2">
                                            <img
                                                src={inner_data.mainimg}
                                                alt="Project Visual"
                                                className="img-fluid border border-5 border-dark"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            ))}
        </div>
    );
}

export default HOC(ProjectListing);
