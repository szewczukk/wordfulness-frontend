export interface CurrentUserState {
	token: string | undefined;
	username: string;
	usertype: string;
	course: number;
}

export interface Credentials {
	username: string;
	password: string;
}

export const FETCH_USER_AND_TOKEN = 'FETCH_USER_AND_TOKEN';
export const SET_FETCHED_USER_AND_TOKEN = 'SET_FETCHED_USER_AND_TOKEN';
export const LOG_OUT = 'LOG_OUT';

export interface FetchUserAndToken {
	type: typeof FETCH_USER_AND_TOKEN;
	payload: Credentials;
}

export interface SetFetchedUserAndToken {
	type: typeof SET_FETCHED_USER_AND_TOKEN;
	payload: CurrentUserState;
}

export interface LogOut {
	type: typeof LOG_OUT;
}

export type CurrentUserActionTypes =
	| FetchUserAndToken
	| SetFetchedUserAndToken
	| LogOut;
