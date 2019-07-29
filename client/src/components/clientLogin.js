import React from 'react'
import Menu from '../menu'
import Dashboard from './dashboard'
import {BrowserRouter,Link,Route} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {setUser} from '../action/a-user'
import Booking from './booking'
class ClientPage extends React.Component{
    constructor(){
        super()
        this.state={
            menuClick:false,
            dashboardClick:false
        }

    }
    componentDidMount(){
        console.log(localStorage.getItem('userAuthToken'))
        axios.get('http://localhost:3006/users/account',{
            headers:{
                'x-auth':localStorage.getItem('userAuthToken')
            }
        })
        .then(response=>{
            console.log(response.data)
            const user=response.data
            this.props.dispatch(setUser(user))
        })  
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
                <div className="col-sm-12 client-top">
                <Link to="/client/booking"><button className="btn btn-primary client-btn">Table Booking</button></Link>
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
                    <Route path='/client/booking' component={Booking}/>


                </div>             
            </div>

            </div>
            </BrowserRouter>
            
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
}
export default connect(mapStateToProps)(ClientPage)
// export default ClientPage