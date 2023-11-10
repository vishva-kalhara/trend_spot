import React from "react";
import NavButton from "./utils/navButton";
import Bag from "../assets/icons/COCO/Line/Bag.svg";
import menu from "../assets/icons/menu.svg";
import NavLink from "./utils/navItem";

const NavBar = () => {
	return (
		<div className="nav_bar">
			<NavButton label="Trend Spot" />
			<div>
				<NavLink
					label="New Collection"
					item_id="nav_1"
					groupName="navBar"
				/>
				<NavLink label="Men" item_id="nav_2" groupName="navBar" />
				<NavLink label="Women" item_id="nav_3" groupName="navBar" />
				<NavLink
					// options={options1}
					label="Sale 🔥"
					item_id="nav_4"
					groupName="navBar"
				/>
			</div>
			<div>
				<NavButton icon={Bag} />
				<NavButton icon={menu} />
			</div>
		</div>
	);
};

export default NavBar;
