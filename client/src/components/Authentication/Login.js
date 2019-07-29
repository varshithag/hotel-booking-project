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
            axios.post('http://localhost:3006/users/login', formData)
            .then(response => {
                if (response.data.errors) {
                    alert(response.data.errors)
                } else {
                    const token = response.data.token
                    localStorage.setItem('userAuthToken', token)
                    axios.get('http://localhost:3006/users/account',{
                        headers:{
                            'x-auth':localStorage.getItem('userAuthToken')
                        }
                    })
                    .then(response=>{
                        console.log(response.data)
                        const user=response.data                     
                    
                    if(user.isAdmin){
                        this.props.history.push('/adminpage')
                    }
                    this.props.history.push('/client')
                }) 
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
                        
                        <h2>Login</h2>
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