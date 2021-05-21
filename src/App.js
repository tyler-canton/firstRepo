
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import companyLogo from './assets/images/logo.png';
import testimonialOne from './assets/images/testimonial-1.jpg';
import testimonialTwo from './assets/images/testimonial-2.jpg';
import clientOne from './assets/images/client-1.png';
import clientTwo from './assets/images/client-2.png';
import clientThree from './assets/images/client-3.png';
import clientFour from './assets/images/client-4.png';
import clientFive from './assets/images/client-5.png';
import clientSix from './assets/images/client-6.png';
import clientSeven from './assets/images/client-7.png';
import clientEight from './assets/images/client-8.png';
import femaleCoder from './assets/images/female-teacher.jpg'

import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import UserDetails from './components/users/UserDetails';
import About from './components/pages/About';

import GithubState from './context/github/githubState';
import AlertState from './context/globalAlert/alertState';

import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

const App = () => {

    return (
        <GithubState>
            <AlertState>

                <Router>
                    <div className="scrollToTop circle">
                        <i className="icon-up-open-big"></i>
                    </div>
                    <div className="page-wrapper">
                        <Header />
                        <div className="banner clearfix">
                            <div className="slideshow" id="banner">
                                <div className="slider-revolution-5-container">
                                    <div id="slider-banner-fullwidth-hero" className="slider-banner-fullwidth-hero rev_slider" data-version="5.0">
                                        <ul className="slides">
                                            <li className="text-center" data-transition="random" data-slotamount="default" data-masterspeed="default" data-title="Start Coding Now">
                                                <img src="videos/video-banner-poster.jpg" alt="slidebg1" data-bgposition="center center" data-bgrepeat="no-repeat" data-bgfit="cover"
                                                    className="rev-slidebg" />
                                                <div className="tp-caption dark-translucent-bg" data-x="center" data-y="center" data-start="0" data-transform_in="opacity:0;s:600;e:Power2.easeInOut;"
                                                    data-transform_out="opacity:0;s:600;s:300;" data-width="5000" data-height="5000">
                                                </div>
                                                <div className="rs-background-video-layer" data-forcerewind="on" data-volume="mute" data-videowidth="100%" data-videoheight="100%"
                                                    data-videomp4="videos/background-video-banner.mp4" data-videopreload="preload" data-videoloop="loop" data-aspectratio="16:9"
                                                    data-autoplay="true" data-autoplayonlyfirsttime="false" data-nextslideatend="false">
                                                </div>
                                                <div className="tp-caption large_white" data-x="center" data-y="150" data-start="1000" data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:1100;e:Power4.easeInOut;"
                                                    data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                                                    data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;">
                                                    <span className="logo-font">Start Coding Now</span>
                                                    <br /> Better career, Better life
                                                </div>
                                                <div className="tp-caption large_white tp-resizeme" data-x="center" data-y="270" data-start="1100" data-transform_idle="o:1;"
                                                    data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:1100;e:Power4.easeInOut;"
                                                    data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;">
                                                    <div className="separator-3 light"></div>
                                                </div>
                                                <div className="tp-caption medium_white" data-x="center" data-y="290" data-start="1100" data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:1100;e:Power4.easeInOut;"
                                                    data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                                                    data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;">
                                                    Do you know why small cities like Raleigh, NC are going to be more important then cities like New York?
                        <br /> Because of technology, innovative hubs like Research Triangle Park (RTP)
                        <br /> Along with Engineers and Coders like you.
                     </div>
                                                <div className="tp-caption small_white" data-x="center" data-y="410" data-start="1200" data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:1100;e:Power4.easeInOut;"
                                                    data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                                                    data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;">
                                                    <span data-toggle="modal" data-target="#formModal" className="btn btn-default btn-animated margin-clear">Get Started
                                                        <i className="fa fa-file"></i>
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="tp-bannertimer"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="page-start"></div>
                        <section id="about" className="main-container">
                            <div className="container">
                                <div className="row justify-content-lg-center">
                                    <div className="col-lg-8">
                                        <h2 className="text-center title">About
                  <strong>Us</strong>
                                        </h2>
                                        <div className="separator"></div>
                                        <p className="large text-center">The Variable Assign Academy is a 17-week, immersive software engineering program for a candidate that is willing
                                        to better their lives. The program is driven by three core values: education, creativity, and mentorship...
               </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h3 className="title">The Program is
                  <span className="text-rotator" data-rotator-animation-effect="fadeIn">Fun, Agile, Easy, Intuitive, User-Friendly</span> ...
               </h3>
                                        <p>Once you graduate you become an employee that is fluent in Computer Science fundamentals like data structures,
                                        and object-oriented programming, Angular, React, HTML & CSS, NodeJS frameworks (Express.js, Hapi.js), SQL,
                                        and test-driven development.
               </p>
                                        <ul className="list-icons">
                                            <li className="object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="100">
                                                <i className="icon-check-1"></i> Graduates are employees
                  </li>
                                            <li className="object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="150">
                                                <i className="icon-check-1"></i> Tuition is deferred until graduation
                  </li>
                                            <li className="object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="200">
                                                <i className="icon-check-1"></i> Women tution Incentives
                  </li>
                                            <li className="object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="250">
                                                <i className="icon-check-1"></i> 1 on 1 mentorship
                  </li>
                                        </ul>
                                        <p>Our team comprises of over 10 years of experience in the technology industries, working in mulitple domains.
                                        We have established many relationship with partners to ensure your career grows within our company.
               </p>
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <div className="overlay-container overlay-visible">
                                            <img src={femaleCoder} alt="Female Teacher" />
                                            <a data-toggle="modal" data-target="#formModal" href="#" className="overlay-link">
                                                <i className="fa fa-link"></i>
                                            </a>
                                            <div className="overlay-bottom hidden-sm-down">
                                                <div className="text">
                                                    Our students become strong user interface (UI) engineer through our mentorship program. Designed to ensure the our developers
                                                    understand the role of a UI engineery in it's entirety.
                     </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </section>
                        <section className="dark-translucent-bg pv-30 background-img-1"
                            style={{ backgroundPosition: "50 % 30 %" }}>
                            <div className="container">
                                <div className="row justify-content-lg-center">
                                    <div className="col-lg-8">
                                        <h2 className="text-center mt-4">Why
                  <strong>Choose</strong> Us?
               </h2>
                                        <div className="separator"></div>
                                        <p className="large text-center">Coding schools are pricey, and at the Variable Assign Academy if your worried about finding a job you won't have
                                        to. Variable Assign students are Variable Assign employees. Ater school you role right onto a job site.
               </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="feature-box-2 object-non-visible" data-animation-effect="fadeInDownSmall" data-effect-delay="100">
                                                    <span className="icon default-bg small">
                                                        <i className="fa fa-hand-scissors-o"></i>
                                                    </span>
                                                    <div className="body">
                                                        <h4 className="title">Cutting Edge Technology</h4>
                                                        <p>We work with current enterprise technologies that our partners are using.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="feature-box-2 object-non-visible " data-animation-effect="fadeInDownSmall" data-effect-delay="150">
                                                    <span className="icon default-bg small">
                                                        <i className="fa fa-slack"></i>
                                                    </span>
                                                    <div className="body">
                                                        <h4 className="title">Remote Flexibility</h4>
                                                        <p>Our school wholes class twice a week and three days you are remote to work around your schedule .</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="feature-box-2 object-non-visible" data-animation-effect="fadeInDownSmall" data-effect-delay="200">
                                                    <span className="icon default-bg small">
                                                        <i className="fa fa-life-ring"></i>
                                                    </span>
                                                    <div className="body">
                                                        <h4 className="title">Lifetime Mentorship</h4>
                                                        <p>You will always have a senior developer dedicated to you while you are on site.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="feature-box-2 object-non-visible animated object-visible " data-animation-effect="fadeInDownSmall" data-effect-delay="250">
                                                    <span className="icon default-bg small">
                                                        <i className="icon-check"></i>
                                                    </span>
                                                    <div className="body">
                                                        <h4 className="title">And Wait for it?</h4>
                                                        <p>Guaranteed to work, your rolled from the school house to the work force.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="academy" className="light-gray-bg pv-30 clearfix">
                            <div className="container">
                                <div className="row justify-content-lg-center">
                                    <div className="col-lg-8">
                                    </div>
                                </div>
                                <div className="row">
                                </div>
                            </div>
                        </section>
                        <section className="pv-30 curriculum">
                            <div className="container">
                                <div className="row justify-content-lg-center">
                                    <div className="col-lg-8">
                                        <h2 className="text-center mt-4">Our
                                            <strong>Curriculum</strong>
                                        </h2>
                                        <div className="separator"></div>
                                        <p className="large text-center">We constantly are interacting with our vendors to ensure we are training our developers on cutting edge technologies
                                        our partners demand.
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="pv-20 ph-20 feature-box-2 light-gray-bg boxed shadow object-non-visible" data-animation-effect="fadeInDownSmall"
                                            data-effect-delay="100">
                                            <span className="icon without-bg">
                                                <i className="fa fa-connectdevelop"></i>
                                            </span>
                                            <div className="body">
                                                <h4 className="title">Computer Science</h4>
                                                <p>Emerging fundamentals into front-end, back-end, and database technologies courses.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="pv-20 ph-20 feature-box-2 light-gray-bg boxed shadow object-non-visible" data-animation-effect="fadeInDownSmall"
                                            data-effect-delay="150">
                                            <span className="icon without-bg">
                                                <i className="fa fa-code"></i>
                                            </span>
                                            <div className="body">
                                                <h4 className="title">User Interface (UI) </h4>
                                                <p>Strong HTML5/CSS/ES6 course that flows directly into Angular, React.js, and Vue.js.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="pv-20 ph-20 feature-box-2 light-gray-bg boxed shadow object-non-visible" data-animation-effect="fadeInDownSmall"
                                            data-effect-delay="200">
                                            <span className="icon without-bg">
                                                <i className="fa fa-exchange"></i>
                                            </span>
                                            <div className="body">
                                                <h4 className="title">REST API Technologies</h4>
                                                <p>The primary focus is on NodeJS popular rest-apis express.js, hapi.js and GraphQl.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="pv-20 ph-20 feature-box-2 light-gray-bg boxed shadow object-non-visible" data-animation-effect="fadeInDownSmall"
                                            data-effect-delay="250">
                                            <span className="icon without-bg">
                                                <i className="icon-database"></i>
                                            </span>
                                            <div className="body">
                                                <h4 className="title">ORM Layer</h4>
                                                <p>We take time to focus on database fundamentals and then move into ORM libs like mongoose and sequelize.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="pv-20 ph-20 feature-box-2 light-gray-bg boxed shadow object-non-visible" data-animation-effect="fadeInDownSmall"
                                            data-effect-delay="300">
                                            <span className="icon without-bg">
                                                <i className="fa fa-git"></i>
                                            </span>
                                            <div className="body">
                                                <h4 className="title">Source Control</h4>
                                                <p>Version control is taken very serious and it's propbably one of the first things we 'push' on.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="pv-20 ph-20 feature-box-2 light-gray-bg boxed shadow object-non-visible" data-animation-effect="fadeInDownSmall"
                                            data-effect-delay="350">
                                            <span className="icon without-bg">
                                                <i className="fa fa-cloud-upload"></i>
                                            </span>
                                            <div className="body">
                                                <h4 className="title">Cloud Services </h4>
                                                <p>Understanding high level is crucial to understanding where you fit in the stack. We dive quickly into the
                                                deployment process with AWS tools.
                     </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="dark-translucent-bg footer-top animated-text default-hovered"
                                style={{ backgroundColor: " rgba(0, 0, 0, 0.6) " }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="call-to-action text-center">
                                                <div className="row">
                                                    <div className="col-md-8">
                                                        <h2 className="mt-3">Stop Doubting Yourself</h2>
                                                        <h2 className="mt-3">Get it Done!</h2>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <p className="mt-10">
                                                            <a href="#" data-toggle="modal" data-target="#formModal" className="btn btn-animated btn-lg btn-gray-transparent">Subscribe
                              <i className="fa fa-file pl-20"></i>
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="partners" className="section pv-30 light-gray-bg">
                            <div className="container">
                                <div className="row justify-content-lg-center">
                                    <div className="col-lg-8 text-center">
                                        <h2 className="title">
                                            <span className="text-muted">Our Student who are </span>
                                            <strong>Developers Now</strong>
                                        </h2>
                                        <div className="separator"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-carousel content-slider space-top">
                                <div className="container">
                                    <div className="row justify-content-md-center">
                                        <div className="col-md-8">
                                            <div className="testimonial text-center">
                                                <div className="testimonial-image">
                                                    <img src={testimonialOne} alt="Jane Doe" title="Jane Doe" className="rounded-circle" />
                                                </div>
                                                <h3 className="mt-3">Couldn't Believe It!</h3>
                                                <div className="separator"></div>
                                                <div className="testimonial-body">
                                                    <blockquote>
                                                        <p>I didn't believe it at first that I could in today's market still get training and role right into a
                                                        position with no worry or stress of employment after school.
                           </p>
                                                    </blockquote>
                                                    <div className="testimonial-info-1">- Faisal Dirwan</div>
                                                    <div className="testimonial-info-2">IT Strategic Planners Inc</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="row justify-content-md-center">
                                        <div className="col-md-8">
                                            <div className="testimonial text-center">
                                                <div className="testimonial-image">
                                                    <img src={testimonialTwo} alt="Jane Doe" title="Jane Doe" className="rounded-circle" />
                                                </div>
                                                <h3 className="mt-3">Oh Yes! Career Acquired!</h3>
                                                <div className="separator"></div>
                                                <div className="testimonial-body">
                                                    <blockquote>
                                                        <p>This was probably the best move that I've made in a long time. After my training and working as a Variable
                                                        Assign employee has given me the ability to work anywhere. The job market is booming...
                           </p>
                                                    </blockquote>
                                                    <div className="testimonial-info-1">- Theron Canton </div>
                                                    <div className="testimonial-info-2">Lenovo</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="clients-container">
                                    <div className="clients owl-carousel client-vendors">
                                        <div className="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="100">
                                            <a href="#">
                                                <img src={clientOne} alt="Variable Assign Image" />
                                            </a>
                                        </div>
                                        <div className="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="200">
                                            <a href="#">
                                                <img src={clientTwo} alt="Variable Assign Image" />
                                            </a>
                                        </div>
                                        <div className="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="300">
                                            <a href="#">
                                                <img src={clientThree} alt="Variable Assign Image" />
                                            </a>
                                        </div>
                                        <div className="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="400">
                                            <a href="#">
                                                <img src={clientFour} alt="Variable Assign Image" />
                                            </a>
                                        </div>
                                        <div className="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="500">
                                            <a href="#">
                                                <img src={clientFive} alt="Variable Assign Image" />
                                            </a>
                                        </div>
                                        <div className="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="600">
                                            <a href="#">
                                                <img src={clientSix} alt="Variable Assign Image" />
                                            </a>
                                        </div>
                                        <div className="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="700">
                                            <a href="#">
                                                <img src={clientSeven} alt="Variable Assign Image" />
                                            </a>
                                        </div>
                                        <div className="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="800">
                                            <a href="#">
                                                <img src={clientEight} alt="Variable Assign Image" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <footer id="getstarted" className="clearfix">
                            <div className="footer">
                                <div className="container">
                                    <div className="footer-inner">
                                        <div className="row justify-content-lg-center">
                                            <div className="col-lg-6">
                                                <div className="footer-content">
                                                    <div className="logo-footer">
                                                        <img className="mx-auto" id="logo-footer" src={companyLogo} alt="Variable Assign Image" />
                                                    </div>
                                                    <p className="text-center">Get more information contact our coding counselors and get started with your career in software engineering.
                                                    We provide a seamless transition from the school house to the workforce as a Variable Assign employee.
                        </p>
                                                    <ul className="list-inline mb-20">
                                                        <li className="list-inline-item">
                                                            <i className="text-default fa fa-map-marker pr-1"></i> 555 Fayetteville Street, 27601
                           </li>
                                                        <li className="list-inline-item">
                                                            <i className="text-default fa fa-phone pl-10 pr-1"></i> +1 919.386.9497
                           </li>
                                                        <li className="list-inline-item">
                                                            <a href="mailto:info@variableassign.com.com" className="link-dark">
                                                                <i className="text-default fa fa-envelope-o pl-10 pr-1"></i> info@variableassign.com</a>
                                                        </li>
                                                    </ul>
                                                    <div className="separator-2"></div>
                                                    <ul className="social-links circle margin-clear animated-effect-1 text-center">
                                                        <li className="facebook">
                                                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/variableassigntechnology">
                                                                <i className="fa fa-facebook"></i>
                                                            </a>
                                                        </li>
                                                        <li className="twitter">
                                                            <a target="_blank" rel="noreferrer" href="http://www.twitter.com">
                                                                <i className="fa fa-twitter"></i>
                                                            </a>
                                                        </li>
                                                        <li className="googleplus">
                                                            <a target="_blank" rel="noreferrer" href="http://plus.google.com">
                                                                <i className="fa fa-google-plus"></i>
                                                            </a>
                                                        </li>
                                                        <li className="linkedin">
                                                            <a target="_blank" rel="noreferrer" href="http://www.linkedin.com">
                                                                <i className="fa fa-linkedin"></i>
                                                            </a>
                                                        </li>
                                                        <li className="youtube">
                                                            <a target="_blank" rel="noreferrer" href="https://www.youtube.com">
                                                                <i className="fa fa-youtube"></i>
                                                            </a>
                                                        </li>
                                                        <li className="instagram">
                                                            <a target="_blank" rel="noreferrer" href="http://www.instagram.com">
                                                                <i className="fa fa-instagram"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="subfooter">
                                <div className="container">
                                    <div className="subfooter-inner">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p className="text-center">Copyright© 2017 The Variable Assign Academy. All Rights Reserved</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="formModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="modal-title title" id="myModalLabel">Sign Up</h4>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                                <span className="sr-only">Close</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="main object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="100">
                                                <div className="form-block p-30 form-subscriber  border-clear">
                                                    <form id="contact-form" className="form-horizontal">
                                                        <div className="form-group has-feedback row">
                                                            <label htmlFor="inputName" className="col-md-5 control-label text-md-right col-form-label">Full Name
                              <span className="text-danger small">*</span>
                                                            </label>
                                                            <div className="col-md-7">
                                                                <i className="fa fa-pencil form-control-feedback pr-4"></i>
                                                                <input type="text" className="form-control" name="inputName" id="inputName" placeholder="Full Name" required />
                                                            </div>
                                                        </div>
                                                        <div className="form-group has-feedback row">
                                                            <label htmlFor="inputTimeframe" className="col-md-5 control-label text-md-right col-form-label">When do you want to start?
                              <span className="text-danger small">*</span>
                                                            </label>
                                                            <div className="col-md-7">
                                                                <select className="form-control" name="inputTimeframe" id="inputTimeframe">
                                                                    <option>Now</option>
                                                                    <option>1-3 months</option>
                                                                    <option>3 months or more</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="form-group has-feedback row">
                                                            <label htmlFor="inputExperience" className="col-md-5 control-label text-md-right col-form-label">Do you have coding experience?
                              <span className="text-danger small">*</span>
                                                            </label>
                                                            <div className="col-md-7">
                                                                <select className="form-control" name="inputExperience" id="inputExperience">
                                                                    <option>Worked with CSS, HTML, and JavaScript before</option>
                                                                    <option>Built applications utilizing these technologies</option>
                                                                    <option>Highly advanced and worked using these tools</option>
                                                                    <option>Have no idea what I'm talking about</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="form-group has-feedback row">
                                                            <label htmlFor="inputExperience" className="col-md-5 control-label text-md-right col-form-label">Do you have military experience like our CEO?
                              <span className="text-danger small">*</span>
                                                            </label>
                                                            <div className="col-md-7">
                                                                <select className="form-control" name="inputMilitary" id="inputMilitary">
                                                                    <option>Yes</option>
                                                                    <option>No</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="form-group has-feedback row">
                                                            <label htmlFor="inputPhonenumber" className="col-md-5 control-label text-md-right col-form-label">Phone Number
                              <span className="text-danger small">*</span>
                                                            </label>
                                                            <div className="col-md-7">
                                                                <i className="fa fa-user form-control-feedback pr-4"></i>
                                                                <input type="tel" className="form-control" name="inputPhonenumber" id="inputPhonenumber" placeholder="(919)555-5555" required />
                                                            </div>
                                                        </div>
                                                        <div className="form-group has-feedback row">
                                                            <label htmlFor="inputEmail" className="col-md-5 control-label text-md-right col-form-label">Email
                              <span className="text-danger small">*</span>
                                                            </label>
                                                            <div className="col-md-7">
                                                                <i className="fa fa-phone form-control-feedback pr-4"></i>
                                                                <input type="email" className="form-control" name="inputEmail" id="inputEmail" placeholder="Email" required />
                                                            </div>
                                                        </div>
                                                        <div className="form-group has-feedback row">
                                                            <div className="ml-md-auto col-md-9">
                                                                <div className="checkbox form-check">
                                                                    <label className="form-check-label">
                                                                        By clicking "Sign Up" you agree to the
                                                                        <a href="#"> Terms of Service </a>and
                                                                        <a href="#"> Privacy Agreement</a>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group has-feedback row">
                                                            <div className="ml-md-auto col-md-9">
                                                                <div className="g-recaptcha" data-sitekey="6LcrvlcUAAAAALY91GZpRtlluCRzz9ZyLGfeLYgJ"></div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row modal-footer modal-footer-content">
                                                            <button type="submit" className="btn btn-group btn-default btn-animated">Sign Up
                                                                <i className="fa fa-check"></i>
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>

                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/user/:login' component={UserDetails} />
                        <Route component={NotFound} />
                    </Switch>

                </Router>
            </AlertState>
        </GithubState>
    );
}

export default App;