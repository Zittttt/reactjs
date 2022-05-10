import React, { useState } from "react";
import ModalHOC from "./ModalHOC";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { useDispatch } from "react-redux";

//HOC: Higher Order Component
//Lý thuyết: là component nhận vào 1 tham số là component khác để xử lý và trả ra 1 component mới.
// => Tái sử dụng lại logic của component (giao diện)
// let Component = new ModalHOC(Home);

export default function DemoHOC(props) {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h3>Demo modal popup</h3>
      <button
        className="btn btn-success mr-2"
        data-toggle="modal"
        data-target="#modelId"
        onClick={() => {
          const action = {
            type: "OPEN_MODAL",
            component: <Register {...props} />,
          };
          dispatch(action);
        }}
      >
        Đăng ký
      </button>
      <button
        className="btn btn-success ml-2"
        data-toggle="modal"
        data-target="#modelId"
        onClick={() => {
          const action = {
            type: "OPEN_MODAL",
            component: <Login {...props} />,
          };
          dispatch(action);
        }}
      >
        Đăng nhập
      </button>
      <hr />
    </div>
  );
}
