import React from 'react';
import {BrowserRouter, Link, Route,Switch} from 'react-router-dom'
import _ from 'lodash'
import {connect} from 'react-redux'
import Register from './Authentication/Register'
import Login from './Authentication/Login'
import UserAccount from './Authentication/userAccount'
import Logout from './Authentication/Logout'

class App extends React.Component{
  render(){
  return(
    <BrowserRouter>
    <ul>
      {_.isEmpty(this.props.user)?(
        <div>
            <li><Link to="/users/register">Register</Link><br /><br /></li> 
            <li><Link to="/users/login">Login</Link><br /><br /></li> 
        </div>
      ):(
            <div>

              <li><Link to="/users/account">UserAccount</Link></li><br /><br />
              <li><Link to="/users/logout">Logout</Link></li> 
            </div>
      )}
    </ul>
     
    <Switch>
      <Route path="/users/register" component={Register}/>
      <Route path="/users/login" component={Login}/>
      <Route path="/users/account" component={UserAccount}/>
      <Route path="/users/logout" component={Logout}/>
    </Switch>
    </BrowserRouter>
  )
}
}
const mapStateToProps=(state)=>{
  return{
    user:state.user
  }
}

export default connect(mapStateToProps)(App)
