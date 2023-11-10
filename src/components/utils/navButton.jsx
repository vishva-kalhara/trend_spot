import React from "react";

const NavButton = ({ label, icon }) => {
	const content = label ? label : <img src={icon} />;
	return <button className="nav_button">{content}</button>;
};

export default NavButton;
