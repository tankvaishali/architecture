import React from 'react'
import { HiOutlineArrowSmRight } from 'react-icons/hi'

function About() {
    return (
        <>
            <div className="about-company my-5 d-flex align-items-center p-0 p-lg-5">
                <div className="container main_aboutSec d-flex align-items-center justify-content-center p-4">
                    <div className="content p-0 p-lg-4">
                        <div className="about-section text-dark">
                            <div className="line border border-1 border-dark"></div>
                            <span>Get to know us</span>
                        </div>
                        <h1 className="text-white py-2 display-5" style={{ letterSpacing: "1px" }}>
                            About Company
                        </h1>
                        <p style={{ color: "rgba(245, 245, 245, 0.523)" }}>
                            Architecture the inila duman aten elit finibus vivera alacus company
                            design drudean seneice muiscibe noneten the fermen. The design
                            architecture duiman finibus viverra nec a lacus drudeane sene voice
                            fermen.
                        </p>
                        <p style={{ color: "rgba(245, 245, 245, 0.523)" }}>
                            Design architecture duiman et elit finibus viverra nec a lacus vivento
                            nuse ane sene voice the volume the miss drana inc fermen.
                        </p>
                        <div className="py-3">
                            <button type="button" className="bg_button Inter text-white fs-6 ps-4 pe-5 py-2 fw-bold position-relative">
                                About Us
                                <span className="bg_iconbtn py-3 px-2 text-dark position-absolute end-0">
                                    <HiOutlineArrowSmRight className="fs-5" />
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="image_about">
                        <img src={require("../../Assets/Image/about_img.jpg")} alt="" className="team-image" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About