import React from "react";

const NavLink = ({ item_id, label, groupName, options }) => {
	return (
		<div className="NavLink">
			<input
				className="NavLink"
				type="radio"
				id={item_id}
				name={groupName}
			/>
			<label htmlFor={item_id}>
				<div>{label}</div>
				<div>
					<div></div>
				</div>
			</label>
		</div>
	);
};

export default NavLink;
