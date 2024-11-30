import React from 'react'
import PostData from './PostData'
import ToDoData from './ToDoData'

const CustomHooks = () => {
  return (
    <div className='row border'>
      <div className="col-md-6 border">
        <PostData />
      </div>
      <div className="col-md-6 border">
        <ToDoData />
      </div>
    </div>
  )
}

export default CustomHooks
