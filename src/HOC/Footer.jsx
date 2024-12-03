import { Plus } from 'lucide-react'
import React from 'react'
import { IoLocation, IoMail } from 'react-icons/io5'
import { PiPhoneCallFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>

            <div class="container my-4">
                <div class="accordion row text-center" id="footerAccordion">

                    <div class="accordion-item border-0 col-lg-3 col-12">
                        <h2 class="accordion-header" id="headingEmail">
                            <button class="accordion-button text-lg fw-normal bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEmail" aria-expanded="true" aria-controls="collapseEmail">
                                OUR LINKS <Plus className='mx-3' width={16} height={16} />
                            </button>
                        </h2>
                        <div id="collapseEmail" class="accordion-collapse collapse" aria-labelledby="headingEmail" data-bs-parent="#footerAccordion">
                            <div class="accordion-body">
                                <div class="list-group">
                                    <div className='text-start'>
                                        <Link to={"/"} className='text-decoration-none'><span class="text-secondary footerTittle">Home</span></Link>
                                    </div>
                                    <div className='text-start'>
                                        <Link to={"/aboutus"} className='text-decoration-none'><span class="text-secondary footerTittle">About Us</span></Link>
                                    </div>
                                    <div className='text-start'>
                                        <Link to={"/project"} className='text-decoration-none'><span class="text-secondary footerTittle">projects</span></Link>
                                    </div>
                                    <div className='text-start'>
                                        <Link to={"/carrer"} className='text-decoration-none'><span class="text-secondary footerTittle">Career</span></Link>
                                    </div>
                                    <div className='text-start'>
                                        <Link to={"/contactus"} className='text-decoration-none'><span class="text-secondary footerTittle">Contact Us</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item border-0 col-lg-3 col-12">
                        <h2 class="accordion-header" id="headingOffices">
                            <button class="accordion-button collapsed text-lg fw-normal bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOffices" aria-expanded="false" aria-controls="collapseOffices">
                                PROJECTS <Plus className='mx-3' width={16} height={16} />
                            </button>
                        </h2>
                        <div id="collapseOffices" class="accordion-collapse collapse" aria-labelledby="headingOffices" data-bs-parent="#footerAccordion">
                            <div class="accordion-body">
                                <div class="list-group">
                                    <div class="text-start">
                                        <Link to={"/project/commercial"} className='text-decoration-none'><span class="text-secondary footerTittle">Commercial</span></Link>
                                    </div>
                                    <div class="text-start">
                                        <Link to={"/project/residental"} className='text-decoration-none'><span class="text-secondary footerTittle">Residential</span></Link>
                                    </div>
                                    <div class="text-start">
                                        <Link to={"/project/hospitality"} className='text-decoration-none'><span class="text-secondary footerTittle">Hospitality</span></Link>
                                    </div>
                                    <div class="text-start">
                                        <Link to={"/project/interior_design"} className='text-decoration-none'><span class="text-secondary footerTittle">Interior Design</span></Link>
                                    </div>
                                    <div class="text-start">
                                        <Link to={"/project/upcoming"} className='text-decoration-none'><span class="text-secondary footerTittle">Upcoming</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item border-0 col-lg-3 col-12">
                        <h2 class="accordion-header" id="headingSocial">
                            <button class="accordion-button collapsed text-lg fw-normal bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSocial" aria-expanded="false" aria-controls="collapseSocial">
                                CONTACT US <Plus className='mx-3' width={16} height={16} />
                            </button>
                        </h2>
                        <div id="collapseSocial" class="accordion-collapse collapse" aria-labelledby="headingSocial" data-bs-parent="#footerAccordion">
                            <div class="accordion-body">
                                <Link onClick={() => {
                                    window.open("https://www.google.com/maps/place/Mindscape+Design/@21.1759921,72.804965,17z/data=!3m1!4b1!4m6!3m5!1s0x3be04d6d455da8af:0x9f1037b31fab7bd1!8m2!3d21.1759921!4d72.804965!16s%2Fg%2F11fmz05skp?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D", "_blank");
                                }} target="_blank" rel="noopener noreferrer" className="text-decoration-none" >
                                    <div className='d-flex text-secondary footerTittle text-start'>
                                        <div><IoLocation /></div>
                                        <span className='ms-2'>3rd Floor, Evoq, Ghod Dod Rd, opp. Narmad Library, Surat-395007</span>
                                    </div>
                                </Link>
                                <Link to={"tel:+91 98243 31155"} className='text-decoration-none'>
                                    <div className='d-flex text-secondary footerTittle'>
                                        <div><PiPhoneCallFill /></div>
                                        <span className='ms-2'>+91 98243 31155</span>
                                    </div>
                                </Link>
                                <Link to={"mailto:contact@mindscapedesign.co.in"} className='text-decoration-none'>
                                    <div className='d-flex text-secondary footerTittle'>
                                        <div><IoMail /></div>
                                        <span className='ms-2'>contact@mindscapedesign.co.in</span>
                                    </div>
                                </Link>
                                <Link to={"mailto:mindscapedesign2018@gmail.com"} className='text-decoration-none'>
                                    <div className='d-flex text-secondary footerTittle'>
                                        <div><IoMail /></div>
                                        <span className='ms-2'>mindscapedesign2018@gmail.com</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item border-0 col-lg-3 col-12">
                        <h2 class="accordion-header" id="headingLegal">
                            <button class="accordion-button collapsed text-lg fw-normal bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLegal" aria-expanded="false" aria-controls="collapseLegal">
                                ABOUT COMPANY <Plus className='mx-3' width={16} height={16} />
                            </button>
                        </h2>
                        <div id="collapseLegal" class="accordion-collapse collapse" aria-labelledby="headingLegal" data-bs-parent="#footerAccordion">
                            <div class="accordion-body">
                                <div className='text-secondary text-start'>
                                    <div>CELL NO.- +91 9825541155</div>
                                    <Link to={"mailto:mindscapedesign2018@gmail.com"} className='text-decoration-none'>
                                        <div className='d-flex footerTittle text-secondary'>
                                            <div><IoMail className='me-2' /></div><span>mindscapedesign2018@gmail.com</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer