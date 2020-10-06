import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { addNewLesson } from 'store/lessons/actions';

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators({ addNewLesson }, dispatch);

type Props = {
	toggleShownModal: () => void;
};

type AllProps = ReturnType<typeof mapDispatchToProps> & Props;

type State = {
	name: string;
};

class AddNewLessonForm extends Component<AllProps, State> {
	state = {
		name: '',
	};

	handleTextInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
		ev.preventDefault();

		const { name, value } = ev.target;

		type PickedType = Pick<State, 'name'>;

		this.setState({ [name]: value } as PickedType);
	};

	handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		this.props.toggleShownModal();
		this.props.addNewLesson({ name: this.state.name });

		this.setState({ name: '' });
	};

	closeModal = (ev: React.MouseEvent<HTMLButtonElement>) => {
		ev.preventDefault();

		this.props.toggleShownModal();
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className={'field'}>
					<div className={'control'}>
						<input
							className={'input'}
							type={'text'}
							name={'name'}
							onChange={this.handleTextInput}
							placeholder={'Nazwa lekcji'}
							autoComplete={'off'}
						/>
					</div>
				</div>
				<div className={'level'}>
					<div className={'level-left'}>
						<input
							className={'button is-primary'}
							type={'submit'}
							value={'Dodaj'}
						/>
					</div>
					<div className={'level-right'}>
						<button className={'button is-danger'} onClick={this.closeModal}>
							Zamknij
						</button>
					</div>
				</div>
			</form>
		);
	}
}

export default connect(null, mapDispatchToProps)(AddNewLessonForm);
