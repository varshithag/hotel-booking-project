import React from 'react'
import "react-dates/initialize";
// import "./styles.css";
import DatePicker from "./datepicker"
import StayForm from './stayForm'
class Reserve extends React.Component{
    constructor(){
        super()
        this.state={
            checkIn:'',
            checkOut:'',
            isClicked:true
        

        }
        this.handleChange=this.handleChange.bind(this)
    }
      
   handleChange(startDate,endDate){
       this.setState({isClicked:false})
    this.setState({checkIn:startDate})
    // this.setState({endDate})
   }

    render(){
        return(
            <div className="container">
            <div className="row"> 
            <div className="col-sm-6">
                <form>
                    <h4>Select CheckIn-CheckOut Date  </h4>
                    {this.state.isClicked && (<DatePicker handleChange={this.handleChange}/>) } 
                    <fieldset className="fi">
                        <legend>Add-on's</legend>
                        <div className="row">
                            
                            <div className="col-sm-4">
                                <h4>Break Fast</h4> 
                            </div>
                            <div className="col-sm-6">
                                <h4>Price:Rs 500</h4> 
                            </div>
                            <div className="col-sm-1">
                                <input type="checkbox"/>
                            </div>
                            </div>
                           
                        
                        <div className="row">
                        
                            <div className="col-sm-4">
                                <h4>Lunch</h4> 
                            </div>
                            <div className="col-sm-6">
                                <h4>Price:Rs 700</h4> 
                            </div>
                            <div className="col-sm-1">
                                <input type="checkbox"/>
                            </div>
                            </div>
                           
                        
                        <div className="row">                        
                            <div className="col-sm-4">
                                <h4>Dinner</h4> 
                            </div>
                            <div className="col-sm-6">
                                <h4>Price:Rs 500</h4> 
                            </div>
                            <div className="col-sm-1">
                                <input type="checkbox"/>
                            </div>
                            </div>                           
                        
                    </fieldset>
                 </form>             
                 </div>
                 <div className="col-sm-4 reserveborder">
                    {!this.state.isClicked&&(<StayForm checkIn={this.state.checkIn} />)}
                 </div>
                {/* <p>{this.state.checkIn.getDate()}</p> */}
               
            </div>
            </div>
        )
    }
}
export default Reserve