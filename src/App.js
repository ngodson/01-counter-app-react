import React, { useState } from "react";
import "./App.css";

export default function AppStarter() {
  // useState
  const [getCount, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(getCount + 1);
  };

  const handleDecrement = () => {
    setCount(getCount - 1);
  };
  console.log("Page refreshed");
  return (
    <div className="counterApp">
      {/* <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p> */}

      <h1>Counter</h1>
      <button className="btn1" onClick={handleIncrement}>
        +
      </button>
      <br />
      <p>{getCount}</p>
      <br />
      <button className="btn2" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
}
