import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import MenuAddform from './menu-add-form';

class MenuEdit extends React.Component{
    constructor(){
        super()
        this.state={
            menu:{}
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`http://localhost:3006/menus/edit/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('userAuthToken')
            }
        })
        .then(response=>{
            this.setState(()=>({
                menu:response.data
            }))
        })
    }

    handleSubmit=(FormData)=>{
        axios.put(`http://localhost:3006/menus/${this.state.menu._id}`, FormData,{
            headers:{
                'x-auth':localStorage.getItem('userAuthToken')
            }
        })
        .then(response=>{
            if(response.data.hasOwnProperty('error')){
                console.log(response.data.errors)
            } else{
                this.props.history.push(`menus`)
            }
        })
    }
    render(){
        return(
            <div>
                <h3>Edit menu</h3>
                <MenuAddform handleSubmit={this.handleSubmit} menu={this.state.menu}/>
                <Link to="/menu">Back</Link>
            </div>
        )
    }
}

export default MenuEdit