import React from 'react'
import { FaQuoteRight } from 'react-icons/fa'

function Testimonial() {
    let testimonialdata=[
        {
            img:"https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/rev_home1_1.jpg",
            name:"jdsaihnnw hniiuo",
            tittle:"uhyihik",
            pera:"https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/rev_home1_1.jpghttps://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/rev_home1_1.jpghttps://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/rev_home1_1.jpg"
        },
        {
            img:"https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/rev_home1_1.jpg",
            name:"jdsaihnnw hniiuo",
            tittle:"uhyihik",
            pera:"https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/rev_home1_1.jpghttps://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/rev_home1_1.jpghttps://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/rev_home1_1.jpg"
        }
    ]
  return (
   <>
   <div className="py-3" style={{marginTop:200}}>
    <div className="container">
 <div className="testimonialbg p-5">
 {  testimonialdata.map((x,i)=>{
return(
    <>
      <div className="row g-4 rowmargine" >
            <div className="col-12 col-lg-6 order-1
             order-lg-0">

                <div className="h-100">
                    <div className=' p-0 p-lg-5 pb-lg-3'>
                        <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/rev_home1_1.jpg" alt="" className='img-fluid' />
                    </div>
                    <div className='text-center text-white fs-5 fw-bold py-2'>{x.name}</div>
                    <div className='text-center text-white py-2'>{x.tittle}</div>
                </div>
            </div>
            <div className="col-12 col-lg-6 order-0 order-lg-1">
                <div className="h-100">
                <div class="about-section">
                  <div class="line"></div>
                  <span>Testimonial</span>
                </div>
                <h1 class=" Discover  text-dark py-2">WHAT OUR CLIENT SAYS</h1>
                    <div className='p-4'>
                        <div className='text-white fs-2'>
                            <FaQuoteRight/>
                        </div>
                        <div className='text-white fs-5 pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio esse cum corrupti maiores odit. Libero odio alias consequatur nemo quasi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio esse cum corrupti maiores odit. Libero odio alias consequatur nemo quasi.</div>
                    </div>
                </div>
            </div>
        </div>
    </>
)
      })}
 </div>
    </div>
   </div>
   </>
  )
}

export default Testimonial