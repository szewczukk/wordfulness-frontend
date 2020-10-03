import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './Header';
import CurrentLessonScreen from './CurrentLessonScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import { Store } from '../store';
import Learning from './LearningScreen';

export default () => {
	const { token } = useSelector((state: Store) => state.user);

	return (
		<BrowserRouter>
			<Header />
			<Switch>
				{!token ? (
					<Route path={'*'}>
						<LoginScreen />
					</Route>
				) : (
					<>
						<Route exact path={'/lesson/:id'}>
							<CurrentLessonScreen />
						</Route>
						<Route exact path={'/'}>
							<HomeScreen />
						</Route>
						<Route exact path={'/learn/:id'}>
							<Learning />
						</Route>
					</>
				)}
			</Switch>
		</BrowserRouter>
	);
};
