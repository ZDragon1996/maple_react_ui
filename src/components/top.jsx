import React, { Component } from "react";

class Top extends Component {
  state = {
    uploadButtonDisable: true,
  };

  handleFilename = () => {
    const upload_btn = document.getElementById("file-upload");
    const upload_span = document.getElementById("file-name");
    const file_name = upload_btn.value.split("\\").pop();
    if (file_name) {
      upload_span.innerHTML = file_name;
      this.EnableUploadButton();
    } else {
      upload_span.innerHTML = "No file chosen, yet";
    }
  };

  EnableUploadButton = () => {
    this.setState({ uploadButtonDisable: false });
  };

  uploadImage = () => {
    const fileNameElement = document.getElementById("file-name");
    const fileName = fileNameElement.innerHTML;
    console.log(fileNameElement.innerHTML);
    if (!fileName || fileName === "No file chosen, yet") {
      console.log("Empty file name");
    } else {
      console.log("file name ", fileName);
      fileNameElement.innerHTML = "No file chosen, yet";
      this.setState({ uploadButtonDisable: true });
    }
  };

  render() {
    return (
      <div>
        <div className="px-4 pt-5 my-5 text-center border-bottom">
          <h1 className="noselect display-4 fw-bold">
            Convert Image to Sketch
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="noselect lead mb-4">Convert Image to Sketch image</p>
            <label
              htmlFor="file-upload"
              className={this.props.onMouseCursor(
                "noselect custom-file-upload"
              )}
            >
              <img
                src="/assets/images/add-image-48.png"
                style={{ width: "35px", height: "35px" }}
              />
              Upload an Image
            </label>
            <input
              className="lead mb-4 "
              type="file"
              id="file-upload"
              onChange={this.handleFilename}
            ></input>
            <span id="file-name" className="noselect">
              No file chosen, yet
            </span>

            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
              <button
                disabled={this.state.uploadButtonDisable}
                type="button"
                className={this.props.onMouseCursor(
                  "btn btn-primary btn-lg px-4 me-sm-3 mt-4"
                )}
                onClick={this.uploadImage}
              >
                Upload
              </button>
            </div>
          </div>
          <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
            <div className="container px-5"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Top;
