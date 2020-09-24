import { call, put, takeLatest } from 'redux-saga/effects';

import {
	FETCH_CURRENT_LESSON_TYPE,
	FetchCurrentLesson,
	LessonState,
} from './types';
import { setFetchedCurrentLesson } from './actions';

function* fetchCurrentLesson(action: FetchCurrentLesson) {
	try {
		const { payload } = action;

		const lessonResponse = yield call(
			fetch,
			`http://127.0.0.1:8000/api/lessons/${payload}/`,
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

export function* fetchCurrentLessonSaga() {
	yield takeLatest(FETCH_CURRENT_LESSON_TYPE, fetchCurrentLesson);
}
