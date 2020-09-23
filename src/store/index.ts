import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import lessonsReducer from './lessons/reducer';
import currentLessonReducer from './currentLesson/reducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
	lessons: lessonsReducer,
	currentLesson: currentLessonReducer,
});

export type Store = ReturnType<typeof rootReducer>;

export default createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);
