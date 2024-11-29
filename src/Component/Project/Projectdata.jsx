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
        <div className="row g-5 ">
          {ProjectList.map((item, i) => (
            <>
              <div className="col-12 col-md-6 col-lg-4 " key={i}>
                <Link to={`/project/${item.id}  `}>
                  <Card className="shadow border-0 project-item">
                    <Card.Img variant="top" src={item.image} alt="Project Image" />
                    <Card.Body className='cardname_hover'>
                      <p className='mb-0'>{item.name} <span className='fs-2 fw-bold ps-2'><TbCircleArrowUpRightFilled /></span></p>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
      <ClientLogo />
    </>
  )
}

export default HOC(Projectdata)
