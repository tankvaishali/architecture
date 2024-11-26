import React from "react";
import CountUp from "react-countup";

function Quality() {
  return (
    <div className="quality_bg my-5">
      <div className="container py-5 ">
        <div className="row p-2 p-lg-5 d-flex justify-content-center align-items-center align-content-center">
          <div className="col-12 col-md-7 col-lg-8 p-4">
            <div
              className="about-section justify-content-start text-white"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-once="true"
            >
              <div className="line fw-bold" style={{ border:" 1px solid #acb8c5"}}></div>
              <span className="fw-bold" style={{color:"#acb8c5"}}>QUALITY OF WORK</span>
            </div>
            <h1
              className="Discover text-white pt-3"
              data-aos="fade-down"
              data-aos-duration="1800"
              data-aos-once="true"
            >
              Milestones That We Proudly Accomplished & Lead Us Forward.
            </h1>
          </div>
          <div
            className="col-12 col-md-5 col-lg-4 p-4"
            data-aos="zoom-in"
            data-aos-duration="1800"
            data-aos-once="true"
          >
            <div className="d-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <div className="border-end border-bottom border-white py-3 text-center">
                <h1
                  className="text-white fw-bold"
                  style={{ letterSpacing: "2px" }}
                >
                  <CountUp end={25} enableScrollSpy={true} /> +
                </h1>
                <div className="text-white">Interior Design</div>
              </div>
              <div className="border-bottom border-white text-center py-3">
                <h1
                  className="text-white fw-bold"
                  style={{ letterSpacing: "2px" }}
                >
                  {" "}
                  <CountUp end={93} enableScrollSpy={true} /> +
                </h1>
                <div className="text-white">Architecture</div>
              </div>
              <div className="border-end border-white py-3 text-center">
                <h1
                  className="text-white fw-bold"
                  style={{ letterSpacing: "2px" }}
                >
                  {" "}
                  <CountUp end={48} enableScrollSpy={true} /> +
                </h1>
                <div className="text-white">Construction</div>
              </div>
              <div className="text-center py-3">
                <h1
                  className="text-white fw-bold"
                  style={{ letterSpacing: "2px" }}
                >
                  {" "}
                  <CountUp end={68} enableScrollSpy={true} /> +
                </h1>
                <div className="text-white">Projects Done</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quality;
