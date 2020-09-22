import {
	LessonsActionTypes,
	SET_FETCHED_LESSONS_TYPE,
	FETCH_LESSONS_TYPE,
	Lesson,
} from './types';

export const fetchLessons = (): LessonsActionTypes => ({
	type: FETCH_LESSONS_TYPE,
});

export const setFetchedLessons = (payload: Lesson[]): LessonsActionTypes => ({
	type: SET_FETCHED_LESSONS_TYPE,
	payload,
});
