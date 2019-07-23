import React from 'react'
import Menu from '../menu'
import Dashboard from './dashboard'
import {BrowserRouter,Link,Route} from 'react-router-dom'
class ClientPage extends React.Component{
    constructor(){
        super()
        this.state={
            menuClick:false,
            dashboardClick:false
        }

    }
    handleMenu=(prevState)=>{

        this.setState({menuClick:!prevState.menuClick})
    }
    handleDashboard=(prevState)=>{

        this.setState({dashboardClick:!prevState.dashboardClick})
    }
    render(){
        return(
            <BrowserRouter>
            <div>
                <div className="row">
                <div className="cal-sm-12 client-top">
                <button className="btn btn-primary client-btn">Table Booking</button>
                </div>  
                </div>              
                <div className="row">
                <div className="col-sm-1">
                <nav className="sidebar-nav">
                    <Link to="/client/dashboard"><button className="btn btn-primary side-button">Dashboard</button></Link>
                    <Link to="/client/menu"><button className="btn btn-primary side-button">Menu</button><br/></Link>
                    
                </nav>
                </div>
                <div className="col-sm-11 menu-nav">
                   <Route path='/client/menu' component={Menu}/>
                    <Route path='/client/dashboard' component={Dashboard}/>

                </div>             
            </div>

            </div>
            </BrowserRouter>
            
        )
    }
}
export default ClientPage