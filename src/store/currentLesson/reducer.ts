import {
	LessonActionTypes,
	LessonState,
	SET_FETCHED_CURRENT_LESSON_TYPE,
} from './types';

const initialState: LessonState = {
	name: '',
	created: '',
	id: 0,
	flashcards: [],
};

export default (
	state = initialState,
	action: LessonActionTypes,
): LessonState => {
	switch (action.type) {
		case SET_FETCHED_CURRENT_LESSON_TYPE:
			return action.payload;
		default:
			return state;
	}
};
