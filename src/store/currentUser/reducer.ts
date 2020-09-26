import {
	CurrentUserActionTypes,
	CurrentUserState,
	LOG_OUT,
	SET_FETCHED_USER_AND_TOKEN,
} from './types';

const initialState: CurrentUserState = {
	token: undefined,
	username: '',
	id: -1,
};

export default (
	state = initialState,
	action: CurrentUserActionTypes,
): CurrentUserState => {
	switch (action.type) {
		case SET_FETCHED_USER_AND_TOKEN:
			return action.payload;
		case LOG_OUT:
			return initialState;
		default:
			return state;
	}
};
