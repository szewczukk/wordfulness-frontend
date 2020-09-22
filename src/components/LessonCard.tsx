import React from 'react';

interface Props {
	name: string;
	created: Date;
}

export default (props: Props) => {
	const { name, created } = props;

	return (
		<p>
			{name} ({created.toLocaleString()})
		</p>
	);
};
