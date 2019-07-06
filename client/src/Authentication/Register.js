import React from 'react'
import axios from 'axios'

class Register extends React.Component{
   constructor(){
       super()
       this.state={
           username: "",
           email: "",
           password: ""
       }
   }
    
    handleChange=(e)=>{
        e.persist()
        this.setState(()=>({
            [e.target.name]:e.target.value
        }))
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        axios.post(`http://localhost:3006/users/register`,formData)
            .then(response=>{
                console.log(response.data)
                if(response.data.errors){
                    alert(response.data.message)
                }else{
                    this.props.history.push('/users/login')
                }
            })
    }


    render(){
        return(
            <fieldset>
              <legend>Register</legend>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" placeholder="Username.." onChange={this.handleChange} value={this.state.username}
                            name="username"/>
                </label> <br/><br/>
                <label>
                        <input type="text" placeholder="abc...@gmail.com" value={this.state.email} onChange={this.handleChange} name="email" />
               
                </label> <br/><br/>
                <label>
                        <input type="password" placeholder="password" value={this.state.password} onChange={this.handleChange} name="password"/>
                 
                </label><br/><br/>
                

                <input type="submit"/>
            </form>
            </fieldset>
        )
    }
}

export default Register