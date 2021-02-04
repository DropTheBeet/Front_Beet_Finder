import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import GithubState from './context/github/githubState'
import AlertState from './context/alert/alertState'
import './App.css';

const App = () => {

  return  (
    <GithubState>
      <AlertState>
      <Router>
    <div className="App">
      <Navbar />
      <div className='container'>
        <Alert />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About} />
          <Route exact path='/user/:login' component={User} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
    </Router>
    </AlertState>
    </GithubState>
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
