import React from "react";
import { Route } from "react-router-dom";

import "./Main.scss";

import Header from "../Header";

import { Deposits } from "../../pages/pages"

const Main = ({ full }) => {
	return (
		<div className={`app-main ${full ? 'full' : ''}`}>
			<Header/>

			<div className="app-main-container">
				<Route path="/deposits" component={Deposits}/>
			</div>
		</div>
	)
}

export default Main;