import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class Stay extends React.Component{
    constructor(){
        super()
        this.state={
            categories:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3006/roomcategory')
        .then(response=>{
            console.log(response.data)
            this.setState({categories:response.data})
        })
    }
    render(){
        return(
            <div className="container">
                <div className="row">
            {this.state.categories.map((category)=>{
                return<div className='col-sm-4'>
                <div className="card">
                    <img className="card-img-top" src=""/>
                        <div className="card-body">
                            <h5 className="card-title">{category.roomType}</h5>
                            <p className="card-text">{category.description}</p>
                            <label className="card-text">Bed Type:  {category.bedType}</label><br/>
                            <div className="row">
                                <div className="col-sm-6">
                            <label className="card-text">Occupancy: {category.occupancy}</label><br/>
                            </div>
                            <div className="col-sm-6">
                            <label className="card-text">Price: {category.price}</label><br/>
                            </div>
                            </div>
                           {/* <Link to="/reserve"> */}
                               <button className="btn btn-primary" >proceed</button> 
                               {/* </Link>  */}
                        </div>
                    </div>  
                    </div>
            })}
                    
                 
                </div>
        </div>
        )
      
    }
}
export default Stay