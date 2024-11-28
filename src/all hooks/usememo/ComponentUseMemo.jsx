import React, { useMemo, useState } from "react";

const ComponentUseMemo = () => {
  const [count, setCount] = useState(0);
  let arr = ["kiran", "kishor", "mangesh"];
  const f1 = useMemo(() => {
    console.log("f1 function updated");
    return arr.map((item, i) => {
      return <h1 key={i}>{item}</h1>;
    });
  }, []);
  return (
    <div className="col-md-6 m-auto mt-5">
      {f1}
      <h1 className={count === 0 ? '' : count > 0 ?'text-success' : 'text-danger'}>{count}</h1>
      <button
        className="btn btn-success"
        onClick={() => setCount((count) => count + 1)}
      >
        Update Counter
      </button>
      <button
        className="btn btn-danger"
        onClick={() => setCount((count) => count - 1)}
      >
        Decrease Counter
      </button>
    </div>
  );
};

export default ComponentUseMemo;
