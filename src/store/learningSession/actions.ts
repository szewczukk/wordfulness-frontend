import {
	CREATE_LEARNING_SESSION,
	FLASHCARD_ANSWER,
	LearningSessionActions,
} from './types';
import { Flashcard } from '../currentLesson/types';

export const createLearningSession = (
	payload: Flashcard[],
): LearningSessionActions => ({
	type: CREATE_LEARNING_SESSION,
	payload,
});

export const flashcardKnowsAnswer = (
	payload: boolean,
): LearningSessionActions => ({
	type: FLASHCARD_ANSWER,
	payload,
});
