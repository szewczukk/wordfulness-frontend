import { call, put, takeLatest } from 'redux-saga/effects';

import { FETCH_LESSONS_TYPE } from './types';
import { setFetchedLessons } from './actions';

function* fetchLessons() {
	try {
		const response = yield call(fetch, 'http://127.0.0.1:8000/api/lessons/');
		const result = yield response.json();

		yield put(setFetchedLessons(result));
	} catch (e) {
		console.error(e);
	}
}

export function* fetchLessonsSaga() {
	yield takeLatest(FETCH_LESSONS_TYPE, fetchLessons);
}
