import {
	CurrentCourseActionTypes,
	SET_COURSES_LESSONS_TYPE,
	SET_COURSES_USERS_TYPE,
	State,
} from './types';

const initialState: State = {
	lessons: [],
	users: [],
};

export default (
	state = initialState,
	action: CurrentCourseActionTypes,
): State => {
	switch (action.type) {
		case SET_COURSES_USERS_TYPE:
			return { ...state, users: action.payload };

		case SET_COURSES_LESSONS_TYPE:
			return { ...state, lessons: action.payload };

		default:
			return state;
	}
};
