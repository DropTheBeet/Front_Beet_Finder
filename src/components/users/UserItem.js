import React from 'react'
import PropTypes from 'prop-types'

const UserItem = ({user : { login, avatar_url, html_url }}) => {

    return (
        <div className="card text-center">
            <img src={avatar_url} 
            alt=''
            className="round-img"
            style={{ width: '60px'}}/>
            <h3>{login}</h3>

            <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
        </div>
    )

}

UserItem.propTypes = {
    user:PropTypes.object.isRequired,
}


//inline style 사용시에는 {{}}  두개의 괄호를 사용하여야 한다
export default UserItem
