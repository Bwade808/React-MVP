import React, { useState } from 'react';
import Header from './Header';

const CreateList = () => {
    const [newChore, setNewChore] = useState({
        chore: '',
        descript: '',
        allowance: 0,
        isdone: false,
        freq: '',
        pers_id: 1
    })

    const addChore = () => {
        fetch('/api/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newChore)
        })
        .then((data) => {
            alert('Congratulations!!! You\'ve added a chore!')
            console.log('Post successful', data)
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted')
        
    }
  return (
    <div>
        <div className='create-container'>
            <h1>CREATE PLAN PAGE</h1>
            <form className='form-container' onSubmit={handleSubmit}> 
                <h3>Create a chore</h3>
                <input type='text' name='name' placeholder='Name of chore...' 
                    value={newChore.chore}
                    onChange={event => setNewChore({...newChore, chore: event.target.value})} required /><br />

                <input type='text' name='description' placeholder='Description...'
                    value={newChore.descript}
                    onChange={event => setNewChore({...newChore, descript: event.target.value})} /><br />

                <input type='text' name='allowance' placeholder='Allowance amount...'
                    value={newChore.allowance}
                    onChange={event => setNewChore({...newChore, allowance: event.target.value})} required /><br />
                <select value={newChore.freq} onChange={event => setNewChore({...newChore, freq: event.target.value})}>
                    <option value='daily'>Daily</option>
                    <option value='Weekly'>Weekly</option>
                    <option value='Monthly'>Monthly</option>
                </select><br />
                <button onClick={addChore} type='submit'>Add</button> 
            </form>
        </div>
    </div>
    
  )
}

export default CreateList
