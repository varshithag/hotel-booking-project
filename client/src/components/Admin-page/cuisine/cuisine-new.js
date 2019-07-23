import React from 'react'
import CuisineForm from './cuisine-form'
import axios from 'axios';

class CuisineNew extends React.Component {

    handleSubmit = (formData) => {
        axios.post('http://localhost:3006/cuisines', formData, {
            headers: {
                'x-auth': localStorage.getItem('userAuthToken')
            }
        })
            .then(response => {
                if (response.data.hasOwnProperty('errors')) {
                    console.log(response.data.errors)
                } 
                // else {
                //     this.props.history.push(`/cuisines`)
                // }
            })
    }
    render() {
        return (
            <div>
                <h2>Add Cuisines</h2>
                <CuisineForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}
export default CuisineNew