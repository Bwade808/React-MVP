import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import App from './App' 


// const url = 'https://chorebank-api.onrender.com';
const url = "http://localhost:3000";

export const EditModal = ({chore, descrip, allow, frequency, choreId}) => {
    const [editInfo, setEditInfo] = useState({
      name: chore,
      description: descrip,
      allowance: allow,
      freq: frequency,
      id: choreId
    });
    // console.log(editInfo.editCategory)
    const [show, setShow] = useState(false);
      //MODEL Functions
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const editPutInfo = (e) => {
        setEditInfo({...editInfo, [e.target.name]: e.target.value})
    }
   
    const patchFunction = () => {
      fetch(`${url}/api/update/${choreId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editInfo)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data.message)
      })
      console.log('edit info: ', editInfo);
      handleClose();
      <App />
    }
  
    return (
      <>
        <FaEdit onClick={handleShow}/>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Chore</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className='mb-3' controlId='edit-chore'>
                  <Form.Label>Chore</Form.Label>
                  <Form.Control type='text' name='name' value={editInfo.name} 
                    onChange={editPutInfo} placeholder='Edit chore...'/>
              </Form.Group>
              <Form.Group className='mb-3' controlId='edit-descript'>
                  <Form.Label>Description</Form.Label>
                  <Form.Control type='text' name='description' value={editInfo.description} 
                    onChange={editPutInfo}placeholder='Edit description...'/>
              </Form.Group>
              <Form.Group className='mb-3' controlId='edit-allowance'>
                  <Form.Label>Allowance</Form.Label>
                  <Form.Control type='text' name='allowance' value={editInfo.allowance} 
                    onChange={editPutInfo}placeholder='Edit allowance...'/>
              </Form.Group>
              <Form.Select aria-label="Frequency select" name='freq' value={editInfo.freq} 
                    onChange={editPutInfo}>
                <option>Select a frequency</option>
                <option value='daily'>Daily</option>
                <option value='weekly'>Weekly</option>
                <option value='monthly'>Monthly</option>
              </Form.Select>
            </Form>
            
            {/* <select className='select-modal' value={editInfo.editCategory} onChange={editInfoCategory}>
                <option value='chore'>Chore</option>
                <option value='descript'>Description</option>
                <option value='allowance'>Allowance</option>
            </select>
            
            <InputGroup className="mb-3">
                <Form.Control
                placeholder="enter text here..."
                aria-label="edit form"
                aria-describedby="basic-addon2"
                onChange={editInfoText}
                value={editInfo.editText}
                />    
            </InputGroup> */}
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={patchFunction}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default EditModal

