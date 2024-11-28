import React from 'react'

function MainHeadings(props) {
    console.log(props);
    
    return (
        <div>
                                 <div class="about-section " data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                    <div class="line" style={{color:"rgb(90, 113, 124)",borderBlockColor:"rgb(90, 113, 124)"}}></div>
                    <span className="fw-medium " style={{color:"rgb(90, 113, 124)"}}>{props.name}</span>
                  </div>
                  <h1 class=" Discover text-dark py-2 text-capitalize" data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">{props.title}</h1>
            </div>
    )
}

export default MainHeadings