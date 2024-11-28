import React, { useEffect, useRef, useState } from 'react'

const ComponentUseRef = () => {
    
    const divRef = useRef();
    useEffect(()=>{
        divRef.current.focus()
    },[])
  return (
    <div className="col-md-6 m-auto mt-5 shadow p-3 mb-5 bg-white rounded">
      <div className="mt-3">
        <input
          type="text"
          placeholder="Enter First no"
          className="form-control"
          ref={divRef}
        />
      </div>
      <div className="mt-3">
        <input
          type="text"
          placeholder="Enter Second no"
          className="form-control"
        />
      </div>
    </div>
  )
}

export default ComponentUseRef
