import React from "react";
import CountUp from "react-countup";

function Aboutus() {
  return (
    <>
    <div className="aboutusbg">


      <div className="container py-3 overflow-hidden">
        <div className="py-5">
          <div className="row g-5">
            <div className="col-12 col-lg-6">
              <div style={{height:460}}>
                <img
                  src="https://www.mindscapedesign.co.in/page/big_img/founder2526.jpeg"
                  alt=""
                  className="img-fluid w-100 h-100 object-fit-contain"
                />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="h-100">
                <div class="about-section">
                  <div class="line"></div>
                  <span>ABOUT US</span>
                </div>
                <h1 class=" Discover  text-dark py-2">Mr. Hiten Patel</h1>
                <div className="pera">
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
              </div>
            </div>
          </div>

     <div className="counterset">
     <div class="row  my-3 justify-content-center">
            <div className="col-md-3 d-none d-lg-block"></div>
            <div class="col-md-3">
              <div class="stat-item bg-white p-4 rounded-4 text-center border-top border-4 border-secondary shadow-sm">
                <div class="stat-number fw-medium"><CountUp  end={920} enableScrollSpy={true}/>+</div>
                <div class="stat-label">Active Members</div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="stat-item bg-white p-4 rounded-4 text-center border-top border-4 border-secondary shadow-sm">
                <div class="stat-number fw-medium"><CountUp  end={780} enableScrollSpy={true}/>+</div>
                <div class="stat-label">Winning Award</div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="stat-item bg-white p-4 rounded-4 text-center border-top border-4 border-secondary shadow-sm">
                <div class="stat-number fw-medium"><CountUp  end={560} enableScrollSpy={true}/>+</div>
                <div class="stat-label">Happy Patient</div>
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
