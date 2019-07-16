import React from 'react'
import axios from 'axios'
import MenuAddform from './menu-add-form'

class MenuNew extends React.Component{
    constructor(){
        super()
        this.state={
            menus: []
        }
    }

    componentDidMount() {
        console.log('am in console')
        axios.get(`http://localhost:3006/menus`)
            .then(response => {
                console.log(response.data)
                this.setState(() => ({
                    menus: response.data
                }))
            })
    }

    handleSubmit=(formData)=>{
        axios.post('http://localhost:3006/menus', formData,{
            headers:{
                'x-auth':localStorage.getItem('userAuthToken')
            }
        })
            .then(response => {
               if(response.data.hasOwnProperty('errors')){
                   console.log(response.data.errors)
               }else{
                   this.props.history.push(`/menus`)
               }
            })
    }
    render(){
        return(
            <div>
                <h3>Add New Menu</h3>
                <div className="card-deck">
                    <div className="card">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="row">
                                        {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
                                        {this.state.menus.map(menu => {
                                            return <div className="card-body col-sm-4" >
                                                <h5 className="card-title">Menu title</h5>
                                                <h5 className="card-text"></h5>
                                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        })}
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <MenuAddform handleSubmit={this.handleSubmit} />
                                </div>
                                {/* </img> */}
                            </div>
                        </div>
                    </div>

                </div>
               
            </div>
        )
    }
}

export default MenuNew