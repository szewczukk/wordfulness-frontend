import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import lessonsReducer from './lessons/reducer';
import currentLessonReducer from './currentLesson/reducer';
import currentUserReducer from './currentUser/reducer';
import learningSession from './learningSession/reducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
	lessons: lessonsReducer,
	currentLesson: currentLessonReducer,
	user: currentUserReducer,
	learningSession,
});

export type Store = ReturnType<typeof rootReducer>;

const loadStoreFromStorage = () => {
	const state = localStorage.getItem('wordulness-auth');
	return state ? JSON.parse(state) : undefined;
};

const store = createStore(
	rootReducer,
	{ user: loadStoreFromStorage() },
	composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

store.subscribe(() => {
	localStorage.setItem(
		'wordulness-auth',
		JSON.stringify(store.getState().user),
	);
});

sagaMiddleware.run(rootSaga);

export default store;
