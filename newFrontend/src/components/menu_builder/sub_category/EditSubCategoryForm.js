import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function EditSubCategoryForm() {
    const [showForm, setShowForm] = useState(false);

    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [image, setImgURL] = useState(props.image);

    const handleFormClose = () => setShowForm(false);
    const handleFormShow = () => setShowForm(true);

    const handelTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handelDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handelImgURLChange = (e) => {
        setImgURL(e.target.value);
    }

    return (
        <>
            <div className=' d-flex justify-content-center'>
                <a
                    onClick={handleFormShow}
                    className='m-0 text-danger'
                    style={{cursor: "pointer"}}
                >
                    edit
                </a>
            </div>

            <Modal
                show={showForm}
                onHide={handleFormClose}
                backdrop="static"
                keyboard={false}
            >
            <Modal.Header closeButton>
                <Modal.Title>Edit the Sub-Category</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form id="editModal">
                    <Form.Group className="mb-3 d-flex justify-content-start" controlId="formTitle">
                        <Form.Label className='  text-start text-nowrap text-secondary col-2 my-auto fw-bold  me-3'>Title</Form.Label>
                        <Form.Control onChange={handelTitleChange} value={title}  type="title" placeholder="title" className=' form-control w-75' />
                    </Form.Group> 

                    <Form.Group className="mb-3 d-flex justify-content-start" controlId="formTitle">
                        <Form.Label className=' text-start text-nowrap text-secondary col-2 my-auto fw-bold  me-3'>Description</Form.Label>
                        <Form.Control onChange={handelDescriptionChange} value={description} type="text" placeholder="description" className=' form-control w-75' />
                    </Form.Group> 

                    <Form.Group className="mb-3 d-flex justify-content-start" controlId="formTitle">
                        <Form.Label className=' text-start text-nowrap text-secondary col-2 my-auto fw-bold  me-3'>Img URL</Form.Label>
                        <Form.Control onChange={handelImgURLChange} value={image} type="url" placeholder="ImgURL" className=' form-control w-75' />
                    </Form.Group> 
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleFormClose}>
                    Close
                </Button>

                <Button
                    form='editModal'
                    className=' btn btn-primary'
                    onClick={(e) => {
                    e.preventDefault();
                    props.updateSubCategoryForm(props.id, title, description, image)
                    handleFormClose()
                    }}
                >
                    Update
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}
export default EditSubCategoryForm
