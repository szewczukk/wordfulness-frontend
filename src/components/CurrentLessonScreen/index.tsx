import React from 'react';
import { useSelector } from 'react-redux';

import { Store } from 'store';
import FlashcardsList from './FlashcardsList';
import NewFlashcardForm from './NewFlashcardForm';
import Controls from './Controls';

export default () => {
	const { user } = useSelector((state: Store) => state);
	const { created, name } = useSelector((state: Store) => state.currentLesson);

	return (
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
						<Controls />
					</div>
					<div className={'column'}>
						<FlashcardsList />
						{user.usertype !== 'ST' && <NewFlashcardForm />}
					</div>
				</div>
			</div>
		</section>
	);
};
