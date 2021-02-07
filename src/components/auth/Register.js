import React, { useState, useContext, useEffect } from 'react'
import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'
import { CLEAR_ERRORS } from '../../context/types';


const Register = (props) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;

    const { register, error, clearErrors, isAuthenticated} = authContext;

    useEffect(() => {
        if(isAuthenticated) {
            props.history.push('/');
        }

        if (error === 'User already exists') {
            setAlert(error, 'danger')
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history])

    const [user, setUser] = useState({
        user_id: '',
        user_pw: '',
        user_pw2: ''
    })

    const { user_id, user_pw, user_pw2 } = user;

    const onChange = e => setUser({ ...user, [e.target.name]:e.target.value })

    const onSubmit = e => {
        e.preventDefault();
        if( user_id === '' || user_pw === '') {
            setAlert('Please enter all fields', 'danger');
        } else if (user_pw !== user_pw2) {
            setAlert('Password do not match', 'danger');            
        } else {
            register({
                user_id,
                user_pw
            });
        }
    }
    return (
        <div className='form-container'>
            <h1>
            Account <span className= "text-primary">Register</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="user_id">User ID</label>
                    <input type="text" name="user_id" value={user_id} onChange={onChange} required/>                    
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="user_pw" value={user_pw} onChange={onChange} required/>                    
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password" name="user_pw2" value={user_pw2} onChange={onChange} required/>                    
                </div>
                <input type="submit" value="Register" className="btn btn-primary btn-block" />
            </form>
        </div>
    )
}

export default Register
