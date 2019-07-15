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
    handleSubmit = (formData) => {
        console.log('am in outside the handlesubmit')
        axios.post('http://localhost:3006/users/login', formData)
            .then(response => {
                console.log(response.data)
                if (response.data.errors) {
                    alert(response.data.errors)
                } else {
                    const token = response.data.token
                    console.log('am in handlesubmit')
                    localStorage.setItem('userAuthToken', token)
                    this.props.history.push('/users/account')
                }
            })
    }
    render(){
        return(
               <div className="container login-box">
                <div className="row"> 
               <Formik
                    initialValues={{
                        email: '',
                        password:''
                    }}
                    validationSchema={LoginSchema}
                    onSubmit={this.handleSubmit}>
                     {({ errors, touched })=>(
                            <Form className="form-group">
                        
                        <h3>Login</h3>
                <label> Email 
                    <Field type="text" name="email" className="form-control" placeholder="Enter your email"/>
                    {errors.email && touched.email ? (
                            <div>{errors.email}</div>
                    ):null}
                </label><br/>
                <label> Password
                    <Field type="password" name="password" className="form-control" placeholder="***********"/>
                    {errors.password && touched.password ? (
                            <div>{errors.password}</div>
                         ):null}
                </label><br/>
                    <button type="submit" className="btn btn-primary">Submit</button>   
            </Form>
            )}
            </Formik>
            </div>
            </div>
        )
    }
}
export default Login