import React, { useState, useEffect } from "react";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import EditSubCategoryForm from "./EditSubCategoryForm";
import {
	getItems
} from "../../../axios/API";


function StaticSubCategoryCards(props) {
	const [data, setData] = useState([])

	useEffect(() => {
		getItems()
			.then(function (response) {
				// handle success
				console.log('Here is the response data', response.data);
				const prices = response.data.map(({ price }) =>
					price
				)
				console.log('Prices: ', prices)
				setData(response.data)
				// console.log('data state.price: ', data[1].price)
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.finally(function () {
				// always executed
			});
	}, [])

	return (
		<div>
			<Col>
				<Card>
					<Card.Img variant="top" src={props.image} alt="Card image" />
					<Card.Body className=" p-0 m-0">
						<Card.Title className=" text-center fs-4">{props.title}</Card.Title>

						<Card.Text className=" text-center">
							<p className=" fw-bold fst-normal">{props.price}$</p>

							<p className=" text-secondary small">{props.description}</p>
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</div>
	);
}

export default StaticSubCategoryCards;