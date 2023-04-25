import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { subCategoriesData } from "../dummyData";

function InsertSubCategory(props) {
  const [showForm, setShowForm] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ImgURL, setImgURL] = useState("");

  const handleFormClose = () => setShowForm(false);
  const handleFormShow = () => setShowForm(true);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImgURLChange = (e) => {
    setImgURL(e.target.value);
  };
  return (
    <>
      <Button onClick={handleFormShow} className="border border-2 btn-light">
        +
      </Button>

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
            <Form.Group
              className="mb-3 d-flex justify-content-start"
              controlId="formTitle"
            >
              <Form.Label className="  text-start text-nowrap text-secondary col-2 my-auto fw-bold  me-3">
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

            <Form.Group
              className="mb-3 d-flex justify-content-start"
              controlId="formTitle"
            >
              <Form.Label className=" text-start text-nowrap text-secondary col-2 my-auto fw-bold  me-3">
                Description
              </Form.Label>
              <Form.Control
                onChange={handleDescriptionChange}
                value={description}
                type="text"
                placeholder="description"
                className=" form-control w-75"
              />
            </Form.Group>

            <Form.Group
              className="mb-3 d-flex justify-content-start"
              controlId="formTitle"
            >
              <Form.Label className=" text-start text-nowrap text-secondary col-2 my-auto fw-bold  me-3">
                Img URL
              </Form.Label>
              <Form.Control
                onChange={handleImgURLChange}
                value={ImgURL}
                type="url"
                placeholder="ImgURL"
                className=" form-control w-75"
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleFormClose}>
            Close
          </Button>

          <Button
            form="editModal"
            className=" btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              props.handleInsertNewSubCategory(title, description, ImgURL);
            }}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default InsertSubCategory;
