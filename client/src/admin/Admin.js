import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./home/Home";

function Admin({ match }) {
    return <div className="admin__container">
        <div className="admin__header">
            <Link to="/login">Login</Link>
        </div>
        <div className="admin__content">
            <Route exact path={match.path} component={Home} />
        </div>
    </div>;
} 

export default Admin;