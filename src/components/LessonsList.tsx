import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchLessons } from '../store/lessons/actions';
import { Store } from '../store';

export default () => {
	const dispatch = useDispatch();
	const lessons = useSelector((state: Store) => state.lessons);

	useEffect(() => {
		dispatch(fetchLessons());
	}, [dispatch]);

	return (
		<>
			{lessons.length ? (
				lessons.map((lesson) => (
					<a
						className={'panel-block'}
						key={lesson.id}
						href={`/lesson/${lesson.id}`}
					>
						<span className="icon is-left">
							<i className="fas fa-book" aria-hidden="true" />
						</span>
						{lesson.name}
					</a>
				))
			) : (
				<p className={'panel-block'}>Brak lekcji</p>
			)}
		</>
	);
};
