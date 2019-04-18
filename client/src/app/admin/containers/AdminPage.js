import React, {useState, useEffect} from 'react';
import {Route, Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
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

      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
        <Form inline>
          {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
          <Button variant="outline-secondary" onClick={logout}>Logout</Button>
        </Form>
      </Navbar>
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
