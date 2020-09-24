export interface Lesson {
	id: number;
	name: string;
	created: string;
}

export interface PostLesson {
	name: string;
}

export type LessonsState = Lesson[];

export const FETCH_LESSONS_TYPE = 'FETCH_LESSONS';
export const SET_FETCHED_LESSONS_TYPE = 'SET_FETCHED_LESSONS';
export const ADD_NEW_LESSON_TYPE = 'ADD_NEW_LESSON';

export interface FetchLessonsAction {
	type: typeof FETCH_LESSONS_TYPE;
}

export interface SetFetchedLessonsAction {
	type: typeof SET_FETCHED_LESSONS_TYPE;
	payload: Lesson[];
}

export interface AddNewLessonAction {
	type: typeof ADD_NEW_LESSON_TYPE;
	payload: PostLesson;
}

export type LessonsActionTypes =
	| FetchLessonsAction
	| SetFetchedLessonsAction
	| AddNewLessonAction;
