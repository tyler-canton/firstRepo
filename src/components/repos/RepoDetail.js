import React from 'react'

export const RepoDetail = ({ repo: { html_url, name } }) => {
    return (
        <div className='card card-repo'>
            <h3>
                <a href={html_url}>{name} </a>
            </h3>
        </div>
    )
}
