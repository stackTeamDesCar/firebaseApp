/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */



import React from 'react';
// import { useSelector } from 'react-redux';

import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Profile from 'containers/Profile/Loadable';
import AccessPage from 'containers/AccessPage/Loadable';
import Header from 'components/Header';

import { makeSelectCredentials } from './selectors';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  // max-width: calc(768px + 16px * 2);
  // margin: 0 auto;
  // display: flex;
  // min-height: 100%;
  // padding: 0 16px;
  // flex-direction: column;
`;

export default function App() {

  return (
    <AppWrapper>
      <Header />
      <Switch>
        <Route exact path="/homepage" component={HomePage} />
      </Switch>
      <Switch>
        <Route exact path="/profile" component={Profile} />
      </Switch>
      <Switch>
        <Route exact path="/" component={AccessPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
