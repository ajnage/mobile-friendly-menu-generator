import React, { useState } from "react";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import EditSubCategoryForm from "./EditSubCategoryForm";

function SubCategoryCard(props) {
	const [showForm, setShowForm] = useState(false);

	const handleFormClose = () => setShowForm(false);
	const handleFormShow = () => setShowForm(true);

	return (
		<div>
			<Col style={{ cursor: 'pointer', height: '100%' }} onClick={handleFormShow}>
				<Card style={{ height: '100%', display: 'flex', gap: '1.5rem' }}>
					<Card.Img variant="top" src={props.image} alt="Card image" />
					<Card.Body className=" p-0 m-0">
						<Card.Title className=" text-center fs-4">{props.title}</Card.Title>

						<Card.Text className=" text-center">
							<p className=" fw-bold fst-normal">{props.price}$</p>

							<p className="text-secondary small">{props.description}</p>
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>

			<EditSubCategoryForm
				title={props.title}
				id={props.id}
				image={props.image}
				description={props.description}
				updateSubCategoryForm={props.updateSubCategoryForm}
				handleDelete={props.handleDelete}
				showForm={showForm}
				handleFormClose={handleFormClose}
			/>
		</div>
	);
}

export default SubCategoryCard;