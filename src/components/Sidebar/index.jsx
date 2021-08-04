import React from "react";
import { Link, useLocation } from "react-router-dom";

import Icon from "../../assets/icons/Icon"
import "./Sidebar.scss";

const Sidebar = ({setFull, full}) => {
	const location = useLocation();

	const sidebar = [{
		id: 1,
		name: 'Account Dashboard',
		url: '/dashboard',
		icon: 'dashboard'
	},
	{
		id: 2,
		name: 'Account History',
		url: '/history',
		icon: 'history'
	}, {
		id: 3,
		name: 'Deposits',
		url: '/deposits',
		icon: 'deposits'
	}, {
		id: 4,
		name: 'Withdrawals',
		url: '/withdrawals',
		icon: 'withdrawals'
	}]; 


	return (
		<div className={`app-sidebar ${full ? 'full' : ''}`}>
			{/*<img src={deposits} />*/}

			<div className="app-sidebar-head">
				<span onClick={() => setFull(!full)} className="app-sidebar-head-arrow" >
					<Icon fill={'white'} name="arrow" />
				</span>
			</div>

			<ul className="app-sidebar-list">
				{
					sidebar.map((item, index) => 
						<li key={item.id}>
							<Link to={`${item.url}`} className={`app-sidebar-list-item ${location.pathname === item.url ? 'active' : ''}`}>	
								<Icon name={item.icon} className="app-sidebar-list-item-icon" fill={location.pathname === item.url ? '#0364FF' : '#242446'}/>
								<span className="app-sidebar-list-item-text">{item.name}</span>
							</Link>
						</li>
					)
				}
			</ul>
		</div>
	)
}

export default Sidebar;		