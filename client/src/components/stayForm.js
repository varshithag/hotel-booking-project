

import React from 'react'

class StayForm extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                 <h3>Your Stay</h3>
 <label> CheckIn Time</label><label>{this.props.checkIn._d}</label>
 <label>Date</label><br/>
 <label>CheckOut Time</label><br/>
 <label>Noof People</label><br/>
 <label>Room Type</label><br/>
 <label>Tax</label><br/>
 <label> Add-ons</label><br/>
 <label>Total amount</label><br/>
<button className="btn btn-primary">Continue</button>
            </div>
        )
    }
}

export default StayForm