import { call, select, takeEvery, put } from 'redux-saga/effects';

import { FETCH_COURSES_LESSONS_TYPE, FETCH_COURSES_USERS_TYPE } from './types';
import { setCoursesLessons, setCoursesUsers } from './actions';
import { Store } from '../index';

function* fetchCoursesLessons() {
	try {
		const { course } = yield select((state: Store) => state.user);

		const response = yield call(
			fetch,
			`http://127.0.0.1:8000/api/lessons/?course=${course}`,
		);

		const result = yield response.json();

		yield put(setCoursesLessons(result));
	} catch (e) {
		console.error(e);
	}
}

function* fetchCoursesUsers() {
	try {
		const { course } = yield select((state: Store) => state.user);

		const response = yield call(
			fetch,
			`http://127.0.0.1:8000/api/accounts/?course=${course}`,
		);

		const result = yield response.json();

		yield put(setCoursesUsers(result));
	} catch (e) {
		console.error(e);
	}
}

export function* fetchCoursesLessonsSaga() {
	yield takeEvery(FETCH_COURSES_LESSONS_TYPE, fetchCoursesLessons);
}

export function* fetchCoursesUsersSaga() {
	yield takeEvery(FETCH_COURSES_USERS_TYPE, fetchCoursesUsers);
}
