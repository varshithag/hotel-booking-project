import React from "react";
import axios from "axios";
import MenuAddform from "./menu-add-form";

class MenuNew extends React.Component {
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
      console.log(response.data[0]);
      this.setState(() => ({
        menus: response.data
      }));
    });
  }

  handleSubmit = formData => {
    axios
      .post("http://localhost:3006/menus", formData, {
        headers: {
          "x-auth": localStorage.getItem("userAuthToken")
        }
      })
      .then(response => {
        if (response.data.hasOwnProperty("errors")) {
          console.log(response.data.errors);
        } else {
          this.props.history.push(`/menus`);
        }
      });
  };
  render() {
    return (
      <div className="p-3 mb-2 bg-light text-dark">
        <div className="card-deck">
          <div className="card">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <div className="row">
                    {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
                    {this.state.menus.map(menu => {
                      return (
                        <div className="card-body col-sm-4" key={menu._id}>
                          <h5 className="card-title">
                            <b>{menu.name}</b>
                          </h5>
                          <h5 className="card-text" />
                          <p className="card-text">{menu.price}</p>
                          <br />
                          <br />
                          {menu.introduction}
                          <br />
                          <button
                            className="btn btn-info"
                            onClick={this.buttonChange}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-info"
                            onClick={this.buttonChange}
                          >
                            Delete
                          </button>

                          <p className="card-text">
                            <small className="text-muted">Delicious</small>
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="col-sm-6">
                  <MenuAddform handleSubmit={this.handleSubmit} />
                </div>
                {/* </img> */}
              </div>
            </div>
            1{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default MenuNew;
