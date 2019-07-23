import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

const Sliding=()=>{
return(
  <div>
    <Carousel autoPlay>
       <div>
      <img src="/img/view1.jpg" />
      {/* <p className="legend">Legend 1</p> */}
    </div>
    <div>
      <img src="/img/view2.jpg" />
      {/* <p className="legend">Legend 2</p> */}
    </div>
    <div>
      <img src="/img/view3.jpg" />
      {/* <p className="legend">Legend 2</p> */}
    </div>
    </Carousel>
  </div>
)
}
export default Sliding
