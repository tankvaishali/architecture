import React from 'react'
import { HiOutlineArrowSmRight } from 'react-icons/hi'

function Contactredirect() {
  return (
 <>
 <div className="contactredirectbg">
<div className="py-3 py-lg-5">
    <div className="container py-3 py-lg-5 text-center">
    <div className="about-section justify-content-center">
                                    <div className="line  "></div>
                                    <span className='fw-bold fs-5 text-secondary-subtle'>YOUR BEST CHOICE</span>
                                </div>
                            
        <div className='stroktext  py-3'>Let's start your new dream project</div>
        <div className='text-center py-3'>
                                <button
                                    type="button"
                                    className="bg_button text-white Inter fs-6 ps-4 pe-5 py-2 fw-bold  position-relative">
                                    Submit
                                    <span className="bg_iconbtn py-3 px-2 text-dark position-absolute end-0">
                                        <HiOutlineArrowSmRight className="fs-5" />
                                    </span>
                                </button>
                            </div>
    </div>
</div>

 </div>
 </>
  )
}

export default Contactredirect