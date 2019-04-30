import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import {actions as authActions} from '../../auth';
import './Omnibar.scss';

function Omnibar({history, authActions}) {
  const logout = () => {
    authActions.logout ().then (() => history.push ('/login'));
  };

  return (
    <header className="omnibar">
      <Navbar variant="dark">
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
    </header>
  );
}

export default withRouter (
  connect (null, dispatch => ({
    authActions: bindActionCreators (authActions, dispatch),
  })) (Omnibar)
);
