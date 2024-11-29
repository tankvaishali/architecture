import { duration } from '@mui/material';
import React from 'react';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import { RiInstagramLine } from 'react-icons/ri';
import { TiSocialFacebook, TiSocialLinkedin } from 'react-icons/ti';

function Team() {
    const teamMembers = [
        {
            imgSrc: "https://bestjquery.com/tutorial/our-team/demo74/images/img-1.jpg",
            name: "Williamson",
            post: "Architecture Designer",
            aos: "fade-up"
        },  
        {
            imgSrc: "https://bestjquery.com/tutorial/our-team/demo74/images/img-2.jpg",
            name: "Kristiana",
            post: "Interior Designer",
            aos: "fade-up",
            delay: "400"
        },
        {
            imgSrc: "https://bestjquery.com/tutorial/our-team/demo74/images/img-3.jpg",
            name: "Steve Thomas",
            post: "Architecture Designer",
            aos: "fade-up",
            delay: "800"
        },
        {
            imgSrc: "https://bestjquery.com/tutorial/our-team/demo74/images/img-1.jpg",
            name: "Williamson",
            post: "Architecture Designer",
            aos: "fade-up",
            delay: "1200"
        },
    ];

    return (
        <>
            <div className='team_bg bg-white position-relative pb-5'>
                <div className="container py-5 position-relative z-2">
                    <div className='py-3'>
                        <div
                            className="about-section justify-content-start" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                            <div className="line border border-light border-1"></div>
                            <span className='text-light'>OUR TEAM</span>
                        </div>
                        <h1 className="Discover text-capitalize text-light py-3" data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">
                            Our Architectural Experts
                        </h1>
                    </div>
                    <div className="row">
                        {teamMembers.map((member, index) => (
                            <div className="col-md-6 col-lg-3 col-sm-6" key={index}>
                                <div className="our-team text-center" data-aos={member.aos} data-aos-duration="1500" data-aos-delay={member.delay} data-aos-once="true">
                                    <div className="pic overflow-hidden position-relative">
                                        <img src={member.imgSrc} alt="" className="w-100" style={{ height: "auto" }} />
                                        <ul className="social d-flex justify-content-center align-items-center p-0 m-0">
                                            <li className='d-flex justify-content-center align-items-center fs-4 text-white position-relative'><TiSocialFacebook /></li>
                                            <li className='d-flex justify-content-center align-items-center fs-4 text-white position-relative'><AiOutlineGooglePlus /></li>
                                            <li className='d-flex justify-content-center align-items-center fs-4 text-white position-relative'><RiInstagramLine /></li>
                                            <li className='d-flex justify-content-center align-items-center fs-4 text-white position-relative'><TiSocialLinkedin /></li>
                                        </ul>
                                    </div>
                                    <div className="team-content p-4">
                                        <h3 className="title fs-4 fw-bold text-uppercase" style={{ letterSpacing: "1px" }}>{member.name}</h3>
                                        <span className="post fw-bold text-secondary text-capitalize">{member.post}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Team;