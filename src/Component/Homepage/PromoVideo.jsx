import { Controls, Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { CiPlay1 } from 'react-icons/ci'
import { HiOutlineArrowSmRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

function PromoVideo() {
    return (
        <>
            <div>
                <div className='PromoVideo_bg  py-5 overflow-hidden'>
                    <div className='container py-0 py-lg-3'>
                        <div className='row p-2 p-lg-5 d-flex justify-content-center align-items-center align-content-center'>
                            <div className='col-12 col-lg-5 py-3'>
                                <div>
                                    <div
                                        className="about-section justify-content-start text-white"
                                        data-aos="fade-up"
                                        data-aos-duration="1800"
                                        data-aos-once="true"
                                    >
                                        <div className="line fw-bold" style={{ border: " 1px solid #acb8c5" }}></div>
                                        <span className="fw-bold" style={{ color: "#acb8c5" }}>PROMO VIDEO</span>
                                    </div>

                                    <h1 className="Discover text-white py-2" data-aos="fade-down" data-aos-duration="1800" data-aos-once="true">Ensuring A Safe Experience From Design To Installation</h1>
                                    <div className='text-white py-2'>
                                        We’re following all protocols to ensure your safety and vaccination drives are underway to ensure our employees are ready to meet you safely.
                                    </div>
                         <div className=' d-block d-lg-flex mt-1 '>
                         <div style={{width:80}}  data-aos="zoom-in"
              data-aos-duration="1800"
              data-aos-once="true" className='mt-3' >
                                      <img src={require("../../Assets/Image/phone_874555.png")} alt="" className='img-fluid w-100 h-100 animated-image' />

                                    </div>
                     
                                    <Link to={"tel:8153827482"} className="text-decoration-none ps-3"  data-aos="fade-right" 
             data-aos-delay="400"
              data-aos-duration="1800"
              data-aos-once="true"> <div className='whyno text-white' > 81538 27482</div></Link>
                         </div>

                                    {/* <div className="py-4">
                                        <button type="button" className="bg_button Inter text-white fs-6 ps-4 pe-5 py-2 fw-bold position-relative">
                                            More Videos
                                            <span className="bg_iconbtn py-3 px-2 text-dark position-absolute end-0">
                                                <HiOutlineArrowSmRight className="fs-5" />
                                            </span>
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                            <div className='col-12 col-lg-7 p-3' data-aos="fade-left" data-aos-duration="1800" data-aos-once="true">
                                <div className='video_image position-relative'>
                                    <img
                                        src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/About_09.jpg"
                                        className='img-fluid object-fit-cover'
                                        alt=""
                                    />
                                    <div className="play-icon-overlay d-flex justify-content-center align-items-center">
                                        <a
                                            href="https://www.youtube.com/watch?v=Z30Jk8QpAMI&t=20s"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="play-icon-wrapper d-flex justify-content-center align-items-center"
                                        >
                                            <CiPlay1 className="play_icon text-white fs-3" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PromoVideo