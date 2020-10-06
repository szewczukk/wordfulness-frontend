import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Store } from 'store';
import LessonsList from './LessonsList';
import Modal from './Modal';

export default () => {
	const [modalState, setModalState] = useState(false);
	const { user } = useSelector((state: Store) => state);

	const toggleModalState = () => {
		setModalState((prev) => !prev);
	};

	return (
		<section className={'section'}>
			<article className={'container panel is-primary column is-4'}>
				<p className={'panel-heading'}>Dostępne lekcje:</p>
				<LessonsList />
				{user.usertype !== 'ST' && (
					<div className={'panel-block'}>
						<button
							className={'button is-fullwidth is-link'}
							onClick={toggleModalState}
						>
							Nowa lekcja
						</button>
					</div>
				)}
				<Modal isDisplayed={modalState} toggleModalState={toggleModalState} />
			</article>
		</section>
	);
};
