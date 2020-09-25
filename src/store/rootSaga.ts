import { fork } from 'redux-saga/effects';

import {
	fetchLessonsSaga,
	addNewLessonSaga,
	deleteLessonSaga,
} from './lessons/saga';
import {
	addFlashcardToCurrentLessonSaga,
	deleteFlashcardToCurrentLessonSaga,
	fetchCurrentLessonSaga,
} from './currentLesson/saga';

export default function* () {
	yield fork(fetchLessonsSaga);
	yield fork(fetchCurrentLessonSaga);
	yield fork(addNewLessonSaga);
	yield fork(deleteLessonSaga);
	yield fork(addFlashcardToCurrentLessonSaga);
	yield fork(deleteFlashcardToCurrentLessonSaga);
}
