import React from 'react'

const Options = (props) => {
    let { choreData } = props;
  return (
    <div>
      <span>Done / </span>
      <span>Edit / </span>
      <span>ChoreBucks earned: ${choreData.allowance}!</span>
    </div>
  )
}

export default Options
