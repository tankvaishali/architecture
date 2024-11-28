import React from "react";
import { AiFillMessage } from "react-icons/ai";
import { BsFillFileImageFill, BsPhoneFill } from "react-icons/bs";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { IoMdMail, IoMdPerson } from "react-icons/io";
import { MdOutlineSubject } from "react-icons/md";
import { SiBuzzfeed } from "react-icons/si";
import videolink from "../../Assets/Video/3135929-hd_1920_1080_25fps.mp4"

function CarrerForm() {
  return (
    <>
      <div className="my-5">
        <div className="carrer_form_bg p-0 p-lg-5">
          <video
            className="carrer_video_bg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videolink} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="container">
            <div className="row p-4">
              <div className="col-12 col-lg-10 mx-auto">
                <div className="d-lg-flex justify-content-between gap-4">
                  <div
                    className="w-100 w-lg-50"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    data-aos-once="true"
                  >
                    <IoMdPerson className="fs-4 fw-bold text-white" />{" "}
                    <label htmlFor="" className="ms-1 fw-bold text-white fs-6">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="inpText text-white w-100 d-block px-3 py-2 shadow  my-2"
                    />
                  </div>
                  <div
                    className="w-100 w-lg-50"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    data-aos-once="true"
                  >
                    <IoMdMail className="fs-4 fw-bold text-white" />{" "}
                    <label className="ms-1 fw-bold text-white fs-6" htmlFor="">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="inpText text-white w-100 d-block px-3 py-2 shadow my-2"
                    />
                  </div>
                </div>
                <div className="d-lg-flex justify-content-between gap-4 py-3">
                  <div
                    className="w-100 w-lg-50"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    data-aos-once="true"
                    data-aos-delay="400"
                  >
                    <BsPhoneFill className="fs-4 fw-bold text-white" />{" "}
                    <label className="ms-1 fw-bold text-white fs-6" htmlFor="">
                      Phone No.
                    </label>
                    <input
                      type="number"
                      name="phoneNo"
                      className="inpText text-white w-100 d-block px-3 py-2 shadow my-2"
                    />
                  </div>
                  <div
                    className="w-100 w-lg-50"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    data-aos-once="true"
                    data-aos-delay="400"
                  >
                    <SiBuzzfeed className="fs-4 fw-bold text-white" />{" "}
                    <label className="ms-1 fw-bold text-white fs-6" htmlFor="">
                      Experience
                    </label>
                    <input
                      type="number"
                      name="experience"
                      className="inpText text-white w-100 d-block px-3 py-2 shadow my-2"
                    />
                  </div>
                </div>
                <div className="d-lg-flex justify-content-between gap-4">
                  <div
                    className="w-100 w-lg-50"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    data-aos-once="true"
                    data-aos-delay="600"
                  >
                    <MdOutlineSubject className="fs-4 fw-bold text-white" />{" "}
                    <label className="ms-1 fw-bold text-white fs-6" htmlFor="">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      className="inpText text-white w-100 d-block px-3 py-2 shadow my-2"
                    />
                  </div>
                  <div
                    className="w-100 w-lg-50"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    data-aos-once="true"
                    data-aos-delay="600"
                  >
                    <BsFillFileImageFill className="fs-4 fw-bold text-white" />{" "}
                    <label className="ms-1 fw-bold text-white fs-6" htmlFor="">
                      Profile
                    </label>
                    <input
                      type="file"
                      name="profile"
                      className="inpText text-white w-100 d-block px-3 py-2 shadow my-2"
                    />
                  </div>
                </div>
                <div
                  className="py-3"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  data-aos-once="true"
                  data-aos-delay="800"
                >
                  <AiFillMessage className="fs-4 fw-bold text-white" />{" "}
                  <label className="ms-1 fw-bold text-white fs-6" htmlFor="">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="inpText text-white w-100 d-block px-3 py-4 shadow my-2"
                    id=""
                  ></textarea>
                </div>

                <div
                  className="text-center py-3"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  data-aos-once="true"
                  data-aos-delay="1000"
                >
                  <button
                    type="button"
                    className="bg_button Inter text-white fs-6 ps-4 pe-5 py-2 fw-bold text-white position-relative"
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
    </>
  );
}

export default CarrerForm;
