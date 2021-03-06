import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ApiRFC() {
  const [arrTask, setArrTask] = useState([]);

  const getAllTaskApi = async () => {
    try {
      let result = await axios({
        url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
        method: "GET",
      });
      //Sau khi gọi api thành công thì setArrayTask
      setArrTask(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    //tương tự componentDidMount
    getAllTaskApi();
  }, []);

  return (
    <div className="container">
      <button
        className="btn btn-success"
        onClick={() => {
          getAllTaskApi();
        }}
      >
        Get all task
      </button>
      <h3 className="text-center display-4">To do app</h3>
      <div className="d-flex justify-content-center">
        <table className="table text-center w-50">
          <tbody>
            {arrTask
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
            {arrTask
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
