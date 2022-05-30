import React, { Component } from "react";
import httpService from "./common/services/httpService";
import serverService from "./common/services/serverService";

class APIPage extends Component {
  state = {
    data: {},
    apiServerStatusCSS: "",
  };
  // async componentDidMount() {
  //   //pending > fullfilled(success) or rejected(failure)
  //   try {
  //     const status = await serverService.getServerStatus();
  //     console.log("status", status);
  //     this.setState({ apiServerStatusCSS: status });
  //   } catch (ex) {
  //     if (ex.response && ex.response.status === 429) {
  //       alert("Too many request");
  //     }
  //   }
  // }

  interval = setInterval(async () => {
    console.log("Someone Scheduled me to run every second");
    try {
      const status = await serverService.getServerStatus();
      console.log("status", status);
      this.setState({ apiServerStatusCSS: status });
    } catch (ex) {
      if (ex.response && ex.response.status === 429) {
        console.log("Too many request");
      }
      await clearInterval(this.interval);
    }
  }, 60000);

  render() {
    return (
      <div>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold noselect">Location API</h1>
            <p className="col fs-4 noselect">
              Regular/anonymous users are limited to 200 API calls per day.
            </p>
            <div>
              <img className={`${this.state.apiServerStatusCSS} noselect`} />
              <span className="noselect"> API Server Status</span>
            </div>
            <button className="btn btn-primary btn-lg" type="button">
              Support Creater
            </button>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2 className="noselect">Get States API</h2>
              <a
                href="http://127.0.0.1:8000/api/location/states"
                target="_blank"
              >
                http://127.0.0.1:8000/api/location/states
              </a>
              <br />
              <a
                href="http://127.0.0.1:8000/api/location/states/?format=json"
                target="_blank"
                className="noselect"
              >
                Raw Json Format
              </a>
              <p className="noselect">Returns all 50 US States</p>
              <img
                id="hideimageformobile"
                src="/assets/images/api_image1.png"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2 className="noselect">Get States with Cities API</h2>
              <a
                href="http://127.0.0.1:8000/api/location/states_and_cities"
                target="_blank"
              >
                http://127.0.0.1:8000/api/location/states_and_cities
              </a>
              <br />
              <a
                href="http://127.0.0.1:8000/api/location/states_and_cities/?format=json"
                target="_blank"
                className="noselect"
              >
                Raw Json Format
              </a>
              <p className="noselect">Returns all 50 US States and Cities</p>
              <img
                src="/assets/images/api_image2.png"
                id="hideimageformobile"
              />
            </div>
          </div>

          <div className="col">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2 className="noselect">Get Cities by State API</h2>
              <a
                href="http://127.0.0.1:8000/api/location/states/tx"
                target="_blank"
              >
                http://127.0.0.1:8000/api/location/states/tx
              </a>
              <br />
              <a
                href="http://127.0.0.1:8000/api/location/states/tx/?format=json"
                target="_blank"
                className="noselect"
              >
                Raw Json Format
              </a>
              <p className="noselect">Returns cities by state code(TX,NY,CA)</p>
              <img
                src="/assets/images/api_image3.png"
                id="hideimageformobile"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default APIPage;
