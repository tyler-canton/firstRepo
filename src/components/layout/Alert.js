import React, { Component, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import AlertContext from '../../context/globalAlert/alertContext';

const Alert = () => {
    const alertContext = useContext(AlertContext);
    const { alert } = alertContext;
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
