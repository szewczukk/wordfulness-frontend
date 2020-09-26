import { call, takeLatest, put } from 'redux-saga/effects';

import {
	CurrentUserState,
	FETCH_USER_AND_TOKEN,
	FetchUserAndToken,
} from './types';
import { setFetchedUserAndToken } from './actions';

function* fetchJwtToken(action: FetchUserAndToken) {
	try {
		const { payload } = action;

		const response = yield call(
			fetch,
			'http://127.0.0.1:8000/api/api-token-auth/',
			{
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			},
		);

		const result = yield response.json();

		const user: CurrentUserState = {
			token: result.token,
			id: result.user.id,
			username: result.user.username,
		};

		yield put(setFetchedUserAndToken(user));
	} catch (e) {
		console.error(e);
	}
}
export function* fetchJwtTokenSaga() {
	yield takeLatest(FETCH_USER_AND_TOKEN, fetchJwtToken);
}
