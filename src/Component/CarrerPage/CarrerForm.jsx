import React from 'react'
import { AiFillMessage } from 'react-icons/ai'
import { BsFillFileImageFill, BsPhoneFill } from 'react-icons/bs'
import { HiOutlineArrowSmRight } from 'react-icons/hi'
import { IoMdMail, IoMdPerson } from 'react-icons/io'
import { MdOutlineSubject } from 'react-icons/md'
import { SiBuzzfeed } from 'react-icons/si'

function CarrerForm() {
    return (
        <>
            <div className='my-5'>
                <div className="container">
                    <div className='row'>
                        <div className='col-12 col-lg-10 mx-auto'>
                            <div className='d-lg-flex justify-content-between gap-4'>
                                <div className='w-100 w-lg-50'>
                                    <IoMdPerson className='fs-5' /> <label htmlFor="" className='ms-1'>Name</label>
                                    <input type="text" name='name' className='inpText w-100 d-block border border-dark border-1 px-3 py-2 shadow mt-1 mb-2' />
                                </div>
                                <div className='w-100 w-lg-50'>
                                    <IoMdMail className='fs-5' /> <label className='ms-1' htmlFor="">E-mail</label>
                                    <input type="email" name='email' className='inpText w-100 d-block border border-dark border-1 px-3 py-2 shadow mt-1 mb-2' />
                                </div>
                            </div>
                            <div className='d-lg-flex justify-content-between gap-4 py-3'>
                                <div className='w-100 w-lg-50'>
                                    <BsPhoneFill className='fs-5' /> <label className='ms-1' htmlFor="">Phone No.</label>
                                    <input type="number" name='phoneNo' className='inpText w-100 d-block border border-dark border-1 px-3 py-2 shadow mt-1 mb-2' />
                                </div>
                                <div className='w-100 w-lg-50'>
                                    <SiBuzzfeed className='fs-5' /> <label className='ms-1' htmlFor="">Experience</label>
                                    <input type="number" name='experience' className='inpText w-100 d-block border border-dark border-1 px-3 py-2 shadow mt-1 mb-2' />
                                </div>
                            </div>
                            <div className='d-lg-flex justify-content-between gap-4'>
                                <div className='w-100 w-lg-50'>
                                    <MdOutlineSubject className='fs-5' /> <label className='ms-1' htmlFor="">Subject</label>
                                    <input type="text" name='subject' className='inpText w-100 d-block border border-dark border-1 px-3 py-2 shadow mt-1 mb-2' />
                                </div>
                                <div className='w-100 w-lg-50'>
                                    <BsFillFileImageFill className='fs-5' /> <label className='ms-1' htmlFor="">Profile</label>
                                    <input type="file" name='profile' className='inpText w-100 d-block border border-dark border-1 px-3 py-2 shadow mt-1 mb-2' />
                                </div>
                            </div>
                            <div className='py-3'>
                                <AiFillMessage className='fs-5' /> <label className='ms-1' htmlFor="">Message</label>
                                <textarea name="message" className='inpText w-100 d-block border border-dark border-1 px-3 py-2 shadow mt-1 mb-2' id=""></textarea>
                            </div>

                            <div className='text-center py-3'>
                                <button
                                    type="button"
                                    className="bg_button Inter text-white fs-6 ps-4 pe-5 py-2 fw-bold position-relative">
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
        </>
    )
}

export default CarrerForm