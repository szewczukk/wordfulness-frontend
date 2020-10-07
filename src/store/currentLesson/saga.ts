import { call, put, takeLatest, takeEvery, select } from 'redux-saga/effects';

import {
	ADD_FLASHCARD_TO_CURRENT_LESSON_TYPE,
	FETCH_CURRENT_LESSON_TYPE,
	AddFlashcardToCurrentLesson,
	FetchCurrentLesson,
	LessonState,
	DeleteFlashcardFromCurrentLesson,
	DELETE_FLASHCARD_FROM_CURRENT_LESSON_TYPE,
} from './types';
import {
	setFetchedCurrentLesson,
	fetchCurrentLesson as fetchCurrentLessonAction,
} from './actions';

function* fetchCurrentLesson(action: FetchCurrentLesson) {
	try {
		const { payload } = action;

		const courseId = yield select((store) => store.user.course);

		const lessonResponse = yield call(
			fetch,
			`http://127.0.0.1:8000/api/lessons/${payload}/?course=${courseId}`,
		);
		const flashcardsResponse = yield call(
			fetch,
			`http://127.0.0.1:8000/api/flashcards/?lesson=${payload}`,
		);

		const lessonResult = yield lessonResponse.json();
		const flashcardsResult = yield flashcardsResponse.json();

		const result: LessonState = {
			id: lessonResult.id,
			name: lessonResult.name,
			created: lessonResult.created,
			flashcards: flashcardsResult,
		};

		yield put(setFetchedCurrentLesson(result));
	} catch (e) {
		console.error(e);
	}
}

function* addFlashcardToCurrentLesson(action: AddFlashcardToCurrentLesson) {
	try {
		yield call(fetch, 'http://127.0.0.1:8000/api/flashcards/', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(action.payload),
		});

		const ac = fetchCurrentLessonAction(
			action.payload.lesson.toString(),
		) as FetchCurrentLesson;

		yield call(fetchCurrentLesson, ac);
	} catch (e) {
		console.error(e);
	}
}

function* deleteFlashcardFromCurrentLesson(
	action: DeleteFlashcardFromCurrentLesson,
) {
	try {
		yield call(
			fetch,
			`http://127.0.0.1:8000/api/flashcards/${action.payload}`,
			{
				method: 'DELETE',
			},
		);

		const lessonId = yield select((store) => store.currentLesson.id);

		const ac = fetchCurrentLessonAction(
			lessonId.toString(),
		) as FetchCurrentLesson;

		yield call(fetchCurrentLesson, ac);
	} catch (e) {
		console.error(e);
	}
}

export function* fetchCurrentLessonSaga() {
	yield takeLatest(FETCH_CURRENT_LESSON_TYPE, fetchCurrentLesson);
}

export function* addFlashcardToCurrentLessonSaga() {
	yield takeEvery(
		ADD_FLASHCARD_TO_CURRENT_LESSON_TYPE,
		addFlashcardToCurrentLesson,
	);
}

export function* deleteFlashcardToCurrentLessonSaga() {
	yield takeEvery(
		DELETE_FLASHCARD_FROM_CURRENT_LESSON_TYPE,
		deleteFlashcardFromCurrentLesson,
	);
}
