import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Store } from 'store';
import { flashcardKnowsAnswer } from 'store/learningSession/actions';

export default () => {
	const [exposed, setExpose] = useState(false);
	const dispatch = useDispatch();
	const { currentFlashcard, initialLength, flashcards } = useSelector(
		(state: Store) => state.learningSession,
	);

	const toggleExpose = () => {
		setExpose((prev) => !prev);
	};

	const handleKnowingButtons = (knows: boolean) => {
		dispatch(flashcardKnowsAnswer(knows));
		toggleExpose();
	};

	const length = initialLength - flashcards.length - 1;

	return (
		<div className={'box'}>
			<p>
				{length} / {initialLength}
			</p>
			<progress
				className={'progress is-primary'}
				value={length}
				max={initialLength}
			/>

			<p onClick={toggleExpose} className={'is-size-2'}>
				{currentFlashcard?.front} {exposed && ` - ${currentFlashcard?.back}`}
			</p>

			<div className={'level'}>
				<div className={'level-left'}>
					{exposed ? (
						<>
							<div className={'level-item'}>
								<button
									className={'button'}
									onClick={() => handleKnowingButtons(true)}
								>
									Znam!
								</button>
							</div>
							<div
								className={'level-item'}
								onClick={() => handleKnowingButtons(false)}
							>
								<button className={'button'}>Nie znam..</button>
							</div>
						</>
					) : (
						<div className={'level-item'}>
							<button className={'button'} onClick={toggleExpose}>
								Odsłoń..
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
