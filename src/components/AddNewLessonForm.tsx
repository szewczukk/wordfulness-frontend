import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { addNewLesson } from '../store/lessons/actions';

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators({ addNewLesson }, dispatch);

type Props = ReturnType<typeof mapDispatchToProps>;

type State = {
	name: string;
};

class AddNewLessonForm extends Component<Props, State> {
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

		this.props.addNewLesson({ name: this.state.name });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type={'text'} name={'name'} onChange={this.handleTextInput} />
				<input type={'submit'} />
			</form>
		);
	}
}

export default connect(null, mapDispatchToProps)(AddNewLessonForm);
