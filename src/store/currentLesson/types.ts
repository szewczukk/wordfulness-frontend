export interface Flashcard {
	id: number;
	front: string;
	back: string;
	lesson: number;
}

export interface PostFlashcard {
	front: string;
	back: string;
	lesson: number;
}

export interface LessonState {
	id: number;
	name: string;
	created: string;
	flashcards: Flashcard[];
}

export const FETCH_CURRENT_LESSON_TYPE = 'FETCH_CURRENT_LESSON';
export const SET_FETCHED_CURRENT_LESSON_TYPE = 'SET_FETCHED_CURRENT_LESSON';
export const ADD_FLASHCARD_TO_CURRENT_LESSON_TYPE =
	'ADD_FLASHCARD_TO_CURRENT_LESSON';
export const DELETE_FLASHCARD_FROM_CURRENT_LESSON_TYPE =
	'DELETE_FLASHCARD_FROM_CURRENT_LESSON_TYPE';

export interface FetchCurrentLesson {
	type: typeof FETCH_CURRENT_LESSON_TYPE;
	payload: string;
}

export interface SetFetchedCurrentLesson {
	type: typeof SET_FETCHED_CURRENT_LESSON_TYPE;
	payload: LessonState;
}

export interface AddFlashcardToCurrentLesson {
	type: typeof ADD_FLASHCARD_TO_CURRENT_LESSON_TYPE;
	payload: PostFlashcard;
}

export interface DeleteFlashcardFromCurrentLesson {
	type: typeof DELETE_FLASHCARD_FROM_CURRENT_LESSON_TYPE;
	payload: number;
}

export type LessonActionTypes =
	| FetchCurrentLesson
	| SetFetchedCurrentLesson
	| AddFlashcardToCurrentLesson
	| DeleteFlashcardFromCurrentLesson;
