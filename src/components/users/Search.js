import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import './Search.css'
import GithubContext from '../../context/github/githubContext';


const Search = () => {
    const githubContext = useContext(GithubContext);
    const { users, searchUsers, clearUsers, showAlert } = githubContext;
    const [text, setText] = useState('');

    const submitUser = e => {
        e.preventDefault();
        if (text === '') {
            showAlert('Please enter text in field', 'light');
        } else {
            searchUsers(text);
            setText('');
        }
    }

    const changeInput = (e) => {
        setText(e.target.value);
    }

    return (
        <div className="search-container">
            <form onSubmit={(e) => submitUser(e)} className="form-search form">
                <input type="text"
                    name="text"
                    value={text}
                    onChange={changeInput}
                    placeholder="Search Users..." />
                <input type="submit"
                    className="btn btn-dark btn-block"
                />
            </form>
            {users.length > 0 && (<button className="btn btn-light btn-block" onClick={clearUsers}>Clear Users</button>)}
        </div>
    )

}

export default Search;