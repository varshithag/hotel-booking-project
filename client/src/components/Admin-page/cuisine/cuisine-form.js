import React from 'react'

class CuisineForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: ""
        }
    }
    handleChange = (e) => {
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: this.state.name
        }
        console.log(formData)
        this.props.handleSubmit(formData)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-group">
                <label> Tagname:
                    <input type="text" value={this.state.value} className="form-control"
                        onChange={this.handleChange} name="name" />
                </label> <br /><br />

                <input type="submit" className="btn btn-dark" />
            </form>
        )
    }
}

export default CuisineForm