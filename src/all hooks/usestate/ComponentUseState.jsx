import React, { useState } from 'react'

const ComponentUseState = () => {
    const [count,setCount] = useState(0);
    const incCounter = () => {
        setCount(count => count + 1)   // 0+1  // 1
         setCount(count => count + 1)  // 1+1
    }
    const decCounter = () => {
        setCount(count - 1)
    }
  return (
    <div className='col-md-6 ms-auto mt-5'>
      <button className="btn btn-success" onClick={incCounter}>+</button>
      <h1 className='ms-auto'>{count}</h1>
      <button className="btn btn-danger" onClick={decCounter}>-</button>
    </div>
  )
}

export default ComponentUseState
