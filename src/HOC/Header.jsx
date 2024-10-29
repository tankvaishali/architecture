import React from 'react'
import { AlignRight, Share2 } from 'lucide-react'

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-md bg-white border-bottom py-3 px-5">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <a href="/" className="navbar-brand fs-4 fw-bold"><img src={require('../Assets/Image/Logo/MSD Logo.png')} alt="" className='img-fluid' style={{ height: "50px" }} /></a>
                    </div>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                    >
                        <span className="navbar-toggler-icon"><AlignRight /></span>
                    </button>

                    <div
                        className="offcanvas offcanvas-start"
                        tabIndex="-1"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">MODERN</h5>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav ms-auto me-0 pe-0 align-items-center">
                                <li className="nav-item">
                                    <a href="/" className="nav-link text-dark letterspace Inter">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/" className="nav-link text-dark letterspace Inter">PAGES</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/" className="nav-link text-dark letterspace Inter">NEWS</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/" className="nav-link text-dark letterspace Inter">WORKS</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/" className="nav-link text-dark letterspace Inter">POST_DETAIL</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/" className="nav-link text-dark letterspace Inter">SHORTCODES</a>
                                </li>
                            </ul>
                            <a href="/" className="nav-link text-dark text-center ms-lg-5 me-0 pe-0 mt-1">
                                <Share2 width={16} height={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header