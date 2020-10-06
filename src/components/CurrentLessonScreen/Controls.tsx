import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { Store } from 'store';
import { deleteLesson } from 'store/lessons/actions';

export default () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { user } = useSelector((state: Store) => state);
	const { id } = useSelector((state: Store) => state.currentLesson);

	const handleReturn = () => {
		history.push('/');
	};

	const handleDelete = () => {
		dispatch(deleteLesson(id));
	};

	return (
		<div className={'level'}>
			<div className={'level-left'}>
				<div className={'level-item'}>
					<button
						className={'button is-info is-outlined'}
						onClick={handleReturn}
					>
						Powrót
					</button>
				</div>
				<div className={'level-item'}>
					{user.usertype !== 'ST' ? (
						<button className={'button is-danger'} onClick={handleDelete}>
							Usuń
						</button>
					) : (
						<Link className={'button is-success'} to={`/learn/${id}`}>
							Ucz się
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};
