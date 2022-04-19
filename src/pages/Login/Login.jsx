import React, { Component } from "react";

export default class Login extends Component {
  handleLogin = () => {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    // Xử lý nếu username và password = cybersoft chuyển đến trang profile và ngược lại thì alert ra tài khoản mật khẩu không đúng
    if (username === "cybersoft" && password === "cybersoft") {
      //Chuyển hướng đến trang this.props.history
      this.props.history.push("/profile");
      //Lưu dữ liệu vào localstorage
      localStorage.setItem("userLogin", "cybersoft");
    } else {
      alert("Tài khoản hoặc mật khẩu không đúng!");
    }
  };

  render() {
    return (
      <div className="container">
        <h3>Login</h3>
        <div className="form-group">
          <p>username</p>
          <input className="form-control" name="username" id="username" />
        </div>
        <div className="form-group">
          <p>password</p>
          <input className="form-control" name="password" id="password" />
        </div>
        <div className="form-group">
          <button
            className="btn btn-success"
            onClick={() => {
              this.handleLogin();
            }}
          >
            Login
          </button>
        </div>

        <button
          className="btn btn-link"
          onClick={() => {
            this.props.history.goBack();
          }}
        >
          Trở về
        </button>
      </div>
    );
  }
}
