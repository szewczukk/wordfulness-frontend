import React from 'react';

import AddNewLessonForm from './AddNewLessonForm';

type Props = {
	isDisplayed: boolean;
	toggleModalState: () => void;
};

export default ({ isDisplayed, toggleModalState }: Props) => (
	<div className={`modal ${isDisplayed && 'is-active'}`}>
		<div className={'modal-background'} />
		<div className={'modal-content'}>
			<div className={'box'}>
				<AddNewLessonForm onClose={toggleModalState} />
			</div>
		</div>
		<button className={'modal-close is-large'} onClick={toggleModalState}>
			Zamknij
		</button>
	</div>
);
