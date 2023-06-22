import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function InsertSubCategory(props) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [ImgURL, setImgURL] = useState("");
	const [price, setPrice] = useState("");

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleDescriptionChange = (e) => {
		setDescription(e.target.value);
	};

	const handleImgURLChange = (e) => {
		setImgURL(e.target.value);
	};

	const handlePriceChange = (e) => {
		setPrice(e.target.value);
	};
	return (
		<>
			<Modal
				show={props.showForm}
				onHide={props.handleFormClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Add a new Product</Modal.Title>
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
								Price
							</Form.Label>
							<Form.Control
								onChange={handlePriceChange}
								value={price}
								type="url"
								placeholder="'10'"
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
					<Button variant="secondary" onClick={props.handleFormClose}>
						Close
					</Button>

					<Button
						form="editModal"
						className=" btn btn-primary"
						onClick={(e) => {
							e.preventDefault();
							props.handleFormClose();
							props.handleInsertNewSubCategory(title, description, price, ImgURL);

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