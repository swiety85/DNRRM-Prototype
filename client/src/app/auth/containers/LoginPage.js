import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LoginForm from '../components/LoginForm';
import {IconWindow} from '../../common';
import {actions} from '..';
import './LoginPage.scss';

class Login extends React.Component {
  handleSubmit = ({email, password}) => {
    this.props.actions.login (email, password);
  };

  render () {
    return (
      <div className="login__container">
        <h2 className="login__header">Let's get started now!</h2>
        <h6 className="login__header mb-5">
          Or <a href="/">create an account</a> if not registered yet
        </h6>

        <IconWindow icon="fas fa-jedi">
          <LoginForm onSubmit={this.handleSubmit} />
        </IconWindow>

      </div>
    );
  }
}

export default connect (null, dispatch => {
  return {
    actions: bindActionCreators (actions, dispatch),
  };
}) (Login);
