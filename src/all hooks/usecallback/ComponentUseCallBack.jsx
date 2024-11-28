import React, { useCallback, useState } from 'react'
import ComponentChild from './ComponentChild'

const ComponentUseCallBack = () => {
    const [count,setCount] = useState(0);
    const [name,setName] = useState('kiran');
    const addCount = () => {
        setCount(count => count + 1);
    }
    // const getIdFromChild = (id) => {
    //     console.log(id,'id');
        
    // }
    const getIdFromChild = useCallback((id)=>{console.log(id,'id')},[]);
  return (
    <div>
        <h1>{count}</h1>
        <button className='btn btn-success' onClick={addCount}>Add Count</button>
        <button className='btn btn-warning' onClick={()=>setName('kishor')}>Pass Name</button>
      <ComponentChild name={name} getIdFromChild={getIdFromChild}/>
    </div>
  )
}

export default ComponentUseCallBack
