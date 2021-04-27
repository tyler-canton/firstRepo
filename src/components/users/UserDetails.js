import React, { useEffect, Fragment, useContext } from 'react'
import Loader from '../layout/Loader';
import Repos from "../repos/Repos";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import GithubContext from '../../context/github/githubContext';

const UserDetails = ({ match }) => {
    const githubContext = useContext(GithubContext);
    const { getUser, loading, user, getUserRepos, repos } = githubContext;

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    }, []);


    const { name, avatar_url, company, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable } = user;
    return (
        <div className={`content ${loading ? 'content-loading' : 'content-loaded content-user-detail'}`} >
            {  (loading) ? <Loader /> : (
                <Fragment>
                    <div className='detail-nav'>
                        <Link to='/' className='btn btn-light'>
                            Back to Search
                        </Link>
                        <p>
                            Hireable: {hireable ? <FontAwesomeIcon className='text-success' icon={faCheck} /> : <FontAwesomeIcon className='text-danger' icon={faTimesCircle} />}
                        </p>
                    </div>

                    <div className="card card-content grid-2">
                        <div className="all-center">
                            <img src={avatar_url} alt="" className='round-img' />
                            <h1>{name}</h1>
                            <p>Location: {location}</p>
                        </div>
                        <div>
                            {bio &&
                                <Fragment>
                                    <h3>Bio:</h3>
                                    <p>{bio}</p>
                                </Fragment>}
                            <a href={html_url} target='_blank' className='btn btn-dark my-1'>Visit Github Profile</a>
                            <ul>
                                <li>
                                    {login && <Fragment>
                                        <strong>Username:</strong> {login}
                                    </Fragment>}
                                </li>
                                <li>
                                    {company && <Fragment>
                                        <strong>Company:</strong> {company}
                                    </Fragment>}
                                </li>
                                <li>
                                    {blog && <Fragment>
                                        <strong>Website:</strong> {blog}
                                    </Fragment>}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="card card-tags">
                        <div className="badge badge-primary">Followers: {followers}</div>
                        <div className="badge badge-success">Following: {following}</div>
                        <div className="badge badge-light">Public Repos: {public_repos}</div>
                        <div className="badge badge-dark">Public Gist: {public_gists}</div>
                    </div>

                    <Repos repos={repos} />

                </Fragment>
            )}
        </div>
    )
};

export default UserDetails
