import React, {Fragment, useContext, useEffect} from 'react'
import Search from '../images/Search';
import Images from '../images/Images';
import AuthContext from '../../context/auth/authContext'


const Public = (props) => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        //eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            <Search path="Public"/>
            <Images path="Public"/>
        </Fragment>
    )
};

export default Public
