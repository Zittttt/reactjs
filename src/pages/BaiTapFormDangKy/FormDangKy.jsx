import React, { Component } from "react";
import { connect } from "react-redux";

class FormDangKy extends Component {
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
    //Lấy ra giá trị tự thêm
    let dataType = event.target.getAttribute("data-type");

    console.log("data-type", dataType);

    //Xử lý value
    let newValues = { ...this.state.values };
    newValues[id] = value;

    //Xử lý error
    let newErros = { ...this.state.errors };

    let messageError = "";
    if (value.trim() === "") {
      messageError = name + " không được bỏ trống";
    }

    if (dataType === "email") {
      let regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      if (!regexEmail.test(value)) {
        messageError = "Email không đúng định dạng !";
      }
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
    //Đưa dữ liệu lên redux
    const action = {
      type: "DANG_KY",
      nguoiDung: this.state.values,
    };
    this.props.dispatch(action);
  };

  //Can thiệp vào quá trình thay đổi props của component trước khi render

  // static getDerivedStateFromProps(newProps, currentState) {
  //   //Khi người dùng bấm nút sửa => thì component sẽ nhận newProps => đem props mới gán vào state.values và trả state mới

  //   if (newProps.nguoiDungSua.taiKhoan !== currentState.values.taiKhoan) {
  //     //Trường hợp bấm nút sửa
  //     currentState.values = newProps.nguoiDungSua;
  //   }

  //   return currentState;
  // }

  //Hàm life cycle này chỉ chạy khi props thay đổi, state thay đổi sẽ không chạy
  componentWillReceiveProps(newProps) {
    //Khi props thay đổi trước khi render thì lấy nguoiDungSua đưa vào this.state.values
    this.setState({
      values: newProps.nguoiDungSua,
    });
  }

  render() {
    console.log(this.state);
    let { taiKhoan, hoTen, email, matKhau, soDienThoai, loaiNguoiDung } =
      this.state.values;

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
                  value={taiKhoan}
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
                  value={matKhau}
                />
                <p className="text text-danger">{this.state.errors.matKhau}</p>
              </div>
              <div className="form-group">
                <p>Email</p>
                <input
                  data-type="email"
                  className="form-control"
                  id="email"
                  name="Email"
                  onChange={this.handleChangeInput}
                  value={email}
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
                  value={hoTen}
                />
                <p className="text text-danger">{this.state.errors.hoTen}</p>
              </div>
              <div className="form-group">
                <p>Số điện thoại</p>
                <input
                  data-type="phone"
                  className="form-control"
                  id="soDienThoai"
                  name="Số điện thoại"
                  onChange={this.handleChangeInput}
                  value={soDienThoai}
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
                  value={loaiNguoiDung}
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
          <button
            className="btn btn-primary ml-2"
            type="button"
            onClick={() => {
              //Tạo ra action
              const action = {
                type: "CAP_NHAT_NGUOI_DUNG",
                nguoiDung: this.state.values,
              };
              //Đưa dữ liệu sau khi người dùng chỉnh sửa về redux store
              this.props.dispatch(action);
            }}
          >
            Cập nhật
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    nguoiDungSua: rootReducer.formDangKyReducer.nguoiDungSua,
  };
};

export default connect(mapStateToProps)(FormDangKy);
