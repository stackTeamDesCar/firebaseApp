/**
 *
 * Login
 *
 */

import React, { memo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { login } from './actions';
import { autoLogin } from '../App/actions';
import { push } from 'connected-react-router';

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectLogin from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";

import Wrapper from 'components/Wrapper';
import Btn from 'components/Btn';

import FormGroup from 'components/FormGroup';


import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";
import Hidden from '@material-ui/core/Hidden';

export function Login({ dispatch, getData }) {
  useInjectReducer({ key: "login", reducer });
  useInjectSaga({ key: "login", saga });


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    dispatch(autoLogin());
  }, []);

  const handleLogin = (evt) => {
    evt.preventDefault();
    dispatch(login({ email: email, password: password }))
  }

  const goToRegister = (evt) => {
    evt.preventDefault();
    dispatch(push('/register'));
  }

  return (
    <Grid container justify="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item xs={12} sm={8}>
        <Wrapper>
          <FormGroup
            setPassword={e => setPassword(e.target.value)}
            setEmail={e => setEmail(e.target.value)}
            title="Login"
            cta="Login"
            getData={getData}
            onClick={handleLogin}
          />
        </Wrapper>
      </Grid>
      <Hidden smDown>
        <Grid item xs={4} style={{ height: "100%" }}>
          <Wrapper flex direction="column" bg>
            <Typography variant="h1" gutterBottom color="textPrimary">Hello!</Typography>
            <Typography variant="h6" gutterBottom color="textPrimary">Inserisci i tuoi dati personali e ciaone</Typography>
            <Btn text="Registrati" variant="outlined" border="white" onClick={goToRegister} />
          </Wrapper>
        </Grid>
      </Hidden>

    </Grid>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(Login);
