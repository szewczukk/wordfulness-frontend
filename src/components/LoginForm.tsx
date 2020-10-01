import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';

import { fetchUserAndToken } from '../store/currentUser/actions';

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators({ fetchUserAndToken }, dispatch);

type Props = ReturnType<typeof mapDispatchToProps> & RouteComponentProps;

type State = {
	username: string;
	password: string;
};

class LoginForm extends Component<Props, State> {
	state = {
		username: '',
		password: '',
	};

	handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		const { username, password } = this.state;

		if (username.length && password.length) {
			this.props.fetchUserAndToken(this.state);
			this.props.history.push('/');
		}
	};

	handleInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
		ev.preventDefault();

		type PickedType = Pick<State, 'username' | 'password'>;

		const { name, value } = ev.target;

		this.setState({ [name]: value } as PickedType);
	};

	render() {
		return (
			<form className={'form'} onSubmit={this.handleSubmit}>
				<div className={'field'}>
					<label className={'label'}>Nazwa użytkownika</label>
					<div className={'control has-icons-left'}>
						<input
							type={'text'}
							autoComplete={'off'}
							placeholder={'jkowalski'}
							className={'input'}
							name={'username'}
							onInput={this.handleInput}
						/>
						<span className="icon is-small is-left">
							<i className="fas fa-user" />
						</span>
					</div>
				</div>
				<div className={'field'}>
					<label className={'label'}>Hasło</label>
					<div className={'control has-icons-left'}>
						<input
							type={'password'}
							autoComplete={'off'}
							placeholder={'********'}
							className={'input'}
							name={'password'}
							onInput={this.handleInput}
						/>
						<span className="icon is-small is-left">
							<i className="fas fa-lock" />
						</span>
					</div>
				</div>
				<div className={'field'}>
					<div className={'control'}>
						<input
							type={'submit'}
							className={'button is-outlined is-primary'}
							value={'Zaloguj się'}
						/>
					</div>
				</div>
			</form>
		);
	}
}

export default withRouter(connect(null, mapDispatchToProps)(LoginForm));
