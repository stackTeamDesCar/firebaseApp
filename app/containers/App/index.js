/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */



import React, { memo } from 'react';
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
import Header from 'components/Header';

import { makeSelectLocation, makeSelectCredentials } from './selectors';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div``;

export function App({ location, logged }) {

  return (
    <AppWrapper>
      {location.pathname !== '/' && logged && <Header />}
      {logged && <Switch>
        <Route exact path="/homepage" component={HomePage} />
      </Switch>}
      {logged && <Switch>
        <Route exact path="/profile" component={Profile} />
      </Switch>}
      <Switch>
        <Route exact path="/" component={AccessPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
  logged: makeSelectCredentials(),
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

