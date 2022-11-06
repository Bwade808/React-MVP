import React from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';


const Options = (props) => {
    let { choreData } = props;
    
    const deleteChore = (e) => {
      let choreToDelete = choreData.id;
      
      fetch(`/api/delete/${choreToDelete}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((data) => {
        alert(`You have successfully deleted your ${choreData.chore} chore`);
        console.log('Successfully deleted', data)
      })
    }
    
  return (
    <div>
      <span>ChoreBucks earned: ${choreData.allowance}!&nbsp;&nbsp;</span>
      <span onClick={deleteChore}><FaTrashAlt />&nbsp;&nbsp;</span>
      <span><FaEdit /></span>
    </div>
  )
}

export default Options
