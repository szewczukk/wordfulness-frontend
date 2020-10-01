import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteFlashcardFromCurrentLesson } from '../store/currentLesson/actions';
import { Store } from '../store';

type Props = {
	id: number;
	back: string;
	front: string;
};

export default ({ id, back, front }: Props) => {
	const dispatch = useDispatch();
	const { user } = useSelector((state: Store) => state);

	const handleClick = () => {
		dispatch(deleteFlashcardFromCurrentLesson(id));
	};

	return (
		<tr>
			<td>{back}</td>
			<td>{front}</td>
			{user.usertype !== 'ST' && (
				<td>
					<button
						className={'button is-danger is-outlined'}
						onClick={handleClick}
					>
						Usuń
					</button>
				</td>
			)}
		</tr>
	);
};
