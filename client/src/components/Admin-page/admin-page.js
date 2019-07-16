import React from 'react'
import {Link,BrowserRouter,Switch, Route} from 'react-router-dom'


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
            
            <div>
                <Link to="/table"><button>Table</button></Link>
                <Link to="/menus/new"><button>Menu</button></Link>
                <Link to="/room"><button>Room</button></Link>
               
            </div>
           
        )
    }
}

export default AdminPage