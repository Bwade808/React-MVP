import React,{ useState } from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import EditModal from './EditModal';



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
    <div className='chore-options-two'>
      <div>Done <input type='checkbox' />&nbsp;&#124;&nbsp;</div>
      <div>ChoreBucks: ${choreData.allowance}&nbsp;&#124;&nbsp;</div>
      <div onClick={deleteChore}><FaTrashAlt />&nbsp;&nbsp;</div>
      {/* <span><FaEdit onClick={()=>{console.log('edit')}}/></span> */}
      <div><EditModal chore={choreData.chore} descrip={choreData.descript} 
        allow={choreData.allowance} frequency={choreData.freq} choreId={choreData.id}/></div>
    </div>
  )
}

export default Options



// onHide={handleClose}