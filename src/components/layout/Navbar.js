import React, { Fragment, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'

const Navbar = ({icon, title}) => {
    const authContext = useContext(AuthContext)

    const [file, setFile] = useState()

    const { isAuthenticated, logout, user } = authContext;

    const onLogout = () => {
        logout();
    }


    const authLinks = (
    <Fragment>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/public">Public</Link>
        </li>
        <li>
            <Link to="/favorite">Favorite</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        
        <li>Hello { user }</li>
        <li>
            <a onClick={onLogout} href="#!">
                <i className="fas fa-sign-out-alt"></i> <span className="hide-sm">Logout</span>
            </a>
        </li>
    </Fragment>
    );


    const guestLinks = (
        <Fragment>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </Fragment>
        );

    


    

    return (
        <div className="navbar bg-primary">
            <h1>
                <i className={icon} /> {title}
            </h1>
            <ul>
                {isAuthenticated ? authLinks : guestLinks}
            </ul>
        </div>
    )              
}

Navbar.defaultProps = {
    title: 'Beet Finder',
    icon: 'fas fa-camera'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
