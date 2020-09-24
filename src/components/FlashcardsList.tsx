import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCurrentLesson } from '../store/currentLesson/actions';
import { Store } from '../store';

interface ParamTypes {
	id: string;
}

export default () => {
	const dispatch = useDispatch();
	const currentLesson = useSelector((state: Store) => state.currentLesson);
	const { id } = useParams<ParamTypes>();

	useEffect(() => {
		dispatch(fetchCurrentLesson(id));
	}, [dispatch, id]);

	const { flashcards } = currentLesson;

	return (
		<table className={'table'} style={{ width: '50%' }}>
			<tbody>
				{flashcards
					? flashcards.map((flashcard) => (
							<tr key={flashcard.id}>
								<td>{flashcard.back}</td>
								<td>{flashcard.front}</td>
							</tr>
					  ))
					: null}
			</tbody>
		</table>
	);
};
