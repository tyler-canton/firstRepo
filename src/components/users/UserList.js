import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
// destructuring the props that are automagically passed
const UserList = ({ user }) => {

    const { login, avatar_url } = user;
    return (
        <div className="card">
            <img src={avatar_url} alt='' className='card-img' />
            <h3>{login}</h3>
            <div className=" ">
                <Link to={`/user/${login}`} className="btn btn-dark btn-s my-1">More</Link>
            </div>
        </div>
    )

}
UserList.propTypes = {
    user: propTypes.object.isRequired,
}
export default UserList
