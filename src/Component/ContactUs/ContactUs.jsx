import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { IoMailOpenOutline } from 'react-icons/io5'
import contactVideo from "../../Assets/Video/contact_architecture.mp4";
import { BiPhoneCall } from 'react-icons/bi';
import { GrLocation } from 'react-icons/gr';
import "../../Assets/Css/ContactusPage.css";
import HOC from '../../HOC/HOC';
import { HiOutlineArrowSmRight } from 'react-icons/hi';

function ContactUs() {
    return (
        <>
            <div>
                <div className="container">
                    <div className='mx-auto py-5'>
                        <div className='contact_bg'>
                            <div className='row mx-auto'>
                                <div className='col-12 col-lg-6'>
                                    <h1 className='display-3 fw-bold pt-5'>Let's Talk</h1>
                                    <p>We welcome opportunities for collaboration. Please submit invitations, business proposals, or general inquiries.</p>
                                    <h5 className='fw-bold' style={{ paddingTop: "70px" }}>Call Us</h5>
                                    <div className='fw-bold fs-3'>+91 12345 67890</div>
                                    <div className='d-flex py-4'>
                                        <div className="icon-wrapper">
                                            <FaFacebookF className='fs-4 icon facebook' />
                                        </div>
                                        <div className='mx-2 icon-wrapper'>
                                            <BsInstagram className='fs-4 icon instagram' />
                                        </div>
                                        <div className='mx-2 icon-wrapper'>
                                            <FaLinkedinIn className='fs-4 icon linkedin' />
                                        </div>
                                        <div className='mx-2 icon-wrapper'>
                                            <FaTwitter className='fs-4 icon twitter' />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-lg-6 border border-2 border-dark rounded-4 p-3'>
                                    <div className='d-lg-flex justify-content-between gap-3 my-3'>
                                        <input type="text" name="firstname" id="" placeholder='First Name' className='w-100 w-md-50 w-lg-50  px-4 py-2 rounded-3' />
                                        <input type="text" name="lastname" id="" placeholder='Last Name' className='w-100 w-md-50 w-lg-50 px-4 py-2 rounded-3 my-3 my-lg-0' />
                                    </div>
                                    <div className='d-lg-flex justify-content-between gap-3 my-3'>
                                        <input type="text" name="companyemail" id="" placeholder='Company E-mail' className='w-100 w-md-50 w-lg-50 px-4 py-2 rounded-3' />
                                        <input type="text" name="companyname" id="" placeholder='Comapny Name' className='w-100 w-md-50 w-lg-50 px-4 py-2 rounded-3 my-3 my-lg-0' />
                                    </div>
                                    <div className='d-lg-flex justify-content-between gap-3 my-3'>
                                        <select name="industry" className='w-100 w-md-50 w-lg-50 px-4 py-2 rounded-3' id="">
                                            <option value="Industry">Industry</option>
                                            <option value="Consumer Goods">Consumer Goods</option>
                                            <option value="Education">Education</option>
                                            <option value="Energy">Energy</option>
                                            <option value="Entertainment">Entertainment</option>
                                            <option value="Finance">Finance</option>
                                            <option value="Government">Government</option>
                                            <option value="Healthcare">Healthcare</option>
                                            <option value="Media">Media</option>
                                            <option value="Non-Profit">Non-Profit</option>
                                            <option value="Professional Services">Professional Services</option>
                                            <option value="Real Estate/Developers">Real Estate/Developers</option>
                                            <option value="Retail">Retail</option>
                                            <option value="Technology">Technology</option>
                                            <option value="Transportation">Transportation</option>
                                        </select>
                                        <select name="companysize" className='w-100 w-md-50 w-lg-50 px-4 py-2 rounded-3 my-3 my-lg-0' id="">
                                            <option value="Company Size">Company Size</option>
                                            <option value="1-50 Employees">1-50 Employees</option>
                                            <option value="51-200 employees">51-200 employees</option>
                                            <option value="201-1,000 employees">201-1,000 employees</option>
                                            <option value="1,001-5,000 employees">1,001-5,000 employees</option>
                                            <option value="5,001+ employees">5,001+ employees</option>
                                        </select>
                                    </div>
                                    <div className='d-lg-flex justify-content-between gap-3 my-3'>
                                        <select name="role" className='w-100 w-md-50 w-lg-50 px-4 py-2 rounded-3' id="">
                                            <option value="Role">Role</option>
                                            <option value="Administrator">Administrator</option>
                                            <option value="C-Level/President/Owner">C-Level/President/Owner</option>
                                            <option value="Consultant">Consultant</option>
                                            <option value="Editor/Reporter/Writer">Editor/Reporter/Writer</option>
                                            <option value="Educator/Professor/Teacher">Educator/Professor/Teacher</option>
                                            <option value="General Manager/Director">General Manager/Director</option>
                                            <option value="Other">Other</option>
                                            <option value="Project Manager">Project Manager</option>
                                            <option value="Retired">Retired</option>
                                            <option value="Student/Intern">Student/Intern</option>
                                            <option value="Vice President/SVP/EVP">Vice President/SVP/EVP</option>
                                        </select>
                                        <input type="text" name="country" id="" placeholder='Country' className='w-100 w-md-50 w-lg-50 px-4 py-2 rounded-3 my-3 my-lg-0' />
                                    </div>
                                    <div className='d-lg-flex justify-content-between gap-3 my-3'>
                                        <input type="text" name="city" id="" placeholder='City' className='w-100 w-md-50 w-lg-50 px-4 py-2 rounded-3' />
                                        <select name="question" className='w-100 w-md-50 w-lg-50 px-4 py-2 rounded-3 my-3 my-lg-0' id="">
                                            <option value="I have a question about">I have a question about</option>
                                            <option value="Business Proposal">Business Proposal</option>
                                            <option value="General Inquiry">General Inquiry</option>
                                            <option value="Media Inquiry">Media Inquiry</option>
                                            <option value="Partnership (Consulting Services or Vendors)">Partnership (Consulting Services or Vendors)</option>
                                        </select>
                                    </div>
                                    <textarea name="message" rows={5} placeholder='Message' className='w-100 px-4 py-2 rounded-3 text-dark' id=""></textarea>
                                    <div className='text-center py-3'>
                                        <button
                                            type="button"
                                            className="bg_button text-white fs-6 ps-4 pe-5 py-2 fw-bold  position-relative"
                                        >
                                            Submit
                                            <span className="bg_iconbtn py-3 px-2 text-dark position-absolute end-0">
                                                <HiOutlineArrowSmRight className="fs-5" />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact_location mb-5">
                    <video autoPlay loop muted>
                        <source src={contactVideo}></source>
                    </video>
                    <div className="video-overlay">
                        <div className='container'>
                            <div className='main_box row'>
                                <div className='col-12 col-md-6 col-lg-4'>
                                    <div className='bg-item_contact py-5 rounded-4 mb-3 vh-'>
                                        <div className='text-white text-center'>
                                            <div>
                                                <BiPhoneCall className='fs-1' />
                                            </div>
                                            <h3 className='py-3'>Call Us</h3>
                                            <div>+91 12345 67890</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-md-6 col-lg-4'>
                                    <div className='bg-item_contact py-5 rounded-4 mb-3 vh-'>
                                        <div className='text-white text-center'>
                                            <div>
                                                <GrLocation className='fs-1' />
                                            </div>
                                            <h3 className='py-3'>Location</h3>
                                            <div className='p-1'>56 Tulip Terrace, 1023 EF Amsterdam, Netherlands</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-md-6 col-lg-4'>
                                    <div className='bg-item_contact py-5 rounded-4 mb-3 vh-'>
                                        <div className='text-white text-center'>
                                            <div>
                                                <IoMailOpenOutline className='fs-1' />
                                            </div>
                                            <h3 className='py-3'>E-mail</h3>
                                            <div>abc@gmail.com</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className='w-100 my-5'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.6435468552745!2d72.83498737380307!3d21.206314581659342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fab21103b69%3A0xa299912d3085be89!2sASHUTOSH%20PROSTHETICS%20%26%20ORTHOTICS%20CENTER!5e0!3m2!1sen!2sus!4v1718857447832!5m2!1sen!2sus"
                            height="450"
                            width="100%"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            title=""
                        ></iframe>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HOC(ContactUs)