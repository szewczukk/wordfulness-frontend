import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Store } from 'store';
import { fetchCurrentLesson } from 'store/currentLesson/actions';
import { createLearningSession } from 'store/learningSession/actions';
import FlashcardControls from './FlashcardControls';

export default () => {
	const dispatch = useDispatch();
	const { completed } = useSelector((state: Store) => state.learningSession);
	const { flashcards } = useSelector((state: Store) => state.currentLesson);
	const { id } = useParams<{ id: string }>();

	useEffect(() => {
		dispatch(fetchCurrentLesson(id));
	}, []);

	useEffect(() => {
		dispatch(createLearningSession(flashcards));
	}, [flashcards]);

	return (
		<section className={'section'}>
			<div className={'content'}>
				<div className={'columns is-centered'}>
					<div className={'column is-half'}>
						{completed ? (
							<h1>Uczenie skończone! Gratulacje!</h1>
						) : (
							<FlashcardControls />
						)}
					</div>
				</div>
			</div>
		</section>
	);
};
