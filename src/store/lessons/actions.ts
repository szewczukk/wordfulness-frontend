import {
	ADD_NEW_LESSON_TYPE,
	DELETE_LESSON_TYPE,
	FETCH_LESSONS_TYPE,
	SET_FETCHED_LESSONS_TYPE,
	LessonsActionTypes,
	LessonsState,
	PostLesson,
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

export const deleteLesson = (payload: number): LessonsActionTypes => ({
	type: DELETE_LESSON_TYPE,
	payload,
});
