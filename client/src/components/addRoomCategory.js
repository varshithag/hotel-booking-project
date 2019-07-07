import React from 'react'
import axios from 'axios'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
const RoomCategorySchema=Yup.object().shape({
    roomType:Yup.string()
    .min(3,'Too Short')
    .required("Room type can't be empty"),
    occupancy:Yup.number()
    .positive('number should be positive'),
    bedType:Yup.string(),
    price:Yup.number()
    .required("price cannot be empty")
})
class RoomCategory extends React.Component{
    handelSubmit=(values)=>{
        axios.post(`http://localhost:3006/roomcategory`,values)
            .then(response=>{
                console.log(response.data)
                if(response.data.errors){
                    alert(response.data.errors)
                }else{
                    // this.props.history.push('/users/admin')
                }
            })
    }
    render(){
        return(
            <div>
                <h2>Room Addition</h2>
                <Formik
                initialValues={{
                    roomType:'',
                    occupancy:0,
                    bedType:'',
                    price:0
                }}
                validationSchema={RoomCategorySchema}
                    onSubmit={this.handelSubmit}>
                {({errors,touched})=>(
                    <Form>
                        <label>
                            RoomType
                            <Field type="text" name="roomType" /> 
                        {errors.username && touched.username ? (
                            <div>{errors.username}</div>
                         ):null}                           
                        </label>
                        <label>
                        occupancy
                            <Field type="number" name="occupancy" /> 
                        {errors.occupancy && touched.occupancy ? (
                            <div>{errors.occupancy}</div>
                         ):null}                           
                        </label>
                        <label>
                        Bed Type
                            <Field type="string" name="bedType"/> 
                        {errors.bedType && touched.bedType ? (
                            <div>{errors.bedType}</div>
                         ):null}                           
                        </label>
                        <label>
                            Price
                            <Field type="text" name="price" /> 
                        {errors.price && touched.price ? (
                            <div>{errors.price}</div>
                         ):null}                           
                        </label>
                        <button type="submit">Add</button>
                    </Form>
                )}
                
                </Formik>
            </div>

        )
    }
}
export default RoomCategory