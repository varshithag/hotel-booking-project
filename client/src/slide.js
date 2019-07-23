import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'


const Sliding=()=>{
return(
  <div>
    <Carousel autoPlay>
       <div>
      <img src="/img/view1.jpg" />
    </div>
    <div>
      <img src="/img/view2.jpg" />
    </div>
    <div>
      <img src="/img/view3.jpg" />
    </div>
    </Carousel>
  </div>
)
}
export default Sliding
