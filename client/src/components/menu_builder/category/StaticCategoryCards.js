import React from "react";

// import EditCategoryForm from "./EditCategoryForm";

function StaticCategoryCards(props) {
	return (
		<>
			<div className=" my-auto">
				<h4 className=" fw-bold fs-5 border border-2 px-3 m-2 rounded pt-0 mt-0 ">
					{props.title}
				</h4>
			</div>
		</>
	);
}

export default StaticCategoryCards;
