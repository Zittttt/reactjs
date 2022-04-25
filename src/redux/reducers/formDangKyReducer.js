const stateDefault = {
  mangNguoiDung: [
    {
      taiKhoan: " nguyenvana",
      hoTen: "Nguyễn Văn A",
      email: "nguyenvana@gmail.com",
      matKhau: "asdasd",
      soDienThoai: "0909090909",
      loaiNguoiDung: "QuanTri",
    },
    {
      taiKhoan: " nguyenvanb",
      hoTen: "Nguyễn Văn B",
      email: "nguyenvanb@gmail.com",
      matKhau: "asdasd",
      soDienThoai: "0808080808",
      loaiNguoiDung: "NguoiDung",
    },
  ],

  nguoiDungSua: {
    taiKhoan: "",
    hoTen: "",
    email: "",
    matKhau: "",
    soDienThoai: "",
    loaiNguoiDung: "",
  },
};

export const formDangKyReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DANG_KY": {
      state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];
      return { ...state };
    }

    case "XOA": {
      state.mangNguoiDung = [...state.mangNguoiDung];

      state.mangNguoiDung = state.mangNguoiDung.filter(
        (nguoiDung) => nguoiDung.taiKhoan !== action.taiKhoan
      );

      return { ...state };
    }

    case "SUA": {
      state.nguoiDungSua = action.nguoiDung;
      return { ...state };
    }

    case "CAP_NHAT_NGUOI_DUNG": {
      state.mangNguoiDung = [...state.mangNguoiDung];

      //Tìm ra object chỉnh sửa dựa vào tài khoản

      let nguoiDungCapNhat = state.mangNguoiDung.find(
        (nd) => nd.taiKhoan === action.nguoiDung.taiKhoan
      );

      if (nguoiDungCapNhat) {
        // nguoiDungCapNhat.email = action.nguoiDung.email;
        //....
        for (let key in nguoiDungCapNhat) {
          nguoiDungCapNhat[key] = action.nguoiDung[key];
        }
      }

      return { ...state };
    }

    default:
      return state;
  }
};
