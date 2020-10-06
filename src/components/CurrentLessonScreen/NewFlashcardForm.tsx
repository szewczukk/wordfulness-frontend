import React, { Component, createRef } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Store } from '../../store';
import { addFlashcardToCurrentLesson } from '../../store/currentLesson/actions';
import { PostFlashcard } from '../../store/currentLesson/types';

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators({ addFlashcardToCurrentLesson }, dispatch);

const mapStateToProps = (state: Store) => ({
	lessonId: state.currentLesson.id,
});

type Props = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;

type State = {
	back: string;
	front: string;
};

class NewFlashcardForm extends Component<Props, State> {
	private frontRef = createRef<HTMLInputElement>();
	private backRef = createRef<HTMLInputElement>();

	state = {
		back: '',
		front: '',
	};

	handleInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
		ev.preventDefault();

		const { name, value } = ev.target;

		type PickedType = Pick<State, 'back' | 'front'>;

		this.setState({ [name]: value } as PickedType);
	};

	handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		const { front, back } = this.state;

		const flashcard: PostFlashcard = {
			front,
			back,
			lesson: this.props.lessonId,
		};

		this.props.addFlashcardToCurrentLesson(flashcard);

		this.setState({ front: '', back: '' });
		if (this.frontRef.current && this.backRef.current) {
			this.frontRef.current.value = '';
			this.backRef.current.value = '';
		}
	};

	render() {
		return (
			<form className={'form'} onSubmit={this.handleSubmit}>
				<div className={'field'}>
					<div className={'control'}>
						<input
							ref={this.frontRef}
							placeholder={'Przód'}
							type={'text'}
							name={'front'}
							className={'input'}
							autoComplete={'off'}
							onInput={this.handleInput}
						/>
					</div>
				</div>
				<div className={'field'}>
					<div className={'control'}>
						<input
							ref={this.backRef}
							placeholder={'Tył'}
							type={'text'}
							name={'back'}
							className={'input'}
							autoComplete={'off'}
							onInput={this.handleInput}
						/>
					</div>
				</div>
				<div className={'field'}>
					<div className={'control'}>
						<input
							value={'Dodaj'}
							type={'submit'}
							className={'button is-primary'}
						/>
					</div>
				</div>
			</form>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewFlashcardForm);
