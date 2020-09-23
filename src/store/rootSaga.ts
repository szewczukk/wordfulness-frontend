import { fork } from 'redux-saga/effects';

import { fetchLessonsSaga } from './lessons/saga';
import { fetchCurrentLessonSaga } from './currentLesson/saga';

export default function* () {
	yield fork(fetchLessonsSaga);
	yield fork(fetchCurrentLessonSaga);
}
