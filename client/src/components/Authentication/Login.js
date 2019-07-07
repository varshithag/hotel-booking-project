import React from 'react'
import axios from 'axios'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const LoginSchema=Yup.object().shape({
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
            <fieldset>
               <legend>Login</legend>
               <Formik
                    initialValues={{
                        username: '',
                        email: '',
                        password:''
                    }}
                    validationSchema={LoginSchema}
                    onSubmit={this.handleSubmit}>
                     {({ errors, touched })=>(
            <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                <label> Email:
                    <Field type="text" name="email" className="form-control"/>
                    {errors.email && touched.email ? (
                            <div>{errors.email}</div>
                         ):null} 
                </label>
                </div>
                <label> Password:
                    <Field type="password"   name="password" className="form-control" />
                    {errors.password && touched.password ? (
                            <div>{errors.password}</div>
                         ):null} 
                </label><br/><br/>
                    <button type="submit"> Login</button>  
            </form>)}
            </Formik>
         </fieldset>
        )
    }
}
export default Login