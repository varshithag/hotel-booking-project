import React from 'react'


class Slide extends React.Component{
  render(){
    return(
          <div className="container">
          <div className="row">
              <div className="col-sm-12">
                  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">                       
                       <div className="carousel-item active" roles="listbox">
                          <div className="item active">                      
                                <img className="d-block w-100" src="/img/view1.jpg" alt={"image"}/>
                                <div className="carousel-caption">
                                  <h1>first slide</h1>
                                </div>
                          </div>
                          <div className="carousel-item">                      
                                <img className="d-block w-100" src="/img/view2.jpg" alt={"image"}/>
                                <div className="carousel-caption">
                                  <h1>Second slide</h1>
                                </div>
                          </div>
                          <div className="carousel-item">                     
                                <img className="d-block w-100" src="/image/view3.jpg" alt={"image"}/>
                                <div className="carousel-caption">
                                  <h1>Third slide</h1>
                                </div>
                          </div>
                          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                          </a>
                          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                          </a>
                          
                    </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
export default Slide