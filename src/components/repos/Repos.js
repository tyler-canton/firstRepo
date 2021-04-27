import React, { useContext } from 'react'
import { RepoDetail } from "./RepoDetail";
import PropTypes from 'prop-types';
import './Repo.css';
import GithubContext from '../../context/github/githubContext';

const Repos = () => {
    const githubContext = useContext(GithubContext);
    const { repos } = githubContext;
    return (
        <div className="repo-list">
            {repos.map((repo, idx) => (
                <RepoDetail repo={repo} key={`${idx}${repo.id}`} />
            ))}
        </div>
    )
}
Repos.prototype = {
    repos: PropTypes.array.isRequired,
}

export default Repos;