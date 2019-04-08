import React from "react";
import logo from './../../assets/images/logo.svg';
import './Home.scss';

function Home() {
    return (
        <div className="admin">
            <header className="admin__header">
                <img src={logo} className="admin__logo" alt="logo" />
                <p>TEST</p>
                <button type="button" className="btn btn-primary">Primary</button>
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
            </header>
        </div>
    );
} 

export default Home;