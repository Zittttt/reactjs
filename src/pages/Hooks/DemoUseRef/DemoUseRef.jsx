import React, { useRef, useState } from "react";

/*
    useRef dùng để lưu trữ các giá trị thay đổi sau các lần render

    useRef dùng để chứa các giá trị thay đổi mà không cần render lại giao diện (khác useState)
*/

export default function DemoUseRef(props) {
  //   const [userLogin, setUserLogin] = useState({ username: "", password: "" });
  const [number, setNumber] = useState(1);
  const userLoginRef = useRef({ username: "", password: "" });
  const userNameTagRef = useRef({});
  const passwordTagRef = useRef({});

  console.log("render lại giao diện");
  const handleChange = (event) => {
    let { value, name } = event.target;
    console.log("userLogin", userLoginRef.current);
    userLoginRef.current[name] = value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("userLogin submit", userLoginRef.current);
    // console.log(userLoginRef.current);
    // let userName = document.querySelector("#username").value;
    // let password = document.querySelector("#password").value;
    // console.log(userName, password);
    // console.log("username", userNameTagRef.current.value);
    // console.log("password", passwordTagRef.current.value);
    // passwordTagRef.current.style.backgroundColor = "red";
  };

  return (
    <form className="container mt-5" onSubmit={handleSubmit}>
      <h3>number: {number}</h3>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => {
          {
            setNumber(number + 1);
          }
        }}
      >
        +
      </button>
      <h3>Login</h3>
      <div className="form-group">
        <p>User name</p>
        <input
          ref={userNameTagRef}
          id="username"
          name="username"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <p>Password</p>
        <input
          ref={passwordTagRef}
          id="password"
          name="password"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <button className="btn btn-success" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}
