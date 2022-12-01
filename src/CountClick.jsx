import { useState } from "react";

export default function CountClick(){
  let initValue= 0;
  const [count, setCount] = useState(initValue);
  const incNum = () => {
    setCount(count+1);
  };

  const decNum = () => {
    setCount(count-1);
  };

  const reSet = () => {
    setCount(initValue);
  };

  return (
    <>
      <div className="count_sec">
        <div className="count_item">
          <button className="btn btn_count" onClick={decNum}>
            Click for Decreament
          </button>
          <h1 className="num_count">{count}</h1>
          <button className=" btn btn_count" onClick={incNum}>
            Click for Increament
          </button>
        </div>
        <div className="count_item">
        <button className=" btn btn_count" onClick={reSet}>
          Reset
        </button>
      </div>
      </div>
    </>
  );
};

