import { CircleUser } from 'lucide-react'
import React from 'react'

function Header() {
    return (
        <nav class="navbar navbar-expand-md bg-white border-bottom py-3 px-4 ">
            <div class="container-fluid">
                <div class="d-flex align-items-center">
                    <div class="me-2">
                        <div class="border border-dark" style={{ width: "32px", height: " 32px" }}></div>
                    </div>
                    <a href="/" class="navbar-brand fs-4 fw-bold">MODERN</a>
                </div>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto me-5 pe-5 align-items-center">
                        <li class="nav-item">
                            <a href="/" class="nav-link text-dark letterspace fw-bold">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a href="/" class="nav-link text-dark letterspace fw-bold">PAGES</a>
                        </li>
                        <li class="nav-item">
                            <a href="/" class="nav-link text-dark letterspace fw-bold">NEWS</a>
                        </li>
                        <li class="nav-item">
                            <a href="/" class="nav-link text-dark letterspace fw-bold">WORKS</a>
                        </li>
                        <li class="nav-item">
                            <a href="/" class="nav-link text-dark letterspace fw-bold">POST_DETAIL</a>
                        </li>
                        <li class="nav-item">
                            <a href="/" class="nav-link text-dark letterspace fw-bold">SHORTCODES</a>
                        </li>
                    </ul>
                    <a href="/" class="nav-link text-dark"><CircleUser /></a>
                </div>
            </div>
        </nav>

    )
}

export default Header