import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './Header';
import CurrentLessonScreen from './CurrentLessonScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import LearningScreen from './LearningScreen';
import AdminScreen from './AdminScreen';
import { Store } from 'store';

export default () => {
	const { token, usertype } = useSelector((state: Store) => state.user);

	return (
		<BrowserRouter>
			<Header />
			<Switch>
				{!token ? (
					<Route path={'*'}>
						<LoginScreen />
					</Route>
				) : usertype !== 'OW' ? (
					<>
						<Route exact path={'/lesson/:id'}>
							<CurrentLessonScreen />
						</Route>
						<Route exact path={'/'}>
							<HomeScreen />
						</Route>
						<Route exact path={'/learn/:id'}>
							<LearningScreen />
						</Route>
					</>
				) : (
					<Route path={'*'}>
						<AdminScreen />
					</Route>
				)}
			</Switch>
		</BrowserRouter>
	);
};
