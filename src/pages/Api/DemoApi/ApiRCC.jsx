import React, { Component } from "react";
import axios from "axios";

let timeOut = {};

export default class ApiRCC extends Component {
  state = {
    arrTask: [],
  };

  getAllTaskApi = async () => {
    // //gọi api = axios khi người dùng click vào getAllTask
    // // console.log("api");
    // let promise = axios({
    //   url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
    //   method: "GET",
    // });
    // //promise.then là hàm bất đồng bộ (trong khi xử lý thì các hàm bên ngoài vẫn tiếp tục chạy)
    // //Xử lý thành công
    // promise.then((result) => {
    //   //   console.table(result.data);
    //   console.log('api')
    //   this.setState({ arrTask: result.data });
    // });
    // //Xử lý thất bại
    // promise.catch((errors) => {
    //   console.log({ errors });
    // });
    // console.log("ok");

    let result = axios;
  };

  componentDidMount() {
    //gọi api sau khi giao diện load xong
    this.getAllTaskApi();
    timeOut = setInterval(() => {
      console.log("call api");
      this.getAllTaskApi();
    }, 1000);
  }

  componentWillUnmount() {
    console.log("timeout");
    clearInterval(timeOut);
  }

  render() {
    return (
      <div className="container">
        <button
          className="btn btn-success"
          onClick={() => {
            this.getAllTaskApi();
          }}
        >
          Get all task
        </button>
        <h3 className="text-center display-4">To do app</h3>
        <div className="d-flex justify-content-center">
          <table className="table text-center w-50">
            <tbody>
              {this.state.arrTask
                .filter((task) => task.status === false)
                .map(({ taskName, status }, index) => {
                  //task = {status:false,taskName:'task'}
                  return (
                    <tr key={index}>
                      <td>{taskName}</td>
                      <td>
                        <i className="badge badge-danger">incomplete</i>
                        <i
                          className="fa fa-check ml-2"
                          style={{
                            fontSize: 30,
                            cursor: "pointer",
                            color: "green",
                          }}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
              {/* <tr>
                <td>Task 1</td>
                <td>
                  <i className="badge badge-danger">incomplete</i>
                  <i
                    className="fa fa-check ml-2"
                    style={{ fontSize: 30, cursor: "pointer", color: "green" }}
                  ></i>
                </td>
              </tr>
              <tr>
                <td>Task 2</td>
                <td>
                  <i className="badge badge-danger">incomplete</i>
                  <i
                    className="fa fa-check ml-2"
                    style={{ fontSize: 30, cursor: "pointer", color: "green" }}
                  ></i>
                </td>
              </tr> */}
            </tbody>
            <tfoot>
              {this.state.arrTask
                .filter((task) => task.status)
                .map(({ taskName, status }, index) => {
                  //task = {status:false,taskName:'task'}
                  return (
                    <tr key={index}>
                      <td>{taskName}</td>
                      <td>
                        <i className="badge badge-success">complete</i>
                      </td>
                    </tr>
                  );
                })}
              {/* <tr>
                <td>Task 3</td>
                <td>
                  <i className="badge badge-success">complete</i>
                </td>
              </tr>
              <tr>
                <td>Task 4</td>
                <td>
                  <i className="badge badge-success">complete</i>
                </td>
              </tr> */}
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
