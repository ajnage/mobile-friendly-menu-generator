import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function InsertCategory(props) {
	const [title, setTitle] = useState("");

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleSubmit = (e) => {
		props.onSubmit(title);
	};

	return (
		<>
			<Modal
				backdrop="static"
				keyboard={false}
				className=""
				show={props.showForm}
				onHide={props.handleFormClose}
			>
				<Modal.Header closeButton>
					<Modal.Title>Add new</Modal.Title>
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
								value={title}
								onChange={handleTitleChange}
								type="title"
								placeholder="title"
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
						className=" btn btn-dark"
						form="Modal"
						onClick={(e) => {
							props.handleFormClose();
							e.preventDefault();
							props.handleInsertNewCategory(props.id, title);
						}}
					>
						Insert
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default InsertCategory;