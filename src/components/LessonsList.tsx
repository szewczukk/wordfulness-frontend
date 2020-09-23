import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchLessons } from '../store/lessons/actions';
import { Store } from '../store';

import LessonCard from './LessonCard';

export default () => {
	const dispatch = useDispatch();
	const lessons = useSelector((state: Store) => state.lessons);

	useEffect(() => {
		dispatch(fetchLessons());
	}, [dispatch]);

	return (
		<>
			{lessons ? (
				lessons.map((lesson) => (
					<LessonCard
						key={lesson.id}
						id={lesson.id}
						name={lesson.name}
						created={new Date(lesson.created)}
					/>
				))
			) : (
				<h1>No lessons!</h1>
			)}
		</>
	);
};
