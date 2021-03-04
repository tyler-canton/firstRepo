import React, { Component } from 'react'

export class UserItem extends Component {
 
    render() {
        const { id, login, avatar_url, html_url } = this.props.user;
        return (
            <div className="card">
                <img src={avatar_url} alt='' className='card-img' />
                <h3>{login}</h3>
                <div className=" ">
                    <a href={html_url} className="btn btn-dark btn-s my-1">More</a>

                </div>
            </div>
        )
    }
}

export default UserItem
