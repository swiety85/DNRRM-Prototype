import React from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import logo from './../../../assets/images/logo.svg';
import './HomePage.scss';

function Home () {
  const getUsers = () => {
    Axios.get ('/api/users').then (response => console.log (response));
  };

  return (
    <div className="admin">
      <header className="admin__header">
        <img src={logo} className="admin__logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="admin__link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="secondary" onClick={getUsers}>
          GET USERS
        </Button>
      </header>
    </div>
  );
}

export default Home;
