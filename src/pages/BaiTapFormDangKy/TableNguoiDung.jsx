import React, { Component } from "react";

export default class TableNguoiDung extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tài khoản</th>
            <th>Họ tên</th>
            <th>Mật khẩu</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Loại người dùng</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>STT</th>
            <th>Tài khoản</th>
            <th>Họ tên</th>
            <th>Mật khẩu</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Loại người dùng</th>
            <th></th>
          </tr>
        </tbody>
      </table>
    );
  }
}
