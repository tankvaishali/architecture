import React from "react";

function Mission() {
  let missiondata = [
    {
      id: "01",
      name: "Quality",
      pera: "We prioritize delivering high-quality services to exceed our clients' expectations.We prioritize delivering high-quality services to exceed our clients' expectations.",
      aos: "fade-right",
    },
    {
      id: "02",
      name: "Sustainability",
      pera: "We incorporate environmental-friendly practices and strive for long-term sustainability.",
      aos: "flip-up",
    },
    {
      id: "03",
      name: "Continous Improvement",
      pera: "We commit to ongoing enhancement and refinement in all aspects of our operations.",
      aos: "fade-left",
    },
    {
      id: "04",
      name: "Professionalism",
      pera: "We maintain a high level of professionalism in our interaction, actions, and work ethics.",
      aos: "fade-right",
    },
    {
      id: "05",
      name: "Customer Satisfaction",
      pera: "We aim to consistently meet and surpass our clients' needs and desires.",
      aos: "flip-up",
    },
    {
      id: "06",
      name: "Empower Transformation",
      pera: "Massa odio interdum quisque massa ut mattis eget. Rhoncus sed convallis nulla sit facilisis vitae id lacus pharetra.",
      aos: "fade-left",
    },
  ];
  return (
    <>
      <div className="missionbg">
        <div className="py-4">
          <div className="container py-3 py-lg-5 overflow-hidden">
            <div
              class="about-sectionbck"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <span>OUR MISSON</span>
              <div class="linebck"></div>
            </div>
            <h1
              class=" Discover  text-white py-2"
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              Designing inspiring and enduring spaces is our mission .
            </h1>

            <div className="row g-5 pt-0 pt-lg-4 overflow-hidden">
              {missiondata.map((x, i) => {
                return (
                  <>
                    <div
                      className="col-12 col-md-6 col-lg-4 pt-3"
                      data-aos={x.aos}
                      data-aos-duration="1500"
                      data-aos-once="true"
                      key={x.id}
                    >
                      <div class="about-section missionno  ">
                        <div>{x.id}</div>
                        <div class="line"></div>
                      </div>
                      <h3 className="text-white py-1 ">{x.name}</h3>
                      <div
                        className="pera py-2 pt-1 32"
                        style={{ color: "rgb(184, 184, 184)" }}
                      >
                        {x.pera}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mission;
