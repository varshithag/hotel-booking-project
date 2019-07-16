import React from 'react'
import Calendar from 'react-calendar'
class Reserve extends React.Component{
    constructor(){
        super()
        this.state={
            date:new Date()
        }
    }
        
    handleChange=(e)=>{
       const reserve=e
       const ddd= reserve.getFullYear() + '-'+ reserve.getMonth()+ '-'+ reserve.getDate()
       console.log(e)
        console.log(ddd)
        console.log(new Date(ddd))
        this.setState({date: new Date(ddd)})
        
    }

    render(){
        return(
            <div>
             <Calendar
             onChange={this.handleChange}
             value={this.state.date}
             className=""
            />
             
            </div>
        )
    }
}
export default Reserve