import React from 'react';

type Props = {
	setMove: (arg: boolean) => void;
	handleDeleteButton: () => void;
};

export default (props: Props) => {
	const { setMove, handleDeleteButton } = props;

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
					<button className={'button is-danger'} onClick={handleDeleteButton}>
						Usuń
					</button>
				</div>
			</div>
		</div>
	);
};
