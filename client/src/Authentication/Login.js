import React from 'react'
import axios from 'axios'

class Login extends React.Component{
    constructor(){
        super()
        this.state={
            email:"",
            password:""
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
            email:this.state.email,
            password:this.state.password
        }
        console.log(formData)
        axios.post(`http://localhost:3006/users/login`,formData)
        .then(response=>{
            console.log(response.data)
            if(response.data.errors){
                alert(response.data.token)
            }else{
                const token=response.data.token
                console.log(token)
                localStorage.setItem('userAuthToken',token)
                this.props.history.push('/users/account')
            }
        })
    }
    render(){
        return(
            <fieldset >
               <legend>Login</legend>
            <form onSubmit={this.handleSubmit}>
                <label> Email:
                    <input type="text" value={this.state.email}
                    onChange={this.handleChange} name="email"
                    />
                </label><br/><br/>
                <label> Password:
                    <input type="password" value={this.state.password} onChange={this.handleChange} name="password"/>
                </label><br/><br/>
                    <input type="submit" />
            </form>
         </fieldset>
        )
    }
}
export default Login