import {
	LessonsActionTypes,
	LessonsState,
	SET_FETCHED_LESSONS_TYPE,
} from './types';

const initialState: LessonsState = [];

export default (
	state = initialState,
	action: LessonsActionTypes,
): LessonsState => {
	switch (action.type) {
		case SET_FETCHED_LESSONS_TYPE:
			return action.payload;
		default:
			return state;
	}
};
