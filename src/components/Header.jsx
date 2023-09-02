import React from 'react'
import bgMobile from "../assets/images/image-hero-mobile.jpg"
import bgDesktop from "../assets/images/image-hero-desktop.jpg"
import logo from "../assets/images/logo.svg"
import menu from "../assets/images/icon-hamburger.svg"

function Header() {
  return (
    <>
    {/* START HEADER */}
    <header className='position-relative'>
    {/* START HEADER BACKGROUND */}
    
    {/* moile background */}
    <img className='w-100 h-auto d-md-none' src={ bgMobile } alt="bg-mobile" />

    {/* desktop background */}
    <img className='w-100 h-auto d-none d-md-block' src={ bgDesktop } alt="bg-desktop" />

    {/* END HEADER BACKGROUND */}

    {/* START HEADER NAVBAR */}

    <nav className="navbar navbar-expand-lg w-100 position-absolute top-0 start-50 translate-middle-x mt-3">

        <div className="container">

            <a className="navbar-brand" href="#">
                <img src={ logo } alt="logo" />
            </a>
            <button className="navbar-toggler border-white border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <img className='navbar-toggler-icon' src={ menu } alt="menu" />
            </button>
            <div className="collapse navbar-collapse mt-4 bg-white rounded shadow" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">

                <li className="nav-item">
                <a className="nav-link px-4 py-4 border-bottom" aria-current="page" href="#">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link px-4 py-4 border-bottom" href="#">Discover</a>
                </li>
                <li className="nav-item">
                <a className="nav-link px-4 py-4" href="#">Get Started</a>
                </li>

            </ul>
            </div>

        </div>

    </nav>

    {/* END HEADER NAVBAR */}


    </header>
    {/* END HEADER */}
    </>
  )
}

export default Header