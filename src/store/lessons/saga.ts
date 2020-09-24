import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';

import {
	ADD_NEW_LESSON_TYPE,
	FETCH_LESSONS_TYPE,
	DELETE_LESSON_TYPE,
	AddNewLessonAction,
} from './types';
import { setFetchedLessons } from './actions';
import { DeleteLessonAction } from './types';

function* fetchLessons() {
	try {
		const response = yield call(fetch, 'http://127.0.0.1:8000/api/lessons/');
		const result = yield response.json();

		yield put(setFetchedLessons(result));
	} catch (e) {
		console.error(e);
	}
}

function* addNewLesson(action: AddNewLessonAction) {
	try {
		yield call(fetch, 'http://127.0.0.1:8000/api/lessons/', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(action.payload),
		});

		yield call(fetchLessons);
	} catch (e) {
		console.error(e);
	}
}

function* deleteLesson(action: DeleteLessonAction) {
	try {
		yield call(fetch, `http://127.0.0.1:8000/api/lessons/${action.payload}/`, {
			method: 'DELETE',
		});

		yield call(fetchLessons);
	} catch (e) {
		console.error(e);
	}
}

export function* fetchLessonsSaga() {
	yield takeLatest(FETCH_LESSONS_TYPE, fetchLessons);
}

export function* addNewLessonSaga() {
	yield takeEvery(ADD_NEW_LESSON_TYPE, addNewLesson);
}

export function* deleteLessonSaga() {
	yield takeEvery(DELETE_LESSON_TYPE, deleteLesson);
}
