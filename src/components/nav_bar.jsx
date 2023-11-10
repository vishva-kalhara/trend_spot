import React from "react";
import NavButton from "./utils/navButton";
import Bag from "../assets/icons/COCO/Line/Bag.svg";
import menu from "../assets/icons/menu.svg";

const NavBar = () => {
	return (
		<div className="nav_bar">
			<NavButton label="Trend Spot" />
			<div>
				<NavButton icon={Bag} />
				<NavButton icon={menu} />
			</div>
		</div>
	);
};

export default NavBar;
