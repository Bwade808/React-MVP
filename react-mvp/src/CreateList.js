import React, { useState } from 'react';
import Header from './Header';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const url = "https://chorebank-api.onrender.com";
// const url = "http://localhost:3000";

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
        fetch(`${url}/api/add`, {
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
        // e.preventDefault();
        setNewChore({
            chore: '',
            descript: '',
            allowance: 0,
            isdone: false,
            freq: '',
            pers_id: 1
        });
        console.log('Submitted')   
    }
  return (
    <div>
        <div className='create-container'>
            
            {/* <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form> */}
            <form className='form-container' onSubmit={handleSubmit}> 
                <h3 className='create-chore'>Create your plan...</h3><br/>
                <input className='create-input' type='text' name='name' placeholder='Name of chore...' 
                    value={newChore.chore} 
                    onChange={event => setNewChore({...newChore, chore: event.target.value})} required /><br />

                <input className='create-input' type='text' name='description' placeholder='Description...'
                    value={newChore.descript}
                    onChange={event => setNewChore({...newChore, descript: event.target.value})} required/><br />

                <input className='create-input' type='text' name='allowance' placeholder='Allowance amount...'
                    value={newChore.allowance}
                    onChange={event => setNewChore({...newChore, allowance: event.target.value})} required /><br />
                <select className='create-select' value={newChore.freq} onChange={event => setNewChore({...newChore, freq: event.target.value})} required>
                    <option value=''>Select a frequency</option>
                    <option value='daily'>Daily</option>
                    <option value='Weekly'>Weekly</option>
                    <option value='Monthly'>Monthly</option>
                </select><br />
                <Button variant='primary' onClick={addChore} type='submit'>Add Chore</Button> 
            </form>
        </div>
    </div>
    
  )
}

export default CreateList
