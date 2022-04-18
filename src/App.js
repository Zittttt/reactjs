import logo from "./logo.svg";
import "./App.css";
import CardJSX from "./Component/DemoComponent/CardJSX";
import CardFunc from "./Component/DemoComponent/CardFunc";
import BaiTapLayout from "./Component/BaiTapLayout/BaiTapLayout";
import Databinding from "./Databinding/Databinding";
import HandleEvent from "./HandleEvent/HandleEvent";
import StateDemo from "./StateDemo/StateDemo";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import DemoProps from "./Props/DemoProps/DemoProps";
import ProductList from "./Props/ShoesShop/ProductList";
import DemoXemChiTiet from "./Props/DemoXemChiTiet/DemoXemChiTiet";
import BTGioHang from "./DemoRedux/BTGioHang/BTGioHang";
import BaiTapGameXucXac from "./DemoRedux/BaiTapGameXucXac/BaiTapGameXucXac";
//Component App sẽ là nơi chứa toàn bộ giao diện của ứng dụng/
// Cấu hình router

import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Route path={"/home"} component={Home} />
    </BrowserRouter>
  );
}

export default App;
