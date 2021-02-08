import React, {Fragment, useContext, useEffect} from 'react'
import Search from '../images/Search';
import Images from '../images/Images';
import AuthContext from '../../context/auth/authContext'


const Home = (props) => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        console.log(props.location.pathname)
        //eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            <Search path="Home" />
            <Images />
        </Fragment>
    )
};

export default Home
