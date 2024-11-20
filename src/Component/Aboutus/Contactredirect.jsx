import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function Contactredirect() {
  return (
    <>
      <div className="contactredirectbg ">
        <div className="py-3 py-lg-5">
          <div
            className="container py-3 py-lg-5 text-center my-2"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <div className="about-section justify-content-center">
              <div className="line  "></div>
              <span className="fw-bold fs-5 " style={{color:"#acb8c5"}}>
                YOUR BEST CHOICE
              </span>
            </div>

            <div className="stroktext  py-3">
              Let's start your new dream project
            </div>
            <div className="text-center py-3">
              <Link to={"/contactus"} className="text-decoration-none">
                <button
                  type="button"
                  className="bg_button text-white Inter fs-6 ps-4 pe-5 py-2 fw-bold  position-relative"
                >
                  Contact Us
                  <span className="bg_iconbtn py-3 px-2 text-dark position-absolute end-0">
                    <HiOutlineArrowSmRight className="fs-5" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactredirect;
