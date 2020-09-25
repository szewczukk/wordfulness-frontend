import React from 'react';

export default () => {
	return (
		<div className={'navbar'}>
			<div className={'navbar-brand'}>
				<a className="navbar-item" href="/">
					<img
						src="https://bulma.io/images/bulma-logo.png"
						width="112"
						height="28"
					/>
				</a>

				<a
					role="button"
					className="navbar-burger"
					aria-label="menu"
					aria-expanded="false"
				>
					<span aria-hidden="true" />
					<span aria-hidden="true" />
					<span aria-hidden="true" />
				</a>
			</div>
			<div className={'navbar-menu'}>
				<div className={'navbar-end'}>
					<div className={'navbar-item'}>
						<div className={'buttons'}>
							<a className={'button is-info is-primary'} href={'/login'}>
								Zaloguj się
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
