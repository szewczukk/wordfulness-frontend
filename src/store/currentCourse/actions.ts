import {
	CurrentCourseActionTypes,
	FETCH_COURSES_LESSONS_TYPE,
	FETCH_COURSES_USERS_TYPE,
	Lesson,
	SET_COURSES_LESSONS_TYPE,
	SET_COURSES_USERS_TYPE,
	User,
} from './types';

export const fetchCoursesUsers = (): CurrentCourseActionTypes => ({
	type: FETCH_COURSES_USERS_TYPE,
});

export const fetchCoursesLessons = (): CurrentCourseActionTypes => ({
	type: FETCH_COURSES_LESSONS_TYPE,
});
export const setCoursesLessons = (
	payload: Lesson[],
): CurrentCourseActionTypes => ({
	type: SET_COURSES_LESSONS_TYPE,
	payload,
});

export const setCoursesUsers = (payload: User[]): CurrentCourseActionTypes => ({
	type: SET_COURSES_USERS_TYPE,
	payload,
});
