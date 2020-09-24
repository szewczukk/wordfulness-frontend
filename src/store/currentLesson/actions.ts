import {
	ADD_FLASHCARD_TO_CURRENT_LESSON_TYPE,
	FETCH_CURRENT_LESSON_TYPE,
	LessonActionTypes,
	LessonState,
	PostFlashcard,
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

export const addFlashcardToCurrentLesson = (
	payload: PostFlashcard,
): LessonActionTypes => ({
	type: ADD_FLASHCARD_TO_CURRENT_LESSON_TYPE,
	payload,
});
