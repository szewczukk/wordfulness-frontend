import {
	FETCH_CURRENT_LESSON_TYPE,
	LessonActionTypes,
	LessonState,
	SET_FETCHED_CURRENT_LESSON_TYPE,
} from './types';

export const fetchCurrentLesson = (payload: string): LessonActionTypes => ({
	type: FETCH_CURRENT_LESSON_TYPE,
	payload,
});

export const setFetchedCurrentLesson = (
	payload: LessonState,
): LessonActionTypes => ({
	type: SET_FETCHED_CURRENT_LESSON_TYPE,
	payload,
});
