import React from "react";

export default ({ people = [] }) => {
	return (
		<ul>
			{people.map((item, i) => {
				return (
					<li key={(item, i)}>
						{item.firstName} {item.lastName}
					</li>
				);
			})}
		</ul>
	);
};
