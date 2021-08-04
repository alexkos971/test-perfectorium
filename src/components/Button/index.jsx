import React from "react";
import "./Button.scss"

const Button = ({ text, className, onClick }) => {
	return (
		<button onClick={onClick} className={`app-main-button ${className}`}>{text}</button>
	)
}

export default Button;