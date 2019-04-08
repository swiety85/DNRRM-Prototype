import React from 'react';
import Button from 'react-bootstrap/Button';
import './Login.scss';
import LoginForm from './LoginForm';

class Login extends React.Component {
  handleSubmit = ({email, password}) => {

    fetch ('/api/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'same-origin',
      body: JSON.stringify ({
        email,
        password,
      }),
    }).then (response => console.log (response));
  };

  logout = () => {
    fetch ('/api/auth/logout', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
    });
  };

  getUsers = () => {
    fetch ('/api/users', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    }).then (response => console.log (response));
  };

  render () {
    return (
      <div className="login__container">
        <h2 className="login__header">Let's get started now!</h2>
        <h6 className="login__header mb-5">
          Or <a href="/">create an account</a> if not registered yet
        </h6>

        <div className="login__window">
          <div className="login__window-icon">
            <i className="fas fa-jedi" />
          </div>
          <LoginForm onSubmit={this.handleSubmit}></LoginForm>

          <Button type="submit" variant="secondary" onClick={this.getUsers}>
            GET USERS
          </Button>
          <Button type="submit" variant="secondary" onClick={this.logout}>
            Logout
          </Button>
        </div>
      </div>
    );
  }
}

export default Login;
