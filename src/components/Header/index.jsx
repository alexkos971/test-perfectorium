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
				<Link to="/profile">
					<li>
						<span>Profile</span>
					</li>
				</Link>

				<Link to="/leave">
					<li>
						<span>Sign out</span>
					</li>
				</Link>
			</ul>
		</div>
	)
}

export default Header;