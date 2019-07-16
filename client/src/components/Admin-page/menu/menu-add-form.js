import React from 'react'

class MenuAddform extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            cuisines:[],
            price:'',
            image:''
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
            name:this.state.name,
            cuisines:this.state.cuisines,
            price:this.state.price,
            image:this.state.image
        }
       console.log(formData)
       this.props.handleSubmit(formData)
        
    }
    render(){
        return(
            <div>
                <h3>Add Menu Form</h3>
                <form onSubmit={this.handleSubmit}>
                <label> Name:
                    <input type="text" value={this.state.name} onChange={this.handleChange}
                    name="name"/>
                </label><br/>
                <label>Price:
                    <input type="text" value={this.state.price} onChange={this.handleChange}
                    name="price"/>
                </label><br/>

                <label>Cuisines:
                <select value={this.state.cuisine} onChange={this.state.handleChange}>
                    <option value="">select</option>
                    {this.state.cuisines.map(cuisine=>{
                        return <option key={cuisine._id}
                        value={cuisine._id}>{cuisine.name}</option>
                    })}
                </select>
                </label>
                <br/>

                    <label>Image:
                    <input type="file" value={this.state.img} onChange={this.handleChange}
                            name="image" />
                    </label><br />

                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default MenuAddform