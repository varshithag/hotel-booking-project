import React from 'react';
import {BrowserRouter, Link, Route,Switch} from 'react-router-dom'
import _ from 'lodash'
import {connect} from 'react-redux'
import Register from './components/Authentication/Register'
import Login from './components/Authentication/Login'
import UserAccount from './components/Authentication/userAccount'
import Logout from './components/Authentication/Logout'
import './home.css'
import Home from './components/homepage'
// import Stay from './stay'
// import Booking from './booking'
// import HomePage from './homepage'
// import HotelMenu from './menu'
// import Review from './review'
// import NavBar from "./navigation";


class App extends React.Component{
  render(){
  return(
    <BrowserRouter>
    
    <ul>
      {_.isEmpty(this.props.user)?(
        <div className="c">
            <Link to="/users/register">Register</Link> 
            <Link to="/users/login">Login</Link>
        </div>
      ):(
            <div>

              <li><Link to="/users/account">UserAccount</Link></li><br /><br />
              <li><Link to="/users/logout">Logout</Link></li> 
            </div>
      )}
    </ul>
        <div>
        <h2 className="hed">The Payana Hotel</h2>
        <h6 className="sub">Journey Begins....</h6> 
        
        </div>
        
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="nav-item navlink" to="/stay">Stay</Link>
            <Link className="nav-item navlink">Booking</Link>
            <Link className="nav-item navlink">Menu</Link>
            <Link className="nav-item navlink">Review</Link>
        </nav>
        
        <Switch>
      <Route path="/users/register" component={Register}/>
      <Route path="/users/login" component={Login}/>
      <Route path="/users/account" component={UserAccount}/>
      <Route path="/users/logout" component={Logout}/>
      <Home/>
      {/* <Route path="/stay" component={Stay}/> */}
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
