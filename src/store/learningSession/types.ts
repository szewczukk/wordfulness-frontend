import { Flashcard } from '../currentLesson/types';

export enum ReviewTypes {
	SimpleFlashcard,
}

export interface State {
	flashcards: Flashcard[];
	completed: boolean;
	currentFlashcard: Flashcard | undefined;
}

export const CREATE_LEARNING_SESSION = 'CREATE_LEARNING_SESSION';
export const FLASHCARD_ANSWER = 'FLASHCARD_ANSWER';

export interface CreateLearningSession {
	type: typeof CREATE_LEARNING_SESSION;
	payload: Flashcard[];
}

export interface FlashcardAnswer {
	type: typeof FLASHCARD_ANSWER;
	payload: boolean;
}

export type LearningSessionActions = CreateLearningSession | FlashcardAnswer;
