import React, { Component } from "react";

class Center extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="px-4 pt-5 my-5 text-center border-bottom">
          <h1 className="noselect display-4 fw-bold">Demo</h1>
          <div className="col-lg-6 mx-auto">
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5"></div>
          </div>
          <div className="overflow-hidden" style={{ maxHeight: "80vh" }}>
            <div className="container px-5">
              <img
                src="/assets/images/airplane.jpg"
                className="img-fluid border rounded-3 shadow-lg mb-4"
                alt="Example image"
                width="400"
                height="300"
                loading="lazy"
              />
              <span style={{ marginLeft: "5px" }}></span>
              <img
                src="/assets/images/airplane_sketch.jpg"
                className="img-fluid border rounded-3 shadow-lg mb-4"
                alt="Example image"
                width="400"
                height="300"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Center;
