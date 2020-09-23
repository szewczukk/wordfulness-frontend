import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import HomeScreen from './components/HomeScreen';
import CurrentLessonScreen from './components/CurrentLessonScreen';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Link to={'/'}>Home</Link>
				<Switch>
					<Route path={'/lesson/:id'}>
						<CurrentLessonScreen />
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
