import React, {Fragment, useContext, useEffect} from 'react'
import Search from '../images/Search';
import Images from '../images/Images';
import AuthContext from '../../context/auth/authContext'

const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        //eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            <Search />
            <Images />
        </Fragment>
    )
};

export default Home
