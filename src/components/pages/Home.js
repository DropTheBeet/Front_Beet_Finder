import React, {Fragment, useContext, useEffect} from 'react'
import Search from '../images/Search';
import Images from '../images/Images';
import AuthContext from '../../context/auth/authContext'
import BeetContext from '../../context/beet/beetContext';

const Home = (props) => {
    const authContext = useContext(AuthContext);
    const beetContext = useContext(BeetContext);

    useEffect(() => {
        authContext.loadUser();
        beetContext.clearClickType();
        //eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            <Search path="Home" />
            <Images path="Home"/>
        </Fragment>
    )
};

export default Home
