import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

const Loader = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faCog} spin />
        </div>
    )
}
export default Loader;