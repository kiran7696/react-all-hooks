import React from 'react'
import PostData from './PostData'
import ToDoData from './ToDoData'

const HOC = () => {
  return (
    <>
    <div>HOC</div>
    <div className='row border'>
      <div className="col-md-6 border">
        {/* <PostData /> */}
      </div>
      <div className="col-md-6 border">
        <ToDoData />
      </div>
    </div>
    </>
  )
}

export default HOC
