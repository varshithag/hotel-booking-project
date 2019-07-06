import React from 'react'
import axios from 'axios'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const RegisterSchema=Yup.object().shape({
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

class Register extends React.Component{
  
    handleSubmit=(values)=>{
        axios.post(`http://localhost:3006/users/register`,values)
            .then(response=>{
                console.log(response.data)
                if(response.data.errors){
                    alert(response.data.errors)
                }else{
                    this.props.history.push('/users/login')
                }
            })
    }


    render(){
        return(
            <div>
            <h1>Register Form</h1>
                <Formik
                    initialValues={{
                        username: '',
                        email: '',
                        password:''
                    }}
                    validationSchema={RegisterSchema}
                    onSubmit={this.handleSubmit}>
                     {({ errors, touched })=>(
                         <Form>
                        <label>
                            <Field type="text" placeholder="Username.." 
                                name="username" />
                                {errors.username && touched.username ? (
                                    <div>{errors.username}</div>
                                ):null}
                        </label> <br /><br />
                        <label>
                            <Field type="email" placeholder="abc...@gmail.com" name="email" />
                            {errors.email && touched.email ? (<div>{errors.email}</div>):null}
                        </label> <br /><br />
                        <label>
                            <Field type="password" placeholder="password" name="password" />
                            {errors.password && touched.password ? (<div>{errors.password}</div>):null}
                        </label><br /><br />
                        <button type="submit">Submit</button>
                    </Form>
                )}
               </Formik >      
            </div>  
        )
    }
}

export default Register