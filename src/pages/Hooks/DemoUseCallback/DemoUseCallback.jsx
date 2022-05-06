import React, { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

export default function DemoUseCallback(props) {
  const [number, setNumber] = useState(1);
  const [like, setLike] = useState(1);
  const renderNumber = () => {
    return number + " number";
  };

  const callBackRenderNumber = useCallback(renderNumber, [number]);

  return (
    <div className="container">
      <h3>Demo Use Callback</h3>
      <div className="bg-dark text-white mt-2 p-4">
        <h3>Number: {number}</h3>
        <h3>Like: {like}</h3>
        <div className="form-group">
          <button
            className="btn btn-success"
            onClick={() => {
              setNumber(number + 1);
            }}
          >
            +
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              setLike(like + 1);
            }}
          >
            Like
          </button>
        </div>
        <hr />
        <ChildComponent number={number} renderNumber={callBackRenderNumber} />
      </div>
    </div>
  );
}
