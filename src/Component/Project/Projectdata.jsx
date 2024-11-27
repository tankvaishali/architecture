import React from 'react'
import HOC from '../../HOC/HOC'
import { ProjectList } from './ProjectListItem'
import { Link } from 'react-router-dom'
import ArchitectureDesign from '../Homepage/ArchitectureDesign'

import { Card } from 'react-bootstrap'
import '../../Assets/Css/Project.css'
import ClientLogo from '../Homepage/ClientLogo'
import { CgArrowTopRightO } from 'react-icons/cg'
import { TbCircleArrowUpRightFilled } from 'react-icons/tb'

function Projectdata() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <>

      <div className="container my-5 py-3">
        {/* <Slider {...settings}> */}
       
          <div className="row g-5 ">
            {ProjectList.map((item, i) => (
              // <div key={i} className="col-lg-4 col-md-6 col-sm-6 ">
              //   <div className="col-md-10  col-sm-12 col-11 project-item mx-auto mt-2 ">
              //     <Link to={`/project/${item.id}`}>
              //       <Card className="shadow-sm border-0">
              //         <Card.Img variant="top" src={item.image} alt="Project Image" />
              //         <Card.Body className='cardname_hover'>
              //           <p className='mb-0'>{item.name}</p>
              //         </Card.Body>
              //       </Card>
              //     </Link>
              //   </div>
              // </div>
              <>
           
                <div className="col-12 col-md-6 col-lg-4 " key={i}>
                <Link to={`/project/${item.id}  `}>
                    <Card className="shadow border-0 project-item">
                      <Card.Img variant="top" src={item.image} alt="Project Image" />
                      <Card.Body className='cardname_hover'>
                        <p className='mb-0'>{item.name} <span className='fs-2 fw-bold ps-2'><TbCircleArrowUpRightFilled  /></span></p>
                      </Card.Body>
                    </Card>
                  </Link>
                </div>
            
              </>
            ))}
          </div>
        </div>
        <ClientLogo/>
        {/* {ProjectList.map((item, i) => (
            <div key={i} className="project-item">
              <Link to={`/project/${item.id}`}>
                <Card className="shadow-sm border-0">
                  <Card.Img variant="top" src={item.image} alt="Project Image" />
                  <Card.Body className='cardname_hover'>
                    <p>{item.name}</p>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))} */}
        {/* </Slider> */}
 

    </>
  )
}

export default HOC(Projectdata)
