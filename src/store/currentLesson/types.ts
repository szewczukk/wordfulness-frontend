export interface Flashcard {
	id: number;
	front: string;
	back: string;
}

export interface LessonState {
	name: string;
	created: string;
	flashcards: Flashcard[];
}

export const FETCH_CURRENT_LESSON_TYPE = 'FETCH_CURRENT_LESSON';
export const SET_FETCHED_CURRENT_LESSON_TYPE = 'SET_FETCHED_LESSON';

export interface FetchCurrentLesson {
	type: typeof FETCH_CURRENT_LESSON_TYPE;
	payload: string;
}

export interface SetFetchedCurrentLesson {
	type: typeof SET_FETCHED_CURRENT_LESSON_TYPE;
	payload: LessonState;
}

export type LessonActionTypes = FetchCurrentLesson | SetFetchedCurrentLesson;
