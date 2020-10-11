import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	fetchCoursesLessons,
	fetchCoursesUsers,
} from 'store/currentCourse/actions';
import { Store } from '../../store';
import UsersTable from './UsersTable';
import NewUserModal, { Handle } from './NewUserModal';

export default () => {
	const dispatch = useDispatch();
	const ref = useRef<Handle>(null);
	const users = useSelector((state: Store) => state.currentCourse.users);

	useEffect(() => {
		dispatch(fetchCoursesLessons());
		dispatch(fetchCoursesUsers());
	}, []);

	const students = users.filter((user) => user.usertype === 'ST');
	const teachers = users.filter((user) => user.usertype === 'TE');

	const openModal = () => {
		if (ref && ref.current) ref.current.toggleIsActive();
	};

	return (
		<section className={'section container'}>
			<div className={'columns'}>
				<div className={'column'}>
					<UsersTable users={students} header={'Konta uczniowskie'} />

					<button className={'button is-primary'} onClick={openModal}>
						Dodaj nowe konto uczniowskie
					</button>
				</div>

				<div className={'column'}>
					<UsersTable users={teachers} header={'Konta nauczycielskie'} />

					<button className={'button is-primary'} onClick={openModal}>
						Dodaj nowe konto nauczycielskie
					</button>
				</div>
			</div>
			<NewUserModal ref={ref} />
		</section>
	);
};
