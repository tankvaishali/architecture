import React from 'react'
import { HiOutlineArrowSmRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

function Bookappointment() {
  return (
    <>
      <div className="appointmentbg">
        <div className="py-5">
          <div className="container">
            <div className="row g-3">
              <div className="col-12  col-lg-4">
                <div className="h-100">
                  <div className="about-section  pt-4" data-aos="fade-up" data-aos-duration="1500">
                    <div className="line  "></div>
                    <span className=''>APPOINTMENT</span>
                  </div>
                  <h1 className="Discover text-dark py-3 " data-aos="fade-down" data-aos-duration="1500">Book Your Appointment Now !</h1>

                  <div className="py-3 pera" data-aos="zoom-in" data-aos-duration="1500">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo doloribus quam aperiam iure ratione expedita quidem harum necessitatibus, veniam sequi maiores magnam nostrum error. Porro provident vitae eius beatae explicabo.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo doloribus quam aperiam iure ratione expedita quidem harum necessitatibus, veniam sequi maiores magnam nostrum error. Porro provident vitae eius beatae explicabo.
                  </div>
                  <Link to={"/contactus"} className="text-decoration-none my-3">
                    <button
                      type="button"
                      data-aos="fade-left" data-aos-duration="1500"
                      className="bg_button text-white Inter fs-6 ps-4 pe-5 py-2 fw-bold  position-relative">
                      Contact Us
                      <span className="bg_iconbtn py-3 px-2 text-dark position-absolute end-0">
                        <HiOutlineArrowSmRight className="fs-5" />
                      </span>
                    </button>
                  </Link>

                </div>
              </div>
              <div className="col-12  col-lg-8">
                <div className="h-100">
                  <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2023/04/h8-images-05.png" alt="" className='img-fluid w-100 h-100 object-fit-cover' />
                  {/* <img src={require("../../Assets/Image/9e39a24a-0446-4597-8e6d-ca4476630d79_jpg-removebg-preview.png")} alt="" className='img-fluid w-100 h-100 object-fit-cover' /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bookappointment