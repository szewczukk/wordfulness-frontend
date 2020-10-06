import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Store } from 'store';
import { fetchLessons } from 'store/lessons/actions';

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
					<Link
						className={'panel-block'}
						key={lesson.id}
						to={`/lesson/${lesson.id}`}
					>
						<span className="icon is-left">
							<i className="fas fa-book" aria-hidden="true" />
						</span>
						{lesson.name}
					</Link>
				))
			) : (
				<p className={'panel-block'}>Brak lekcji</p>
			)}
		</>
	);
};
