import React from 'react';
import {BrowserRouter, Link, Route,Switch} from 'react-router-dom'
import _ from 'lodash'
import {connect} from 'react-redux'
import Register from './Authentication/Register'
import Login from './Authentication/Login'
import UserAccount from './Authentication/userAccount'
import Logout from './Authentication/Logout'
import './home.css'
// import Stay from './stay'
// import Booking from './booking'
// import HomePage from './homepage'
// import HotelMenu from './menu'
// import Review from './review'
// import NavBar from "./navigation";
import Slide from './slide'

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
    <h2 className="hed">The Payana Hotel</h2>
        <h6 className="sub">Journey Begins....</h6> 
        <Slide/>
    <footer className="page-footer font-small special-color-dark pt-4 btm">
                    <div className="container">
                        <div className="row">
                          <div className="col-sm-4">
                              <div className="card op">  
                                   <div className="card-body">
                                        <h5 className="card-title">Room Features</h5>
                                            <p className="card-text">
                                                <ul>
                                                    <li>
                                                        Direct Dial Phone
                                                    </li>
                                                    <li>
                                                        Electronic Safe
                                                    </li>
                                                    <li>
                                                    Extra Bed On Request
                                                    </li>
                                                </ul> 
                                            </p>                            
                                     </div>  
                                </div>      
                              </div>
                           <div className="col-sm-4">
                               <div className="card op"> 
                                    <div className="card-body">
                                        <h5 className="card-title">Services</h5>
                                         <p className="card-text">
                                        <ul>
                                            <li>
                                            24 Hour Room & Concierge Service 
                                            </li>
                                            <li>
                                            Newspaper (On Request))
                                            </li>
                                            <li>
                                            Extra Bed On Request
                                            </li>
                                        </ul> 
                                         </p>                            
                                      </div>
                                 </div>            
                             </div>
                          
                          <div className="col-sm-4">
                          <div className="card op"> 
                          <div className="card-body">
                              <h5 className="card-title">Technology</h5>
                              <p className="card-text">
                                  <ul>
                                       <li>
                                       40-Inch LCD TV With DVD Player On Request                                       
                                        </li>
                                        <li>
                                        Air-Conditioning With Temperature Control
                                        </li>
                                        <li>
                                        Personalised Check-In And Check-Out Facility
                                        </li>
                                  </ul> 
                                </p>                            
                            </div>                            
                          </div>
                          </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                          <h1>Twitter</h1> 
                        <li className="list-inline-item">
                            <a className="btn-floating btn-tw mx-1">
                               <i className="fab fa-twitter"> </i>
                             </a>
                         </li>
                        </div>
                    </div>
              </div> 
              </footer>
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
