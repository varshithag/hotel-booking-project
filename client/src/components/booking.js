import React from 'react'
class Booking extends React.Component{
    constructor(){
        super()
        this.state={
            adult:'',
            adultError:'',
            children:'',
            childrenError:'',
            bookingDate:'',
            bookingDateError:'',
            bookingtime:'',
            bookingtimeError:''
        }
    }
    validate=()=>{
        let isError=false
            const errors={
                adultError:'',
                childrenError:'',
                bookingDateError:'',
                bookingtimeError:''
            }
            if(this.state.adult<=0){
                isError=true
                errors.adultError='Invalid Count'
            }
            if(this.state.children<0 || this.state.children >10 ){
                isError=true
                errors.childrenError='Invalid Count'
            }
            if(this.state.bookingDate<new Date()){
                isError=true
                errors.bookingDateError='Invalid Date'
            }
            if(this.state.bookingtime<new Date().getHours()){
                isError=true
                errors.bookingDateError='Invalid time'
            }
            this.setState({
                ...this.state,
                ...errors
            })
            return isError
    }
    componentDidMount(){
        const bookingData=JSON.parse(localStorage.getItem('tableBooking'))
        // console.log(bookingData.adult)
        if(bookingData){
            this.setState({adult:bookingData.adult,
            children:bookingData.children,
            bookingDate:bookingData.bookingDate,
            bookingtime:bookingData.bookingtime
            })
        }
    }
    handleChange=(e)=>{
        e.persist()
        console.log(e.target.value)
        this.setState(()=>({
            [e.target.name]:e.target.value
        }))
    }
    handleSubmit=(e)=>{
        console.log('i am in submit')
        e.preventDefault()
        const err=this.validate()
        if(!err){
            const formData={
                adult:this.state.adult,
                children:this.state.children,
                bookingDate:this.state.bookingDate,
                bookingtime:this.state.bookingtime
            }
            // const user=JSON.parse()
    
            if(localStorage.getItem("userAuthToken")){
    
                console.log("Thank you for booking ,Booking will be Confirmed within 5 minits")
            }
            else{
                console.log(JSON.stringify(formData))
                localStorage.setItem("tableBooking",JSON.stringify(formData))
                this.props.history.push('/users/login')
            }
        }
        
        
    }
    render(){
        return(
            <div>
                <div className="booking form-group">
                    <h3>Table Booking</h3>
                    <form className="form-group">
                    <label>Noof Adults</label>
                    <input type="number" errortext={this.state.adultError} className="form-control" value={this.state.adult} onChange={this.handleChange} name="adult"/>
                    <br/><span>{this.state.adultError}</span><br/>
                    <label>Noof Childerns</label>
                    <input type="number" errortext={this.state.childrenError} className="form-control" value={this.state.children} onChange={this.handleChange} name="children"/><br/>
                    <span>{this.state.childrenError}</span> <br/>
                    <label>Select the Day</label>
                    <input type="date" errortext={this.state.bookingDateError} className="form-control" value={this.state.bookingDate} onChange={this.handleChange} name="bookingDate"/><br/>
                    <span>{this.state.bookingDateError}</span><br/>
                    <label>Select the Time</label>
                    <input type="time" errortext={this.state.bookingtimeError} className="form-control" value={this.state.bookingtime} name="bookingtime" onChange={this.handleChange}/>
                    <br/>
                    <span>{this.state.bookingtimeError}</span>
                    <button onClick={this.handleSubmit} className="btn btn light booking-button">ok</button>
                </form>
                  
                
                </div>
                
            </div>
        )
    }
}
export default Booking