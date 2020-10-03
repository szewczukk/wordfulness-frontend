import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Store } from '../store';

type Props = {
	setMove: (arg: boolean) => void;
	handleDeleteButton: () => void;
};

export default (props: Props) => {
	const { setMove, handleDeleteButton } = props;

	const { user } = useSelector((state: Store) => state);
	const { id } = useSelector((state: Store) => state.currentLesson);

	return (
		<div className={'level'}>
			<div className={'level-left'}>
				<div className={'level-item'}>
					<button
						className={'button is-info is-outlined'}
						onClick={() => setMove(true)}
					>
						Powrót
					</button>
				</div>
				<div className={'level-item'}>
					{user.usertype !== 'ST' ? (
						<button className={'button is-danger'} onClick={handleDeleteButton}>
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
