import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Store } from 'store';
import FlashcardsList from './FlashcardsList';
import { deleteLesson } from 'store/lessons/actions';
import NewFlashcardForm from './NewFlashcardForm';
import CurrentLessonControls from './CurrentLessonControls';

export default () => {
	const dispatch = useDispatch();
	const [move, setMove] = useState(false);
	const { currentLesson } = useSelector((state: Store) => state);
	const { user } = useSelector((state: Store) => state);

	const { id, name, created } = currentLesson;

	const handleDeleteButton = () => {
		dispatch(deleteLesson(id));

		setMove(true);
	};

	return !move ? (
		<section className={'section'}>
			<div className={'container'}>
				<h1 className={'title'}>{name}</h1>
				<p className={'subtitle'}>
					Utworzono{' '}
					<span className={'has-text-primary'}>
						{new Date(created).toLocaleString()}
					</span>
				</p>
				<div className={'columns'}>
					<div className={'column is-two-third'}>
						<CurrentLessonControls
							handleDeleteButton={handleDeleteButton}
							setMove={setMove}
						/>
					</div>
					<div className={'column'}>
						<FlashcardsList />
						{user.usertype !== 'ST' && <NewFlashcardForm />}
					</div>
				</div>
			</div>
		</section>
	) : (
		<Redirect to={'/'} />
	);
};
