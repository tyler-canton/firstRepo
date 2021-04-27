import React, { Component, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import GithubContext from '../../context/github/githubContext';

const Alert = () => {
    const githubContext = useContext(GithubContext);
    const { alert } = githubContext;
    return (
        alert != null && (

            <div className={`alert alert-${alert.type}`}>
                <FontAwesomeIcon className="info-circle" icon={faInfoCircle} />
                {alert.msg}
            </div>
        )

    )

}

export default Alert
