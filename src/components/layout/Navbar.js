import React, { Fragment, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AlertiContext from '../../context/alerti/alertiContext'
import AuthContext from '../../context/auth/authContext';
import BeetContext from '../../context/beet/beetContext';
import axios from 'axios';

const Navbar = ({icon, title}) => {
    const authContext = useContext(AuthContext);
    const beetContext = useContext(BeetContext);
    const alertiContext = useContext(AlertiContext);

    const { selected_files, setLoading, setLoadingFalser } = beetContext
    const { isAuthenticated, logout, user, intervalFunction} = authContext;


    useEffect( () =>{
        if(!isAuthenticated){
            clearInterval(intervalFunction)
            console.log("sdsdsd")
            console.log(intervalFunction)
        }
    },[isAuthenticated])


    const onLogout = () => {
        logout();
    }

    const fileUploader = (e) => {
    try {
        setLoading();
        const formData = new FormData();
        for(const file of selected_files){
            formData.append("upload_image", file);
        }

        const config = {
            headers: {
              "content-type": "multipart/form-data"
           }
        };

        axios.post(`/home/upload`, formData, config)
        setLoadingFalser();
        alertiContext.setAlerti(' The file upload is complete.', 'light');
    } catch (error) {
        setLoadingFalser()
        console.log(error)
        alertiContext.setAlerti('Something is wrong, contact to Webmaster ', 'light');
    }
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
            <Link to="/upload">Upload</Link>
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
            <i className={icon} onClick={fileUploader} />  {title}
            </h1>
            <ul>
                {isAuthenticated ? authLinks : guestLinks}
            </ul>
        </div>
    )              
}


Navbar.defaultProps = {
    title: 'Beet Finder',
    icon: 'fas fa-camera cursor_test'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
