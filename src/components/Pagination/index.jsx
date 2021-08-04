import React from "react";
import "./Pagination.scss";
import Icon from "../../assets/icons/Icon"

const Pagination = ({ className, paginate }) => {


	return (
		<div className={`app-main-pagination ${className}`}>
			<span onClick={() => paginate('prev')}>
				<Icon name="arrow" fill={"#989EB8"}/>
				<span>Prev</span>
			</span>

			<span onClick={() => paginate('next')}>
				<span>Next</span>
				<Icon name="arrow" fill={"#989EB8"} className="app-main-pagination-second"/>
			</span>

			<span onClick={() => paginate('last')}>Last</span>
		</div>
	)
}

export default Pagination
