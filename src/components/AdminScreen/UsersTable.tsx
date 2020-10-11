import React from 'react';
import { User } from '../../store/currentCourse/types';

type Props = {
	users: User[];
	header: string;
};

export default ({ users, header }: Props) => (
	<table className={'table is-striped'}>
		<thead>
			<tr>
				<th>{header}</th>
			</tr>
		</thead>
		<tfoot>
			<tr>
				<th>Ilość: {users.length}</th>
			</tr>
		</tfoot>
		<tbody>
			{users.map((user) => (
				<tr>
					<td>{user.username}</td>
				</tr>
			))}
		</tbody>
	</table>
);
