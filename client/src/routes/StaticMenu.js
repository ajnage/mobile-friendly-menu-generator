import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { motion } from "framer-motion";

import { Support } from "@mui/icons-material";
import ErrorPage from "../error-page";
import { Outlet, Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { Box, Button, Paper } from "@mui/material";
import { AppButton } from "../components/AppButton";
import axios from 'axios';

import StaticCategoryCards from "../components/menu_builder/category/StaticCategoryCards";
import InsertCategory from "../components/menu_builder/category/InsertCategoryForm";
import Header from "../components/menu_builder/Header";
import InsertSubCategory from "../components/menu_builder/sub_category/InsertSubCategory";
import StaticSubCategoryCards from "../components/menu_builder/sub_category/StaticSubCategoryCards";
import {
	categoriesData,
	subCategoriesData,
} from "../components/menu_builder/dummyData";

import Row from "react-bootstrap/Row";
import {
	getItems
} from "../axios/API";



// Look into local storage to get updated data otherwise it needs to be fetched from backend

export default function StaticMenuPage() {
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
		<Box className=" h-100">
			<Header />
			<Box className="container mb-5 mt-3">
				<Box className="mt-4 d-flex">
					<h2 className=" pe-3">Categories</h2>
				</Box>

				<Box className="d-flex px-4 overflow-auto flex-nowrap w-100 py-3">
					{categoriesData.map((category) => {
						return (
							<StaticCategoryCards
								key={category.id}
								id={category.id}
								title={category.title}
							/>
						);
					})}
				</Box>

				<Box className="my-4 d-flex">
					<h2 className=" pe-3">Menu</h2>
				</Box>

				<Row lg={5} md={2} sm={2} className=" px-4">
					{data.map((dataObj) => {
						return (
							<StaticSubCategoryCards
								key={dataObj.id}
								id={dataObj.id}
								title={dataObj.name}
								description={dataObj.desc}
								image={dataObj.image}
								price={dataObj.price}
							/>
						);
					})}
				</Row>
			</Box>
		</Box>
	);
}