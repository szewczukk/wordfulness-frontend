import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { deleteLesson } from '../store/lessons/actions';

interface Props {
	id: number;
	name: string;
	created: Date;
}

export default (props: Props) => {
	const { id, name, created } = props;
	const dispatch = useDispatch();

	const handleDelete = () => {
		if (window.confirm('Usunąć?')) {
			dispatch(deleteLesson(id));
		}
	};

	return (
		<>
			<p>
				{name} ({created.toLocaleString()})
			</p>
			<Link to={`/lesson/${id}`}>Go to</Link>
			<button onClick={handleDelete}>Delete me!</button>
		</>
	);
};
