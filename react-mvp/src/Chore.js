import React from 'react';
import Options from './Options';

const Chore = (props) => {
    let { choreObj, choreData } = props
    // console.log('chore data', {choreObj})
  return (
    
    <div className='chore'>
        <div className='chore-name'>
            <h2>{choreObj.chore}</h2> 
            <div>{choreObj.descript}</div>
        </div>

        <div className='chore-options'>
            <Options choreData={choreObj}/>
        </div>
    </div>
  )
    
}

export default Chore
