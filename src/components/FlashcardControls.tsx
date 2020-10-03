import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '../store';
import { flashcardKnowsAnswer } from '../store/learningSession/actions';

type Props = {};

export default (props: Props) => {
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

	return (
		<div className={'box'}>
			<progress
				className={'progress is-primary'}
				value={initialLength - flashcards.length - 1}
				max={initialLength}
			/>

			<p onClick={toggleExpose}>
				{exposed ? currentFlashcard?.back : currentFlashcard?.front}
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
