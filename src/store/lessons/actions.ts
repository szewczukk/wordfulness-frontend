import {
	ADD_NEW_LESSON_TYPE,
	FETCH_LESSONS_TYPE,
	LessonsActionTypes,
	LessonsState,
	PostLesson,
	SET_FETCHED_LESSONS_TYPE,
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

export const addNewLesson = (payload: PostLesson): LessonsActionTypes => ({
	type: ADD_NEW_LESSON_TYPE,
	payload,
});
