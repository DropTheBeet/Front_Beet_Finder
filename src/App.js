import React, { useEffect, useContext} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Image from './components/images/Image';
import Alerti from './components/layout/Alerti';
import Alerts from './components/layout/Alerts';
import Home from './components/pages/Home';
import Favorite from './components/pages/Favorite';
import Public from './components/pages/Public';
import Upload from './components/pages/Upload';
import NotFound from './components/pages/NotFound';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PrivateRoute from './components/routing/PrivateRoute';

import BeetState from './context/beet/beetState'
import AuthState from './context/auth/AuthState'
import AlertiState from './context/alerti/alertiState'
import AlertState from './context/alert/AlertState'
import setAuthToken from './utils/setAuthToken'
import setUpdatePreference from './utils/setUpdatePreference'

import AuthContext from './context/auth/authContext';

import './App.css';


if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  return  (
    <AuthState>
    <BeetState>
    <AlertState>
      <AlertiState>
      <Router>
    <div className="App">
      <Navbar />
      <div className='container'>
        <Alerts />
        <Alerti />
        <Switch>
          <PrivateRoute exact path='/' component={Home}/>
          <PrivateRoute exact path='/public' component={Public}/>
          <PrivateRoute exact path='/favorite' component={Favorite}/>
          <PrivateRoute exact path='/image/:img_no' component={Image} />
          <PrivateRoute exact path='/upload' component={Upload} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
    </Router>
    </AlertiState>
    </AlertState>
    </BeetState>
    </AuthState>
    );
  
}
// jsx와 html 다른점 
// className
// {/* <label for */   >  htmlFor}
// jsx는 무조건 한개의 parent를 가지고 있어야함

export default App;


  // async componentDidMount() {
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
  //   this.setState({loading:true});

  //   const res = await axios.get(`https://api.github.com/users?client_id=$
  //   {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
  //   {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   this.setState({users: res.data, loading:false});
  // }

  //Search Github users

  // Get single Github user
