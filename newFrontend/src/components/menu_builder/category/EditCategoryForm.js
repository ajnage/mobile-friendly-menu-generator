import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function EditCategoryForm(props) {
    const [title, setTitle] = useState(props.title)
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const handelTitleChange = (e) => {
        setTitle(e.target.value)
    }

    return (
      <>
        <div className=' mx-2 d-flex justify-content-center'>
            {/* <Button onClick={handleShow} className=" btn btn-danger ">
            Edit
            </Button> */}

            <a 
                onClick={handleShow}
                className=" text-danger text-decoration-none"
                style={{cursor:"pointer"}}
            >
                edit
            </a>
        </div>
        
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>  
            <Form id="editModal">
              <Form.Group className="mb-3 d-flex justify-content-start" controlId="formTitle">
                  <Form.Label className=' text-nowrap text-secondary col-2 my-auto fw-bold text-end pe-2'>Title</Form.Label>
                  <Form.Control onChange={handelTitleChange} value={title} type="title" placeholder="title" className=' form-control w-75' />
              </Form.Group> 
            </Form>

          </Modal.Body>
          <Modal.Footer className=' d-flex justify-content-between'>
            <Button 
              variant="secondary"
              onClick={handleClose}
            >
              Close
            </Button>

            <Button 
              className='btn btn-danger'
              onClick={() => {
                props.handleDelete(props.id)
                .then(handleClose)
              }}
            >
              Delete
            </Button>


            <Button 
                className=' btn btn-dark' 
                form='editModal'
                onClick={(e) => {
                  handleClose();
                  e.preventDefault();
                  props.updateCategoryForm(props.id, title);
                }}
                >
                Update
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default EditCategoryForm
