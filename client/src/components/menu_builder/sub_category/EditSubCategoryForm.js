import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function EditSubCategoryForm(props) {
	const [title, setTitle] = useState(props.title);
	const [description, setDescription] = useState(props.description);
	const [image, setImgURL] = useState(props.image);
	const [price, setPrice] = useState(props.price)

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
					<Modal.Title>Edit Product</Modal.Title>
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
							controlId="formDescription"
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
							controlId="formPrice"
						>
							<Form.Label className=" text-start text-nowrap text-secondary col-2 my-auto fw-bold  me-3">
								Price
							</Form.Label>
							<Form.Control
								onChange={handlePriceChange}
								value={price}
								type="text"
								placeholder="'10'"
								className=" form-control w-75"
							/>
						</Form.Group>
						<Form.Group
							className="mb-3 d-flex justify-content-start"
							controlId="formImg"
						>
							<Form.Label className=" text-start text-nowrap text-secondary col-2 my-auto fw-bold  me-3">
								Img URL
							</Form.Label>
							<Form.Control
								onChange={handleImgURLChange}
								value={image}
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
							props.handleFormClose();
							e.preventDefault();
							props.updateSubCategoryForm(props.title, props.description, props.price, props.image);
							console.log(`Props.id = ${props.id}`);

						}}
					>
						Update
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
export default EditSubCategoryForm;