import React from 'react'
import {Link} from 'react-router-dom'
import CuisineList from './cuisine/cuisine-list'
import CuisineNew from './cuisine/cuisine-new';

class AdminPage extends React.Component{
    constructor(){
        super()
        this.state={
            table:'',
            menu:'',
            room:''
           
        }
    }
    render(){
        return(
           
            
            <div className="d-flex justify-content-around btn-group btn-group-lg btn-group p-3 mb-2 bg-light text-dark" >
                <Link to="/table"><button className="btn btn-secondary">Table</button></Link>
                <Link to="/menus/new"><button className="btn btn-secondary">Menu</button></Link>
                <Link to="/room"><button className="btn btn-secondary">Room</button></Link>
                <CuisineList />
                <CuisineNew />
               
            </div>
           
        )
    }
}

export default AdminPage