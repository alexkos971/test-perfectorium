import React, { useState } from "react";
import { Link } from "react-router-dom"
import "./Header.scss";
import Icon from "../../assets/icons/Icon";

const Header = () => {
	const [open, setOpen] = useState(false)

	return (
		<div className={`app-main-header ${open ? 'active' : ''}`}>
			<div className="app-main-header-profile" onClick={() => setOpen(!open)}>
				<span>Kira Huston</span>
				<Icon name="carret" fill='#fff' className="app-main-header-profile-icon"/>
			</div>

			<ul className="app-main-header-menu">
				<li>
					<Link to="/profile"><span>Profile</span></Link>
					
				</li>

				<li>
					<Link to="/leave"><span>Sign out</span></Link>
				</li>
			</ul>
		</div>
	)
}

export default Header;