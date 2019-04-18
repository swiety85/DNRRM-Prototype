import React, {useState, useEffect} from 'react';
import {Route, Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Button from 'react-bootstrap/Button';
import Home from '../../home';
import LoginPage, {actions as authActions} from '../../auth';

function AdminPage({match, isAuthenticated, authActions, history}) {
  const [isLoading, setLoading] = useState (true);

  useEffect (() => {
    authActions.getAuthUser ().finally (() => setLoading (false));
  }, []);

  const logout = () => {
    authActions.logout ().then (() => history.push ('/login'));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <div className="admin__container">
      <div className="admin__header">
        <Link to="/login">Login</Link>
        <Button variant="secondary" onClick={logout}>
          Logout
        </Button>
      </div>
      <div className="admin__content">
        <Route exact path={match.path} component={Home} />
      </div>
    </div>
  );
}

export default connect (
  state => ({
    isAuthenticated: state.auth.isLoggedIn,
  }),
  dispatch => ({
    authActions: bindActionCreators (authActions, dispatch),
  })
) (AdminPage);
