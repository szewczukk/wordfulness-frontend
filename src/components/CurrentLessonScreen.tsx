import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import FlashcardsList from './FlashcardsList';
import { deleteLesson } from '../store/lessons/actions';
import { Store } from '../store';

export default () => {
	const [move, setMove] = useState(false);
	const dispatch = useDispatch();
	const currentLesson = useSelector((state: Store) => state.currentLesson);

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
					Utworzono {new Date(created).toLocaleString()}
				</p>
				<div className={'columns'}>
					<div className={'column is-one-third'}>
						<div className={'level'}>
							<div className={'level-left'}>
								<div className={'level-item'}>
									<button
										className={'button is-info is-outlined'}
										onClick={() => setMove(true)}
									>
										Powrót
									</button>
								</div>
								<div className={'level-item'}>
									<button
										className={'button is-danger'}
										onClick={handleDeleteButton}
									>
										Usuń
									</button>
								</div>
							</div>
						</div>
					</div>
					<FlashcardsList />
				</div>
			</div>
		</section>
	) : (
		<Redirect to={'/'} />
	);
};
