import React from 'react'
import Slider from 'react-slick';

function Services() {

   let servicedata=[
        {
            icon:"s",
            name:"ujnhuijni",
            pera:"ssssssssssssssssssssssssss",
        },
        {
            icon:"s",
            name:"ujnhuijni",
            pera:"ssssssssssssssssssssssssss",
        },
        {
            icon:"s",
            name:"ujnhuijni",
            pera:"ssssssssssssssssssssssssss",
        },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        arrows: false,
        dots: false,
     
        responsive: [
            {
              breakpoint: 1024,
              settings: { slidesToShow: 2 },
            },
            {
              breakpoint: 991,
              settings: { slidesToShow: 1 },
            },
            {
              breakpoint: 480,
              settings: { slidesToShow: 1 },
            },
          ],
    };

  return (
   <>
<div className="servicesbg" style={{marginTop:250}}>
    <div className="py-5">
        <div className="container">
            <div className="row g-3 servicesrow pt-3" style={{marginTop:"-230px"}}>
                <div className="col-12 col-lg-6 pt-5 px-0">
<div className="h-100">
   <div className="serviceimage">
   <img src={require("../../Assets/Image/9e39a24a-0446-4597-8e6d-ca4476630d79_jpg-removebg-preview hd.png")} alt="" className='img-fluid' />
   </div>
</div>

                </div>
                <div className="col-12 col-lg-6 pt-5 p-4">
<div className="h-100">

                                    <div className="about-section text-white">
                                        <div className="line border-white"></div>
                                        <span>OUR SERVICES</span>
                                    </div>
                                    <h1 className="Discover text-white py-2">Home Space Transform Your Home with Expert Design</h1>
<div className="pera text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum possimus nesciunt, expedita ullam nam excepturi dolorum maiores atque inventore, at non hic dolor officiis dignissimos deleniti omnis doloribus in delectus? expedita ullam nam excepturi dolorum maiores atque inventore, at non hic dolor officiis dignissimos deleniti omnis doloribus in delectus?</div>
</div>

                </div>
            </div>
            <div className="row g-3">
<div className="col-3">
<div className="h-100">

</div>
</div>
<div className="col-9">
<div className="h-100">
    <Slider {...settings} className='p-0 m-0'>
{
    servicedata.map((x,i)=>{
        return(

            <>
            <div className='h-100 bg-white'>
<div>{x.icon}</div>
<div>{x.name}</div>
<div>{x.pera}</div>
            </div>
            </>
        )
    })
}
    </Slider>
</div>
</div>
            </div>
        </div>
    </div>
</div>
   </>
  )
}

export default Services