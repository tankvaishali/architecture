import React from "react";
import CountUp from "react-countup";

function Aboutus() {
  return (
    <>
      <div className="aboutusbg">


        <div className="container py-3 overflow-hidden">
          <div className="py-5">
            <div className="row g-5">
              <div className="col-12 col-lg-5 " data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
                <div style={{ height: 460 }} className="border border-white p-4" >
                  <img
                    src="https://www.mindscapedesign.co.in/page/big_img/founder2526.jpeg"
                    alt=""
                    className="img-fluid w-100 h-100 object-fit-cover"
                  />
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <div className="h-100">
                  <div class="about-section " data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                    <div class="line" style={{color:"#acb8c5",borderBlockColor:"#acb8c5"}}></div>
                    <span className=" fw-medium" style={{color:"#acb8c5"}}>ABOUT US</span>
                  </div>
                  <h1 class=" Discover  text-white py-2" data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">Mr. Hiten Patel</h1>
                  <div className="pera" style={{color:"#acb8c5"}} data-aos="fade-left" data-aos-duration="1500" data-aos-once="true">
                    Founded by Hiten Patel, and located in the vibrant city of
                    Surat, Mindscape Design is a pioneering firm in Architecture,
                    Interior Design, Landscape, and beyond. With over 24 years of
                    experience, we have developed a diverse portfolio encompassing
                    various projects in India and abroad, including residential
                    and commercial spaces, corporate offices, hospitality
                    projects, and country homes. We have always focused on
                    creating architecture that is Sustainable, Innovative, and
                    prioritizes a User-Centric approach. Each project we undertake
                    reflects our commitment not only to our client's visions but
                    also to creating a more sustainable future.
                  </div>
                  <div className="pera pt-3" style={{color:"#acb8c5"}} data-aos="fade-left" data-aos-duration="1500" data-aos-once="true">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque totam repellat eaque voluptas quos excepturi quisquam quod pariatur sapiente, veniam cum. Aut praesentium consectetur perferendis voluptates. 
                  </div>
                </div>
              </div>
            </div>

            <div className="counterset">
              <div class="row  my-3 ">
                <div className="col-md-3 d-none d-lg-block"></div>
                <div class="col-md-3 mt-4 mt-md-0  " data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                  <div class="stat-item noshadow bg-white p-4 rounded-4 text-center" >
                    <div class="stat-number fw-bold"><CountUp end={920} enableScrollSpy={true} /> +</div>
                    <div class="stat-label fw-bold">Active Members</div>
                  </div>
                </div>
                <div class="col-md-3 mt-4 mt-md-0  " data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400" data-aos-once="true" >
                  <div class="stat-item noshadow bg-white p-4 rounded-4 text-center">
                    <div class="stat-number fw-bold"><CountUp end={780} enableScrollSpy={true} /> +</div>
                    <div class="stat-label fw-bold">Winning Award</div>
                  </div>
                </div>
                <div class="col-md-3 mt-4 mt-md-0 " data-aos="fade-up" data-aos-duration="1500" data-aos-delay="800" data-aos-once="true"  >
                  <div class="stat-item noshadow bg-white p-4 rounded-4 text-center" >
                    <div class="stat-number fw-bold"><CountUp end={560} enableScrollSpy={true} /> +</div>
                    <div class="stat-label fw-bold">Happy Patient</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
