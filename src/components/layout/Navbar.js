import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import logo from '../../assets/images/varLogo.png';
const Navbar = ({ title, name }) => {

    return (
        <nav className="navbar bg-primary">
            <Link to='/'>
                <div className="header-logo"> <img src={logo} className="img-responsive" /> <span className="header-title"> {title}</span> </div>
            </Link>
            <ul className="menu-items">
                <li>
                    <Link to='/'> <FontAwesomeIcon className='icon-menu' icon={faHome} />Home </Link>
                </li>
                <li>
                    <Link to='/about'>
                        <FontAwesomeIcon className='icon-menu' icon={faUserFriends} />About
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

Navbar.defaultProps = {
    title: 'Github Finder'
};



export default Navbar;
