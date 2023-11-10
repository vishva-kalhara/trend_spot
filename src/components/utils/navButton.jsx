import React from "react";

const NavButton = ({ label, icon }) => {
	const border = icon
		? "border-left: 1.5px solid red;"
		: "border-left: 1.5px solid red;";
	const content = label ? label : <img width="24px" src={icon} />;
	return (
		<button style={{ border }} className="nav_button">
			{content}
		</button>
	);
};

export default NavButton;
