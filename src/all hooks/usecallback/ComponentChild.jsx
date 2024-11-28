import React, { memo } from 'react'

const ComponentChild = ({name}) => {
    console.log('Child Called !!!');
    
  return (
    <div>
      <h1>ComponentChild</h1>
      <h3>{name}</h3>
    </div>
  )
}

export default memo(ComponentChild);
