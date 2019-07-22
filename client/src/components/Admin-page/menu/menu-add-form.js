import React from 'react'
import './menu.css'

class MenuAddform extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            cuisines:[],
            price:'',
            image:'',
            introduction:''
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
            image:this.state.image,
            introduction:this.state.introduction
        }
       console.log(formData)
       this.props.handleSubmit(formData)
        
    }
    render(){
        return(
            <div className="menuaddform" >
                <h3>Add Menu Form</h3>
                <form className="form-group" action="/uploadfile" encType="multipart/form-data" method="post"
                                onSubmit={this.handleSubmit}>
                <label> Name:
                    <input type="text" value={this.state.name} onChange={this.handleChange} className="form-control"
                    name="name"/>
                </label><br/>
                <label>Price:
                    <input type="text" value={this.state.price} onChange={this.handleChange} className="form-control"
                    name="price"/>
                </label><br/>

                <label>Cuisines:
                <select  value={this.state.cuisines} onChange={this.handleChange} name="cuisines">
                    <option value="">select</option>
                    {this.state.cuisines.map(cuisine=>{
                        return <option key={cuisine._id}
                        >{cuisine.name}</option>
                    })} 
                </select>
                </label>
                <br/>
                    
                    <label>Image:
                    <input type="file" value={this.state.img} onChange={this.handleChange} className="form-control"
                            name="image" />
                    </label><br />
                    

                    <label>description:
                        <textarea type="text" value={this.state.introduction} onChange={this.handleChange} className="form-control" name="introduction"/>
                    </label>

                    <input type='submit' className="btn btn-primary"/>
                </form>
            </div>
        )
    }
}

export default MenuAddform