import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function InsertCategory(props) {
    const [title, setTitle] = useState("")
    // const [imgUrl, setImgUrl] = useState("")

    const handelTitleChange = (e) => {
        setTitle(e.target.value)
    }
    // const handelImgURLChange = (e) => {
    //     setImgUrl(e.target.value)
    // }
    
    const handelCancel = () => {
        setTitle('')
        // setImgUrl('')
        props.onCancel()
    }

    const handelSubmit = () => {
        props.onSubmit(title)
        setTitle('')
        // setImgUrl('')

    }

    return (
        <>
        
        <Modal
            backdrop="static"
            keyboard={false}
            className=""
            show={props.showCategoryForm}
            onHide={handelCancel}
        >
            <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form id="editModal" className=' '>
                    <Form.Group className="mb-3 d-flex justify-content-start" controlId="formTitle">
                        <Form.Label className=' text-nowrap text-secondary col-2 my-auto fw-bold text-end pe-2'>Title</Form.Label>
                        <Form.Control value={title} onChange={handelTitleChange} type="title" placeholder="title" className=' form-control w-75' />
                    </Form.Group>

                    {/* <Form.Group controlId="formFile" className="mb-3 d-flex justify-content-start">
                        <Form.Label className='text-nowrap text-secondary col-2 my-auto fw-bold text-end pe-2'>Img URL</Form.Label>
                        <Form.Control value={imgUrl} onChange={handelImgURLChange} type="url" placeholder='image url' className=' form-control w-75' />
                        
                    </Form.Group> */}
                </Form>

            </Modal.Body>
            <Modal.Footer>
            <Button 
                variant="secondary" 
                onClick={handelCancel}>
                Close
            </Button>

            <Button 
                className=' btn btn-dark' 
                form='editModal'
                onClick={handelSubmit}
                >
                Update
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default InsertCategory
