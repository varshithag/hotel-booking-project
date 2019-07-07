import React from 'react'
import axios from 'axios'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const LoginSchema=Yup.object().shape({
    username:Yup.string()
    .min(5, 'Too Short!')
    .required("username can't be blank"),
    email:Yup.string()
    .email('Invaild email..!!')
    .required("email can't be blank"),
    password:Yup.string()
    .min(6, 'Too Short!')
    .max(12, 'Too long..!')
    .required('password required')
})
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

               <div className="container login-box">
                <div className="row">
                   
               <Formik
                    initialValues={{
                        username: '',
                        email: '',
                        password:''
                    }}
                    validationSchema={LoginSchema}
                    onSubmit={this.handleSubmit}>
                     {({ errors, touched })=>(
                         <div className="form-group">
                    <form>
                        <h3>Login</h3>
                <label> Email 
                    <Field type="text" name="email" className="form-control" placeholder="Enter your email"/>
                    {errors.email && touched.email ? (
                            <div>{errors.email}</div>
                    ):null}
                </label><br/>
                <label> Password
                    <Field type="password" name="password" className="form-control" placeholder="Enter your password"/>
                    {errors.password && touched.password ? (
                            <div>{errors.password}</div>
                         ):null}
                </label><br/>
                    <input type="submit" className="btn btn-primary" />
                    
            </form>
            </div>)}
          
            </Formik>
                    </div>

                </div>

           
            
          
         </fieldset>
        )
    }
}
export default Login