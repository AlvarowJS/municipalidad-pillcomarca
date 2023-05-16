import React, { useRef } from 'react'
import logo from './../assets/img/logo.jpeg'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
    const navbar = useRef()

    const sysdoc = () => {
        window.open('http://165.22.34.176/login')
    }
    return (
        <header>
            <nav ref={navbar} className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container d-flex justify-content-between align-items-center">

                    <a className="navbar-brand text-success logo h1 align-self-center">
                        <img src={logo} className="local_logo" alt="" />
                    </a>

                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                        data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
                        id="templatemo_main_nav">
                        <div className="flex-fill">
                            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                                {/* <NavLink to='/' > */}
                                    <li className="nav-item">
                                        INICIO
                                        INICIO
                                    </li>
                                {/* </NavLink> */}

                                {/* <NavLink to='/historia' > */}
                                <li className="nav-item">
                                    SOBRE NOSOTROS
                                </li>
                                {/* </NavLink> */}

                                {/* <NavLink to='/historia' > */}
                                <li className="nav-item">
                                    HISTORIA
                                </li>
                                {/* </NavLink> */}

                                {/* <NavLink to='/ubicanos' > */}
                                <li className="nav-item">
                                    UBICANOS
                                </li>
                                {/* </NavLink> */}
                            </ul>
                        </div>
                        <div className="navbar align-self-center d-flex">

                            <a className="nav-icon position-relative " onClick={sysdoc}>
                                <i className='bx bx-user'></i>
                                TRAMITE DOCUMENTARIO
                            </a>
                        </div>
                    </div>

                </div>
            </nav>

        </header>
    )
}

export default Navbar