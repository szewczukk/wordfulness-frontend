import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { Store } from 'store';
import { fetchCurrentLesson } from 'store/currentLesson/actions';
import { createLearningSession as createLearningSessionAction } from 'store/learningSession/actions';
import FlashcardControls from './FlashcardControls';

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(
		{ fetchCurrentLesson, createLearningSession: createLearningSessionAction },
		dispatch,
	);

const mapStateToProps = (state: Store) => ({
	lessonFlashcards: state.currentLesson.flashcards,
	completed: state.learningSession.completed,
});

interface RouteInfo {
	id: string;
}

type AllProps = ReturnType<typeof mapDispatchToProps> &
	ReturnType<typeof mapStateToProps> &
	RouteComponentProps<RouteInfo>;

class Index extends Component<AllProps, any> {
	componentDidMount() {
		this.props.fetchCurrentLesson(this.props.match.params.id);
	}

	componentDidUpdate(prevProps: Readonly<AllProps>) {
		const { lessonFlashcards, createLearningSession } = this.props;

		if (lessonFlashcards !== prevProps.lessonFlashcards) {
			createLearningSession(lessonFlashcards);
		}
	}

	render() {
		return (
			<section className={'section'}>
				<div className={'content'}>
					<div className={'columns is-centered'}>
						<div className={'column is-half'}>
							{this.props.completed ? (
								<h1>Uczenie skończone! Gratulacje!</h1>
							) : (
								<FlashcardControls />
							)}
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
