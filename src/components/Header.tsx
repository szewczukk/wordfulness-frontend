import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { logOut } from '../store/currentUser/actions';
import { Store } from '../store';

export default () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { token, username } = useSelector((state: Store) => state.user);

	const handleLogOut = () => {
		dispatch(logOut());
		history.push('/');
	};

	return (
		<div className={'navbar'}>
			<div className={'navbar-brand'}>
				<a className="navbar-item" href="/">
					<img
						src="https://bulma.io/images/bulma-logo.png"
						width="112"
						height="28"
						alt={'logo'}
					/>
				</a>

				<a
					role="button"
					className="navbar-burger"
					aria-label="menu"
					aria-expanded="false"
					href={'/'}
				>
					<span aria-hidden="true" />
					<span aria-hidden="true" />
					<span aria-hidden="true" />
				</a>
			</div>
			<div className={'navbar-menu'}>
				<div className={'navbar-end'}>
					{token ? (
						<>
							<div className={'navbar-item'}>
								<span className="icon">
									<i className="fas fa-user" />
								</span>
								<p>Witaj, {username}!</p>
							</div>
							<div className={'navbar-item'}>
								<div className={'buttons'}>
									<button
										className={'button is-info is-danger'}
										onClick={handleLogOut}
									>
										Wyloguj się
									</button>
								</div>
							</div>
						</>
					) : (
						<div className={'navbar-item'}>
							<div className={'buttons'}>
								<a className={'button is-info is-primary'} href={'/'}>
									Log in
								</a>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
