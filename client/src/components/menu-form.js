import React from "react";
import axios from "axios";

class MenuForm extends React.Component {
  constructor() {
    super();
    this.state = {
      menus: []
    };
  }
  componentDidMount() {
    console.log("am in console");
    axios.get(`http://localhost:3006/menus`).then(response => {
      console.log(response.data);
      this.setState(() => ({
        menus: response.data
      }));
    });
  }
  render() {
    return (
      <div div class="p-3 mb-2 bg-light text-dark">
        <div className="card-deck">
          <div className="card">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <div className="row">
                    {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
                    {this.state.menus.map(menu => {
                      return (
                        <div className="card-body col-sm-4">
                          <h5 className="card-title">
                            <b>Menu title</b>
                          </h5>
                          <h5 className="card-text">{menu.name}</h5>
                          <p className="card-text">{menu.price}</p>
                          <br />
                          <br />
                          {menu.cuisine}
                          <br />
                          {menu.introduction}
                          <br />
                          <p className="card-text">
                            <small className="text-muted">Delicious</small>
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* </img> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuForm;
