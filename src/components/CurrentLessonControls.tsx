import React from 'react';
import { useSelector } from 'react-redux';
import { Store } from '../store';

type Props = {
	setMove: (arg: boolean) => void;
	handleDeleteButton: () => void;
};

export default (props: Props) => {
	const { setMove, handleDeleteButton } = props;

	const { user } = useSelector((state: Store) => state);

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
				{user.usertype !== 'ST' && (
					<div className={'level-item'}>
						<button className={'button is-danger'} onClick={handleDeleteButton}>
							Usuń
						</button>
					</div>
				)}
			</div>
		</div>
	);
};
