import React, { useState, useContext, useEffect } from 'react'
import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'

const Login = (props) => {

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;
    const { login, error, clearErrors, isAuthenticated} = authContext;

    useEffect(() => {
        if(isAuthenticated) {
            props.history.push('/');
        }

        if (error === 'Invalid Credentials') {
            setAlert(error, 'danger')
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history])


    const [user, setUser] = useState({
        user_id: '',
        user_pw: '',
    })

    const { user_id, user_pw } = user;

    const onChange = e => setUser({ ...user, [e.target.name]:e.target.value })

    const onSubmit = e => {
        e.preventDefault();
        if(user_id === '' || user_pw === '') {
            setAlert('Please fill in all fields', 'danger')
        } else {
            login({
                user_id,
                user_pw
            });
        }
    }
    return (
        <div className='form-container'>
            <h1>
            Account <span className= "text-primary">Login</span>
            </h1>
            <form onSubmit={onSubmit}>            
                <div className="form-group">
                    <label htmlFor="user_id">User ID</label>
                    <input type="text" name="user_id" value={user_id} onChange={onChange} requiered/>                    
                </div>
                <div className="form-group">
                    <label htmlFor="user_pw">Password</label>
                    <input type="password" name="user_pw" value={user_pw} onChange={onChange} required/>                    
                </div>
                <input type="submit" value="Login" className="btn btn-primary btn-block" />
            </form>
        </div>
    )
}

export default Login
