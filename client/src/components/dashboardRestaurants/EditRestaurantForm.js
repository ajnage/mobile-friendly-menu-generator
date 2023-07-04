import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function EditRestaurantForm(props) {
    const [title, setTitle] = useState(props.title);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    return (
        <>
            <Modal
                show={props.show}
                onHide={props.handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Restaurant</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form id="editModal">
                        <Form.Group
                            className="mb-3 d-flex justify-content-start"
                            controlId="formTitle"
                        >
                            <Form.Label className=" text-nowrap text-secondary col-2 my-auto fw-bold text-end pe-2">
                                Title
                            </Form.Label>
                            <Form.Control
                                onChange={handleTitleChange}
                                value={title}
                                type="title"
                                placeholder="title"
                                className=" form-control w-75"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="d-flex flex-row">
                    <Button
                        className="btn btn-danger"
                        onClick={() => {
                            props.handleDelete(props.id);
                        }}
                    >
                        Delete
                    </Button>
                    <Button
                        className=" btn btn-dark"
                        form="editModal"
                        onClick={(e) => {
                            props.handleClose();
                            e.preventDefault();
                            props.updateRestaurantForm(props.id, title);
                        }}
                    >
                        Update
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={props.handleClose}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditRestaurantForm;