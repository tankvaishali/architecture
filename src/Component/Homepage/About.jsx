import React from 'react'
import { HiOutlineArrowSmRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

function About() {
    return (
        <>
            <div className="about-company d-flex align-items-center p-0 py-lg-5 overflow-hidden">
                <div className="container main_aboutSec d-flex align-items-center justify-content-center py-5 my-0 my-lg-3">
                    <div className="content p-3 p-lg-4 z-1" data-aos="fade-right"
                        data-aos-duration="1500"
                        data-aos-once="true" data-aos-delay="1000">
                        <div className="about-section text-dark">
                            <div className="line border border-1 border-white"></div>
                            <span className='text-white text-uppercase'>Get to know us</span>
                        </div>
                        <h1 className="text-white py-2 display-5" style={{ letterSpacing: "1px" }}>
                            About Company
                        </h1>
                        <p style={{ color: "rgb(184, 184, 184)" }}>
                            Architecture the inila duman aten elit finibus vivera alacus company
                            design drudean seneice muiscibe noneten the fermen. The design
                            architecture duiman finibus viverra nec a lacus drudeane sene voice
                            fermen.
                        </p>
                        <p style={{ color: "rgb(184, 184, 184)" }}>
                            Design architecture duiman et elit finibus viverra nec a lacus vivento
                            nuse ane sene voice the volume the miss drana inc fermen.
                        </p>

                        <div className="py-3">
                            <Link to="/aboutus">
                                <button type="button" className="bg_button Inter text-white fs-6 ps-4 pe-5 py-2 fw-bold position-relative">
                                    About Us
                                    <span className="bg_iconbtn py-3 px-2 text-dark position-absolute end-0">
                                        <HiOutlineArrowSmRight className="fs-5" />
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="image_about z-0" data-aos="fade-left"
                        data-aos-duration="1500"
                        data-aos-once="true"
                        data-aos-delay="0">
                        <img src={require("../../Assets/Image/about_img.jpg")} alt="" className="team-image rounded-0" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About