import React from 'react'

function Mission() {
    let missiondata=[
        {
            id:"01",
            name:"Quality",
            pera:"We prioritize delivering high-quality services to exceed our clients' expectations.",

        }
    ]
  return (

<>
<div className="missionbg">
    <div className="py-4">
        <div className="container py-3 py-lg-5">
        <div class="about-sectionbck">
                  <span>OUR MISSON</span>
                  <div class="linebck"></div>
                </div>
                <h1 class=" Discover  text-white py-2">Mr. Hiten Patel</h1>

                <div className="row g-3">
{
    missiondata.map((x,i)=>{
        return(
            <>
             <div className="col-12 col-md-6 col-lg-4" key={x.id}>
             <div class="about-section missionno  ">
                  <h4>{x.id}</h4>
                  <div class="line"></div>
                </div>
</div>
            </>
        )
    })
}
                   
                </div>
        </div>
    </div>
</div>
</>)
}

export default Mission