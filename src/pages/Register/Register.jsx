import React, { Component } from "react";
import { Prompt } from "react-router-dom";

export default class Register extends Component {
  state = {
    kiemTra: true,
  };

  dangKy = () => {
    this.setState({ kiemTra: false });
    console.log("submit");
  };

  render() {
    return (
      <div className="container">
        <Prompt
          when={this.state.kiemTra}
          message={(location) => "Bạn có chắc muốn rời khỏi trang"}
        />
        <h3>Register</h3>
        <div className="form-group">
          <p>Tài khoản</p>
          <input className="form-control" id="taiKhoan" />
        </div>
        <div className="form-group">
          <p>Họ tên</p>
          <input className="form-control" id="hoTen" />
        </div>
        <div className="form-group">
          <p>Mật khẩu</p>
          <input className="form-control" id="matKhau" />
        </div>
        <div className="form-group">
          <p>Email</p>
          <input className="form-control" id="email" />
        </div>
        <div className="form-group">
          <p>Số điện thoại</p>
          <input className="form-control" id="soDienThoai" />
        </div>
        <div className="form-group">
          <button className="btn btn-success" onClick={this.dangKy}>
            Đăng ký
          </button>
        </div>
      </div>
    );
  }
}
