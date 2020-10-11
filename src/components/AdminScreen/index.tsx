import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	fetchCoursesLessons,
	fetchCoursesUsers,
} from 'store/currentCourse/actions';
import { Store } from '../../store';
import UsersTable from './UsersTable';

export default () => {
	const dispatch = useDispatch();
	const users = useSelector((state: Store) => state.currentCourse.users);

	useEffect(() => {
		dispatch(fetchCoursesLessons());
		dispatch(fetchCoursesUsers());
	}, []);

	const students = users.filter((user) => user.usertype === 'ST');
	const teachers = users.filter((user) => user.usertype === 'TE');

	return (
		<section className={'section container columns'}>
			<div className={'column'}>
				<UsersTable users={students} header={'Konta uczniowskie'} />

				<button className={'button is-primary'}>
					Dodaj nowe konto uczniowskie
				</button>
			</div>

			<div className={'column'}>
				<UsersTable users={teachers} header={'Konta nauczycielskie'} />

				<button className={'button is-primary'}>
					Dodaj nowe konto nauczycielskie
				</button>
			</div>
		</section>
	);
};
