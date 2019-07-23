import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';


class CuisineList extends React.Component {
    constructor() {
        super()
        this.state = {
            cuisines: []
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:3006/cuisines`, {
            headers: {
                'x-auth': localStorage.getItem('userAuthToken')
            }
        })
            .then(response => {
                this.setState(() => ({
                    cuisines: response.data
                }))
            })
    }
    handleRemove = (cuisine) => {
        const confirmRemove = window.confirm('Are You sure..?')
        if (confirmRemove) {
            axios.delete(`http://localhost:3006/cuisines/${cuisine._id}`, {
                headers: {
                    'x-auth': localStorage.getItem('userAuthToken')
                }
            })
                .then(() => {
                    this.setState((prevState) => ({
                        cuisines: prevState.cuisines.filter(cuisine1 => {
                            return cuisine1._id !== cuisine._id
                        })
                    }))
                })
        }
    }

    render() {
        return (
            <div>
                <h2>Cuisines:{this.state.cuisines.length}</h2>
                <ul>
                    {this.state.cuisines.map(cuisine => {
                        return <li key={cuisine._id}>{cuisine.name}<button onClick={() => { this.handleRemove(cuisine) }}>X</button></li>
                    })}
                </ul>
                <Link to="/cuisines/new">Add Cuisine</Link>
            </div>
        )
    }
}

export default CuisineList