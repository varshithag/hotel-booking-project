import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {setUser} from '../action/a-user'

class UserAccount extends React.Component{

    componentDidMount(){
        console.log(localStorage.getItem('userAuthToken'))
        axios.get('http://localhost:3006/users/account',{
            headers:{
                'x-auth':localStorage.getItem('userAuthToken')
            }
        })
        .then(response=>{
            console.log(response.data)
            const user=response.data
            this.props.dispatch(setUser(user))
        })
    }
    render(){
        return(
            <div>
                <p>{this.props.user.username}</p>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
}
export default connect(mapStateToProps)(UserAccount)