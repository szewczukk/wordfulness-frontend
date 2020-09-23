import {
	LessonsActionTypes,
	SET_FETCHED_LESSONS_TYPE,
	FETCH_LESSONS_TYPE,
	LessonsState,
} from './types';

export const fetchLessons = (): LessonsActionTypes => ({
	type: FETCH_LESSONS_TYPE,
});

export const setFetchedLessons = (
	payload: LessonsState,
): LessonsActionTypes => ({
	type: SET_FETCHED_LESSONS_TYPE,
	payload,
});
