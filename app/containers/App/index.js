/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */



import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import Profile from 'containers/Profile/Loadable';
import AccessPage from 'containers/AccessPage/Loadable';
import ChatPage from 'containers/ChatPage/Loadable';
import CalendarPage from 'containers/CalendarPage/Loadable';
import ActivitiesPage from 'containers/ActivitiesPage/Loadable';

import Header from 'components/Header';

import { makeSelectLocation } from './selectors';
import { autoLogin } from './actions';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div``;

export function App({ location, dispatch }) {
  useEffect(() => {
   dispatch(autoLogin());
  }, [])
  return (
    <AppWrapper>
      {location.pathname !== '/' && <Header />}
      <Switch>
        <Route exact path="/homepage" component={HomePage} />
      </Switch>
      <Switch>
        <Route exact path="/profile" component={Profile} />
      </Switch>
      <Switch>
        <Route exact path="/" component={AccessPage} />
      </Switch>
      <Switch>
        <Route exact path="/chat" component={ChatPage} />
      </Switch>
      <Switch>
        <Route exact path="/calendar" component={CalendarPage} />
      </Switch>
      <Switch>
        <Route exact path="/activities" component={ActivitiesPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(App);

