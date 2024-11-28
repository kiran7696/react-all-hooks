import React, { useReducer, useState } from "react";

const ComponentUseReducer = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const reducer = (state,action) =>{
    switch (action.type) {
        case "+":
           return state = Number(firstNumber) + Number(secondNumber);
        case "-":
            return state = Number(firstNumber) - Number(secondNumber);
        case "*":
            return state = Number(firstNumber) * Number(secondNumber);
        case "/":
            return state = Number(firstNumber) / Number(secondNumber);
        default:
            return state;
    }
    }
    const[state,dispatch]=useReducer(reducer,0);
  return (
    <div className="col-md-6 m-auto mt-5 shadow p-3 mb-5 bg-white rounded">
      <div className="mt-3">
        <input
          type="text"
          placeholder="Enter First no"
          className="form-control"
          value={firstNumber}
          onChange={(e) => setFirstNumber(e.target.value)}
        />
      </div>
      <div className="mt-3">
        <input
          type="text"
          placeholder="Enter Second no"
          className="form-control"
          value={secondNumber}
          onChange={(e) => setSecondNumber(e.target.value)}
        />
      </div>
      <div className="mt-3">
        <button className="btn btn-primary" onClick={()=>dispatch({type:"+"})}>+</button>{" "}
        <button className="btn btn-danger" onClick={()=>dispatch({type:"-"})}>-</button>{" "}
        <button className="btn btn-success" onClick={()=>dispatch({type:"*"})}>*</button>{" "}
        <button className="btn btn-secondary" onClick={()=>dispatch({type:"/"})}>/</button>{" "}
      </div>
      <div className="mt-3">
        <h1>Result is:{state}</h1>
      </div>
    </div>
  );
};

export default ComponentUseReducer;
