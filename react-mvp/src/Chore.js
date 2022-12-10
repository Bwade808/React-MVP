import React from 'react';
import Options from './Options';

const Chore = (props) => {
    let { choreObj, setChoreData } = props

  return (
    
    <div className='chore'>
        <div className='chore-name'>
            <h2>{choreObj.chore}</h2> 
        </div>

        <div className='chore-options'>
            <div>{choreObj.descript}</div>
            <Options setChoreData={setChoreData} choreData={choreObj}/>
        </div>
    </div>
  )
    
}

export default Chore
