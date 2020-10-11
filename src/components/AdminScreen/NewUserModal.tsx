import React, { useState, useImperativeHandle, forwardRef } from 'react';

export type Handle = {
	toggleIsActive: () => void;
};

export default forwardRef<Handle>((props, ref) => {
	const [isActive, setIsActive] = useState(false);

	const toggleIsActive = () => {
		setIsActive((prev) => !prev);
	};
	useImperativeHandle(ref, () => ({ toggleIsActive }));

	return (
		<div className={`modal ${isActive && 'is-active'}`}>
			<div className="modal-background" />
			<div className="modal-card">
				<header className="modal-card-head">
					<p className="modal-card-title">Dodaj nowego użytkownika</p>
					<button
						className="delete"
						aria-label="close"
						onClick={toggleIsActive}
					/>
				</header>
				<section className="modal-card-body" />
				<footer className="modal-card-foot">
					<button className="button is-success">Dodaj</button>
					<button className="button" onClick={toggleIsActive}>
						Anuluj
					</button>
				</footer>
			</div>
		</div>
	);
});
