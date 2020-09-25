import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCurrentLesson } from '../store/currentLesson/actions';
import { Store } from '../store';
import FlashcardRow from './FlashcardRow';

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
		<table className={'table is-hoverable is-fullwidth'}>
			<tbody>
				{flashcards.length > 0 ? (
					flashcards.map((flashcard) => (
						<FlashcardRow key={flashcard.id} {...flashcard} />
					))
				) : (
					<p>Brak fiszek</p>
				)}
			</tbody>
		</table>
	);
};
