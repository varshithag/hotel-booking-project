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
    .required("price cannot be empty"),
    description:Yup.string()
    .required("description cannot be empty")
})
class RoomCategory extends React.Component{
    handelSubmit=(values)=>{
        axios.post(`http://localhost:3006/roomcategory`,values)
            .then(response=>{
                console.log(response.data)
                if(response.data.errors){
                    alert(response.data.errors)
                }else{
                    console.log('done')
                    // this.props.history.push('/users/admin')
                }
            })
    }
    render(){
        return(
            <div>
                <h2 className="h">Room Addition</h2>
                <Formik
                initialValues={{
                    image:'',
                    roomType:'',
                    occupancy:0,
                    bedType:'',
                    price:0
                }}
                validationSchema={RoomCategorySchema}
                    onSubmit={this.handelSubmit}>
                {({errors,touched})=>(
                    <Form className="form-group box room-box" enctype="multipart/form-data">
                        <label>
                            RoomType
                            <Field type="text" name="roomType" className="form-control" /> 
                        {errors.username && touched.username ? (
                            <div>{errors.username}</div>
                         ):null}                           
                        </label><br/>
                        <label>
                        occupancy
                            <Field type="number" name="occupancy" className="form-control" /> 
                        {errors.occupancy && touched.occupancy ? (
                            <div>{errors.occupancy}</div>
                         ):null}                           
                        </label><br/>
                        <label>
                        Bed Type
                            <Field type="string" name="bedType" className="form-control"/> 
                        {errors.bedType && touched.bedType ? (
                            <div>{errors.bedType}</div>
                         ):null}                           
                        </label><br/>
                        <label>
                        Description
                            <textarea type="string" name="description" className="form-control"/> 
                        {errors.description && touched.description ? (
                            <div>{errors.description}</div>
                         ):null}                           
                        </label><br/>

                        <label>
                            Price
                            <Field type="text" name="price" className="form-control" /> 
                        {errors.price && touched.price ? (
                            <div>{errors.price}</div>
                         ):null}                           
                        </label><br/>
                        <Field type="file" name="image"/> 
                            {errors.image && touched.image ? (
                            <div>{errors.image}</div>
                         ):null}                           
                        <br/>
                        <button type="submit" className="btn btn-secondary">Add</button>
                    </Form>
                )}
                </Formik>
            </div>
        )
    }
}
export default RoomCategory
