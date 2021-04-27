import React, { Component, useContext, useEffect } from 'react';
import UserList from './UserList';
import Loader from '../layout/Loader';
import './Users.css';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
    const githubContext = useContext(GithubContext);
    const { users, loading, getUsers } = githubContext;
    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className={`content ${loading ? 'content-loading' : 'content-loaded'}`} style={UserStyle}>
            {(loading) ? <Loader /> : users.map((user, idx) => (
                <UserList key={`${idx}${user.id}`} user={user} />
            ))}
        </div>
    );

}
const UserStyle = {
    color: '#cccccc'
}

export default Users;