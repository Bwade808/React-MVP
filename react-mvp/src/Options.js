import React,{ useState } from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import EditModal from './EditModal';


const url = 'https://chorebank-api.onrender.com'; 
// const url = "http://localhost:3000";

const Options = (props) => {
    let { choreData, setChoreData } = props;
    
    const deleteChore = () => {
      let choreToDelete = choreData.id;
      
      fetch(`${url}/api/delete/${choreToDelete}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((data) => {
        alert(`You have successfully deleted your ${choreData.chore} chore`);
        console.log('Successfully deleted', data)
      })
        
      // const updateChores = async () => {
      //   const response = await fetch(`${url}/api`);
      //   const newData = await response.json();
      //   setChoreData(newData);
      // };
      // updateChores();
    }

  return (
    <div className='chore-options-two'>
      <div>Done <input type='checkbox' />&nbsp;&#124;&nbsp;</div>
      <div>ChoreBucks: ${choreData.allowance}&nbsp;&#124;&nbsp;</div>
      <button className='chore-delete' type='submit' onClick={deleteChore}><FaTrashAlt />&nbsp;&nbsp;</button>
      {/* <span><FaEdit onClick={()=>{console.log('edit')}}/></span> */}
      <div><EditModal setChoreData={setChoreData} chore={choreData.chore} descrip={choreData.descript} 
        allow={choreData.allowance} frequency={choreData.freq} choreId={choreData.id}/></div>
    </div>
  )
}

export default Options



// onHide={handleClose}