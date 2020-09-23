import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
	id: number;
	name: string;
	created: Date;
}

export default (props: Props) => {
	const { id, name, created } = props;

	return (
		<>
			<p>
				{name} ({created.toLocaleString()})
			</p>
			<Link to={`/lesson/${id}`}>Go to</Link>
		</>
	);
};
