import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Store } from 'store';
import LessonsList from './LessonsList';
import AddNewLessonForm from './AddNewLessonForm';

export default () => {
	const [modalState, setModalState] = useState(false);
	const { user } = useSelector((state: Store) => state);

	const toggleShownModal = () => {
		setModalState(!modalState);
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
							onClick={toggleShownModal}
						>
							Nowa lekcja
						</button>
					</div>
				)}
				<div className={`modal ${modalState && 'is-active'}`}>
					<div className={'modal-background'} />
					<div className={'modal-content'}>
						<div className={'box'}>
							<AddNewLessonForm toggleShownModal={toggleShownModal} />
						</div>
					</div>
					<button className={'modal-close is-large'} onClick={toggleShownModal}>
						Zamknij
					</button>
				</div>
			</article>
		</section>
	);
};
