import { http } from "../../util/config";

//closure function
export const getPhimApiAction = (maNhom = "GP01") => {
  return async (dispatch) => {
    try {
      //Gọi api = axios
      let result = await http.get(
        `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`
      );
      //đưa dữ liệu từ api về redux
      const action = {
        type: "LAY_DANH_SACH_PHIM",
        arrPhim: result.data.content,
      };
      console.log(result.data);
      dispatch(action);
    } catch (error) {
      console.log("error", error);
    }
  };
};
