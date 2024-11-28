import React from 'react';
import { AlignRight, Facebook, Instagram, Linkedin, Share2, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import 'animate.css';

function Header() {

    return (
        <>
            <nav className="navbar navbar-expand-md bg-white border-bottom py-3 px-5">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <a href="/" className="navbar-brand fs-4 fw-bold">
                            <img
                                src={require('../Assets/Image/Logo/MSD Logo.png')}
                                alt=""
                                className="img-fluid"
                                style={{ height: '50px' }}
                            />
                        </a>
                    </div>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                    >
                        <span className="navbar-toggler-icon">
                            <AlignRight />
                        </span>
                    </button>

                    <div
                        className="offcanvas offcanvas-start"
                        tabIndex="-1"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        data-bs-scroll="true"
                    >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                                MODERN
                            </h5>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav ms-auto me-0 pe-0 align-items-center">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link text-dark text-decoration-none letterspace Inter">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/aboutus" className="nav-link text-dark text-decoration-none letterspace Inter">
                                        About Us
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/project" className="nav-link text-dark text-decoration-none letterspace Inter">
                                        Projects
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/carrer" className="nav-link text-dark text-decoration-none letterspace Inter">
                                        Careers
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contactus" className="nav-link text-dark text-decoration-none letterspace Inter">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>

                            {/* Dropdown for Social Icons */}
                            {/* <div className="dropdown ms-lg-5 mt-1 xyz">
                                <button
                                    className="btn btn-link nav-link text-dark text-decoration-none"
                                    id="dropdownMenuButton"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <Share2 width={16} height={16} />
                                </button>
                                <ul
                                    className="dropdown-menu dropdown-menu-end w-50"
                                    aria-labelledby="dropdownMenuButton"
                                >
                                    <li className=' bg-light'>
                                        <a
                                            href="https://facebook.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="dropdown-item py-3"
                                        >
                                            <Facebook />
                                        </a>
                                    </li>
                                    <li className='my-3 bg-light'>
                                        <a
                                            href="https://twitter.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="dropdown-item"
                                        >
                                            <Twitter />
                                        </a>
                                    </li>
                                    <li className='my-3 bg-light'>
                                        <a
                                            href="https://instagram.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="dropdown-item"
                                        >
                                            <Instagram />
                                        </a>
                                    </li>
                                    <li className='my-3 bg-light'>
                                        <a
                                            href="https://linkedin.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="dropdown-item"
                                        >
                                            <Linkedin />
                                        </a>
                                    </li>
                                </ul>
                            </div> */}
                            <div className="dropdown ms-lg-5 mt-1 xyz" style={{ backgroundColor: '#f8f9fa', borderRadius: '5px', padding: '10px' }}>
                                <button
                                    className="btn btn-link nav-link text-dark text-decoration-none "
                                    id="dropdownMenuButton"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <Share2 width={16} height={16} />
                                </button>
                                <ul
                                    className="dropdown-menu dropdown-menu-end w-50 py-0 animate__animated animate__fadeIn"
                                    aria-labelledby="dropdownMenuButton"
                                >
                                    <li className="li1 animate__animated animate__fadeIn animate__delay1">
                                        <a
                                            href="https://facebook.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="dropdown-item py-3 "
                                        >
                                            <Facebook className='text-light ' />
                                        </a>
                                    </li>
                                    <li className="li2 animate__animated animate__fadeIn animate__delay2">
                                        <a
                                            href="https://twitter.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="dropdown-item py-3 "
                                        >
                                            <Twitter className='text-light ' />
                                        </a>
                                    </li>
                                    <li className="li3 animate__animated animate__fadeIn animate__delay3">
                                        <a
                                            href="https://instagram.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="dropdown-item py-3 "
                                        >
                                            <Instagram className='text-light ' />
                                        </a>
                                    </li>
                                    <li className="li4 animate__animated animate__fadeIn animate__delay4">
                                        <a
                                            href="https://linkedin.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="dropdown-item py-3 "
                                        >
                                            <Linkedin className='text-light ' />
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
