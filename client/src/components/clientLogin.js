import React from 'react'
import {Link} from 'react-router-dom'
class ClientPage extends React.Component{
    constructor(){
        super()

    }
    render(){
        return(
            <div>
                <button>Table Booking</button>
                <div className="row">
                <div className="col-sm-1">
                <nav class="nav flex-column">
                    <button className="btn btn-primary">Menu</button>
                    <button className="btn btn-primary">Dashboard</button>
                </nav>
                </div>
                <div className="col-sm-9">
                </div>             
            </div>

            </div>
            
        )
    }
}
export default ClientPage