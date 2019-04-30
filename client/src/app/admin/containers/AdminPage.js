import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Home from '../../home';
import Omnibar from './Ominbar';
import LoginPage, {actions as authActions} from '../../auth';
import './AdminPage.scss';
import Sidebar from './Sidebar';

function AdminPage({match, isAuthenticated, authActions, history}) {
  const [isLoading, setLoading] = useState (true);

  useEffect (() => {
    authActions.getAuthUser ().finally (() => setLoading (false));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <div className="admin">
      
      <Omnibar className="admin__ominbar"></Omnibar>

      <div className="admin__body">
        <Sidebar history={history}></Sidebar>
        <main>
          <Route exact path={match.path} component={Home} />
        </main>
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
