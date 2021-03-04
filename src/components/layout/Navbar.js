import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {   faGithub } from "@fortawesome/free-brands-svg-icons"
import propTypes from 'prop-types'

export class Navbar extends Component {

    static defaultProps = {
        title: 'Github Finder'
    };

    render() {
        return (
            <nav className="navbar bg-primary">
                <h1><FontAwesomeIcon className='icon-social' icon={faGithub} />{this.props.title}</h1>
            </nav>
        )
    }
    static propTypes = {
        title: propTypes.string.isRequired
    }
}

export default Navbar
