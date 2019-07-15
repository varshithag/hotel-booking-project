import React from 'react'
import axios from 'axios'

class MenuForm extends React.Component{
    constructor(){
        super()
        this.state={
            menu:[]
        }
    }
    componentDidMount(){
        console.log('am in console')
        axios.get(`http://localhost:3006/menus`)
        .then(response=>{
            console.log(response.data)
            this.setState(()=>({
                menu:response.data
            }))
        })
        
    }
    render(){
        return(
            <div className="card-deck">
                <div className="card">
                    <div className="container">
                    <div className="row">
                    {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
                    {this.state.menu.map(menuItem=>{
                        return <div className="card-body col-sm-4" >
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    })}
                    </div>
                    </div>
                        {/* </img> */}
                        </div>
                        </div>
                             
)
}
}

export default MenuForm