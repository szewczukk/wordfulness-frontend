import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import store from './store';
import HomeScreen from './components/HomeScreen';
import CurrentLessonScreen from './components/CurrentLessonScreen';
import * as serviceWorker from './serviceWorker';
import Header from './components/Header';
import LoginScreen from './components/LoginScreen';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path={'/lesson/:id'}>
						<CurrentLessonScreen />
					</Route>
					<Route path={'/login'}>
						<LoginScreen />
					</Route>
					<Route exact path={'/'}>
						<HomeScreen />
					</Route>
				</Switch>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
