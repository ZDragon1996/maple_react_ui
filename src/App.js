import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./components/header";
import $ from "jquery";
import { Route, Routes } from "react-router-dom";
import ImagePage from "./components/imagePage";
import HomePage from "./components/homePage";
import NotFoundPage from "./components/notFoundPage";
import FilePage from "./components/filePage";
import LoginForm from "./components/loginForm";
import MetamaskLogin from "./components/metamaskLogin";
import RegisterForm from "./components/registerForm";
import APIPage from "./components/apiPage";

class App extends Component {
  state = {
    mouseCursor: "default-cursor-hand",
  };

  handleMouseCursor = (csvClass) => {
    if (
      csvClass.includes(this.state.mouseCursor) ||
      csvClass.includes("blue-cursor") ||
      csvClass.includes("maple-cursor")
    ) {
      return (
        this.state.mouseCursor.replace(this.state.mouseCursor, csvClass) +
        " " +
        csvClass
      );
    }
    return this.state.mouseCursor + " " + csvClass;
  };

  handleNewCursor = (value) => {
    console.log("handleNewCursor", value);
    const cursorList = ["blue-cursor", "maple-cursor"];
    if (value === "Blue Cursor") {
      const mouseCursor = "blue-cursor-hand";
      this.setState({ mouseCursor: mouseCursor });
      let myElements = document.querySelectorAll(".App");
      for (var i = 0; i < myElements.length; i++) {
        for (let j = 0; j < cursorList.length; j++) {
          if (myElements[i].classList.contains(cursorList[j])) {
            myElements[i].classList.remove(cursorList[j]);
          }
        }
        myElements[i].classList.add("blue-cursor");
      }
    } else if (value === "Default Cursor") {
      const mouseCursor = "default-cursor-hand";
      this.setState({ mouseCursor: mouseCursor });
      let myElements = document.querySelectorAll(".App");
      for (var i = 0; i < myElements.length; i++) {
        for (let j = 0; j < cursorList.length; j++) {
          myElements[i].classList.remove(cursorList[j]);
        }
      }
    } else if (value === "Maple Cursor") {
      const mouseCursor = "maple-cursor-hand";
      this.setState({ mouseCursor: mouseCursor });
      let myElements = document.querySelectorAll(".App");
      for (var i = 0; i < myElements.length; i++) {
        for (let j = 0; j < cursorList.length; j++) {
          if (myElements[i].classList.contains(cursorList[j])) {
            myElements[i].classList.remove(cursorList[j]);
          }
        }
        myElements[i].classList.add("maple-cursor");
      }
    }
  };

  render() {
    return (
      <div className="App">
        <Header
          onMouseCursor={this.handleMouseCursor}
          onNewCursor={this.handleNewCursor}
        />
        <div className="content">
          <Routes>
            <Route
              path="/image"
              element={<ImagePage onMouseCursor={this.handleMouseCursor} />}
            />
            <Route path="/file" element={<FilePage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/metamask" element={<MetamaskLogin />} />
            <Route path="/api" element={<APIPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
