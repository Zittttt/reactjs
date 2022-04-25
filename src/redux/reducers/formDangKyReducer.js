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

    default:
      return state;
  }
};
