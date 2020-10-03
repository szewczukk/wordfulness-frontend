import {
	CREATE_LEARNING_SESSION,
	FLASHCARD_ANSWER,
	LearningSessionActions,
	ReviewTypes,
	State,
} from './types';
import { Flashcard } from '../currentLesson/types';

import shuffleArray from '../../helpers/shuffleArray';

const initialState: State = {
	flashcards: [],
	completed: true,
	currentFlashcard: undefined,
};

export default (
	state = initialState,
	action: LearningSessionActions,
): State => {
	switch (action.type) {
		case CREATE_LEARNING_SESSION:
			for (const type in ReviewTypes) {
				if (!isNaN(Number(type))) {
					switch (+type) {
						case ReviewTypes.SimpleFlashcard:
							const flash = [...action.payload];

							const duplicated = flash.map((element) => ({
								...element,
								front: element.back,
								back: element.front,
							}));

							const newFlashcards = shuffleArray([
								...flash,
								...duplicated,
							] as Flashcard[]);

							const current = newFlashcards.pop();

							return {
								...state,
								flashcards: newFlashcards,
								currentFlashcard: current,
								completed: typeof current === 'undefined',
							};
					}
				}
			}
			return state;
		case FLASHCARD_ANSWER:
			if (action.payload) {
				const newCurrent = state.flashcards.pop();

				return {
					...state,
					currentFlashcard: newCurrent,
					completed: typeof newCurrent === 'undefined',
				};
			} else {
				const prevFlashcards = [...state.flashcards];
				const oldCurrent = { ...state.currentFlashcard } as Flashcard;

				const newCurrent = state.flashcards.pop();
				const newFlashcards = [...prevFlashcards, oldCurrent];

				return {
					...state,
					currentFlashcard: newCurrent,
					flashcards: newFlashcards,
				};
			}
		default:
			return state;
	}
};
