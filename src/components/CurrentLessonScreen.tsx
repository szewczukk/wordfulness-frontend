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

	const { name, created, flashcards } = currentLesson;

	return (
		<>
			<h1>
				{name} ({new Date(created).toLocaleString()})
			</h1>
			{flashcards ? (
				flashcards.map((flashcard) => (
					<p key={flashcard.id}>
						{flashcard.back} - {flashcard.front}
					</p>
				))
			) : (
				<h1>No flashcards!</h1>
			)}
		</>
	);
};
