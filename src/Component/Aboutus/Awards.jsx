import React from 'react'

function Awards() {
    let awardData=[
        {
            img:"https://www.mindscapedesign.co.in/icon/big_img/IMG_6243257.jpeg",
            name:"S P Shah",
            year:"2011-12",
            pera:"Most Innovative Scalable & Sustainable Green Building Architect In India",
        },
        {
            img:"https://www.mindscapedesign.co.in/icon/big_img/IMG_6243257.jpeg",
            name:"Asian Star ",
            year:"2013-14",
            pera:"Most Innovative Scalable & Sustainable Green Building Architect In India",
        },
        {
            img:"https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/rev_home1_1.jpg",
            name:"Pride Bharat Award ",
            year:"2023",
            pera:"Most Innovative Scalable & Sustainable Green Building Architect In India",
        },
    ]
  return (
<>
<div className='py-5 awardbg '>

    <div className="container">
        <div className="py-3 py-lg-5">
        <div className="about-section justify-content-center">
                                    <div className="line  "></div>
                                    <span className=' '>HOW WE WORK</span>
                                </div>
                                <h1 className="Discover text-dark py-3 text-center">Our easy steps to get interior design</h1>
        </div>
        {
            awardData.map((x,i)=>{
                return(
                    <>
                    <div className="row g-3 border-top border-1 border-secondary-subtle py-3 ">
<div className="col-2">
    <div className="h-100 fw-bold fs-5 theme">{x.year}</div>
</div>
<div className="col-3">
    <div className="h-100 fw-bold">{x.name}</div>
</div>
<div className="col-4">
    <div className="h-100 pera">{x.pera}</div>
</div>
<div className="col-3">
    <div className="h-100 text-center"><img src={x.img} alt="" className='img-fluid object-fit-cover' width={60} height={60} /></div>
</div>
</div> 
                    </>
                )
            })
        }
       
    </div>
</div>
</>
  )
}

export default Awards