import React from 'react';

import NewLessonForm from './NewLessonForm';

type Props = {
	isDisplayed: boolean;
	toggleModalState: () => void;
};

export default ({ isDisplayed, toggleModalState }: Props) => (
	<div className={`modal ${isDisplayed && 'is-active'}`}>
		<div className={'modal-background'} />
		<div className={'modal-content'}>
			<div className={'box'}>
				<NewLessonForm onClose={toggleModalState} />
			</div>
		</div>
		<button className={'modal-close is-large'} onClick={toggleModalState}>
			Zamknij
		</button>
	</div>
);
