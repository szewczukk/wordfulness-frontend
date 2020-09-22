import { fork } from 'redux-saga/effects';

import { fetchLessonsSaga } from './lessons/saga';

export default function* () {
	yield fork(fetchLessonsSaga);
}
