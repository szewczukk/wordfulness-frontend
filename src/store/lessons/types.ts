export interface Lesson {
	name: string;
	created: string;
}

export type LessonsState = Lesson[];

export const FETCH_LESSONS_TYPE = 'FETCH_LESSONS';
export const SET_FETCHED_LESSONS_TYPE = 'SET_FETCHED_LESSONS';

export interface FetchLessonsAction {
	type: typeof FETCH_LESSONS_TYPE;
}

export interface SetFetchedLessonsAction {
	type: typeof SET_FETCHED_LESSONS_TYPE;
	payload: Lesson[];
}

export type LessonsActionTypes = FetchLessonsAction | SetFetchedLessonsAction;
