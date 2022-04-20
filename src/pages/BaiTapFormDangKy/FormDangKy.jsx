import React, { Component } from "react";

export default class FormDangKy extends Component {
  state = {
    values: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDienThoai: "",
      hoTen: "",
      loaiNguoiDung: "QuanTri",
    },
    errors: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDienThoai: "",
      hoTen: "",
    },
  };

  handleChangeInput = (event) => {
    // Thẻ xảy ra sự kiện
    let { id, value, name } = event.target;

    //Xử lý value
    let newValues = { ...this.state.values };
    newValues[id] = value;

    //Xử lý error
    let newErros = { ...this.state.errors };

    let messageError = "";
    if (value.trim() === "") {
      messageError = name + " không được bỏ trống";
    }
    newErros[id] = messageError;

    //setState lại cho values và erros
    this.setState({
      values: newValues,
      errors: newErros,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(123);
    //Bắt lỗi khi form không hợp lệ sẽ không cho submit
    let { errors, values } = this.state;
    for (let key in errors) {
      if (errors[key] !== "") {
        alert(`${key} không hợp lệ!`);
        return;
      }
    }

    for (let key in values) {
      if (values[key] === "") {
        //values không điền sẽ bị lỗi
        alert(`${key} không hợp lệ!`);
        return;
      }
    }
    console.log("Đã đăng ký");
  };

  render() {
    console.log(this.state);
    return (
      <form className="card" onSubmit={this.handleSubmit}>
        <div className="card-header text-white font-weight-bold">
          Bài tập form
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <p>Tài khoản</p>
                <input
                  type="text"
                  className="form-control"
                  id="taiKhoan"
                  name="Tài khoản"
                  onChange={this.handleChangeInput}
                />
                <p className="text text-danger">{this.state.errors.taiKhoan}</p>
              </div>
              <div className="form-group">
                <p>Mật khẩu</p>
                <input
                  type="text"
                  className="form-control"
                  id="matKhau"
                  name="Mật khẩu"
                  onChange={this.handleChangeInput}
                />
                <p className="text text-danger">{this.state.errors.matKhau}</p>
              </div>
              <div className="form-group">
                <p>Email</p>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="Email"
                  onChange={this.handleChangeInput}
                />
                <p className="text text-danger">{this.state.errors.email}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p>Họ tên</p>
                <input
                  type="text"
                  className="form-control"
                  id="hoTen"
                  name="Họ tên"
                  onChange={this.handleChangeInput}
                />
                <p className="text text-danger">{this.state.errors.hoTen}</p>
              </div>
              <div className="form-group">
                <p>Số điện thoại</p>
                <input
                  type="text"
                  className="form-control"
                  id="soDienThoai"
                  name="Số điện thoại"
                  onChange={this.handleChangeInput}
                />
                <p className="text text-danger">
                  {this.state.errors.soDienThoai}
                </p>
              </div>
              <div className="form-group">
                <p>Loại người dùng</p>
                <select
                  name="loaiNguoiDung"
                  id="loaiNguoiDung"
                  className="form-control"
                  onChange={this.handleChangeInput}
                >
                  <option value="QuanTri">Quản Trị</option>
                  <option value="NguoiDung">Người Dùng</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-success" type="submit">
            Đăng ký
          </button>
        </div>
      </form>
    );
  }
}
