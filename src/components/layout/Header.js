import React, { Fragment } from 'react'
import companyLogo from '../../assets/images/logo.png';
const Header = () => {
    return (
        <Fragment>
          <div className="header-container header-module">
                            <header className="header fixed fixed-all clearfix">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-4 col-xl-3 hidden-md-down">
                                            <div className="header-first clearfix">
                                                <div id="logo" className="logo">
                                                    <a href="index.html">
                                                        <img id="logo_img" src={companyLogo} alt="The Project" />
                                                    </a>
                                                </div>
                                                <div className="site-slogan">
                                                    Innovative Academy
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-xl-9">
                                            <div className="header-second clearfix">
                                                <div className="main-navigation  animated">
                                                    <nav className="navbar navbar-expand-lg navbar-light p-0">
                                                        <div className="navbar-brand clearfix hidden-lg-up">
                                                            <div id="logo-mobile" className="logo">
                                                                <a href="index.html">
                                                                    <img id="logo-img-mobile" src={companyLogo} alt="The Project" />
                                                                </a>
                                                            </div>
                                                            <div className="site-slogan">
                                                                Innovative Academy
                                                            </div>
                                                        </div>
                                                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar-collapse-1"
                                                            aria-controls="navbar-collapse-1" aria-expanded="false" aria-label="Toggle navigation">
                                                            <span className="navbar-toggler-icon"></span>
                                                        </button>
                                                        <div className="collapse navbar-collapse scrollspy" id="navbar-collapse-1">
                                                            <ul className="navbar-nav ml-lg-auto">
                                                                <li className="nav-item">
                                                                    <a className="nav-link smooth-scroll active" href="#banner">Home</a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a className="nav-link smooth-scroll" href="#about">About</a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a className="nav-link smooth-scroll" href="#academy">Academy</a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a className="nav-link smooth-scroll" href="#partners">Partners</a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a data-toggle="modal" data-target="#formModal" className="nav-link smooth-scroll"> Get Started </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </header>
                        </div>
        </Fragment>
    )
}

export default Header
