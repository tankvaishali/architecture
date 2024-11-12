import React from 'react'
import { MdDoubleArrow } from 'react-icons/md'

function CarrerIntro() {
    return (
        <>
            <div>
                <div className='carrer_bgimg'>
                    <div className='container py-5'>
                        <div className="about-section justify-content-center">
                            <div className="line  "></div>
                            <span className=' '>POSITIONS</span>
                        </div>
                        <h2 className='text-center fw-bold mt-3'>Architecture Design - Projects</h2>
                        <div>
                            <h5 className='fw-bold mt-3'>Job Overview</h5>
                            <hr className='main_hr' />
                            <div>
                                <p><MdDoubleArrow /> An architecture designer is responsible for creating functional and aesthetically pleasing designs for buildings and structures.</p>
                                <p><MdDoubleArrow /> This role includes meeting with clients to understand their vision and translating it into architectural plans.</p>
                                <p><MdDoubleArrow /> Architecture designers collaborate with engineers, contractors, and project managers to bring projects from concept to completion.</p>
                                <p><MdDoubleArrow /> The position requires a balance of creativity and technical precision in every project.</p>
                            </div>
                        </div>
                        <div>
                            <h5 className='fw-bold mt-5'>Qualifications & Experience</h5>
                            <hr className='main_hr' />
                            <div>
                                <p><MdDoubleArrow /> A degree from an accredited Bachelor’s or Master’s program in Architecture or a related field is required, with an architecture license preferred.</p>
                                <p><MdDoubleArrow /> Candidates should have a minimum of 4 years and ideally up to 7 years of professional experience in architectural design or a related field.</p>
                                <p><MdDoubleArrow /> Technical knowledge, including a thorough understanding of building codes, zoning regulations, and accessibility standards, is essential.</p>
                            </div>
                        </div>
                        <div>
                            <h5 className='fw-bold mt-5'>Require Skills</h5>
                            <hr className='main_hr' />
                            <div>
                                <p><MdDoubleArrow /> The role requires strong creative and technical skills in architectural design, along with proficiency in design software such as AutoCAD, Revit, and SketchUp.</p>
                                <p><MdDoubleArrow /> Knowledge of Construction Drawing Standards, Building Codes, and Accessibility Requirements.</p>
                                <p><MdDoubleArrow /> Able to identify and resolve code compliance issues during the design phase, streamlining project approvals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarrerIntro