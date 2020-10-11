export interface User {
	usertype: string;
	username: string;
}

export interface Lesson {
	name: string;
}

export interface State {
	users: User[];
	lessons: Lesson[];
}

export const FETCH_COURSES_USERS_TYPE = 'FETCH_COURSES_USERS_TYPE';
export const FETCH_COURSES_LESSONS_TYPE = 'FETCH_COURSES_LESSONS_TYPE';
export const SET_COURSES_USERS_TYPE = 'SET_COURSES_USERS_TYPE';
export const SET_COURSES_LESSONS_TYPE = 'SET_COURSES_LESSONS_TYPE';

export interface FetchCoursesUsersType {
	type: typeof FETCH_COURSES_USERS_TYPE;
}

export interface FetchCoursesLessonsType {
	type: typeof FETCH_COURSES_LESSONS_TYPE;
}

export interface SetCoursesUsersType {
	type: typeof SET_COURSES_USERS_TYPE;
	payload: User[];
}

export interface SetCoursesLessonsType {
	type: typeof SET_COURSES_LESSONS_TYPE;
	payload: Lesson[];
}

export type CurrentCourseActionTypes =
	| FetchCoursesLessonsType
	| FetchCoursesUsersType
	| SetCoursesUsersType
	| SetCoursesLessonsType;
