import {
	Credentials,
	CurrentUserActionTypes,
	CurrentUserState,
	FETCH_USER_AND_TOKEN,
	LOG_OUT,
	SET_FETCHED_USER_AND_TOKEN,
} from './types';

export const fetchUserAndToken = (
	payload: Credentials,
): CurrentUserActionTypes => ({
	type: FETCH_USER_AND_TOKEN,
	payload,
});

export const setFetchedUserAndToken = (
	payload: CurrentUserState,
): CurrentUserActionTypes => ({
	type: SET_FETCHED_USER_AND_TOKEN,
	payload,
});

export const logOut = (): CurrentUserActionTypes => ({
	type: LOG_OUT,
});
