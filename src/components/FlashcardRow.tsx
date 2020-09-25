import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteFlashcardFromCurrentLesson } from '../store/currentLesson/actions';

type Props = {
	id: number;
	back: string;
	front: string;
};

export default ({ id, back, front }: Props) => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(deleteFlashcardFromCurrentLesson(id));
	};

	return (
		<tr>
			<td>{back}</td>
			<td>{front}</td>
			<td>
				<button
					className={'button is-danger is-outlined'}
					onClick={handleClick}
				>
					Usuń
				</button>
			</td>
		</tr>
	);
};
