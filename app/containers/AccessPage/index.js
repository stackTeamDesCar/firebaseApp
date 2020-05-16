/**
 *
 * Login
 *
 */

import React, { memo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { login, signIn, setError } from './actions';
import { autoLogin, setLoading } from '../App/actions';
import { push } from 'connected-react-router';
import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import { makeSelectLoading, makeSelectSwitchLogin } from "../App/selectors";
import { makeSelectErrorLogin } from "./selectors";

import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";

import Wrapper from 'components/Wrapper';
import Btn from 'components/Btn';
import LoadingIndicator from 'components/LoadingIndicator';

import FormGroup from 'components/FormGroup';


import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";
import Hidden from '@material-ui/core/Hidden';


export function AccessPage({ dispatch, getData, loading, error }) {

  useInjectReducer({ key: "login", reducer });
  // useInjectSaga({ key: "login", saga });


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const [city, setCity] = useState('');
  const [username, setUsername] = useState('');
  // const [err, setError] = useState(false);

  useEffect(() => {
    dispatch(autoLogin());
    if (loading) setTimeout(() => {
      dispatch(setLoading(false));
    }, 1000)
    console.log('err', error)
  }, loading, error);

  const handleLogin = (evt) => {
    evt.preventDefault();
    dispatch(setLoading(true));
    dispatch(login({ email: email, password: password }))
  }

  const handleRegister = (evt) => {
    evt.preventDefault();
    dispatch(signIn({ email: email, password: password, city: city, username: username }));
    if (!error) dispatch(setLoading(true));
  }

  const switchMode = (evt) => {
    evt.preventDefault();
    dispatch(setError(false));
    setRegister(!register);

  }

  return (
    <React.Fragment>

      {loading ?
        <LoadingIndicator />
        :
        <Grid container justify="center" alignItems="center" style={{ height: '100vh' }}>
          <Grid item xs={12} sm={8}>
            <Wrapper>
              <FormGroup
                setPassword={e => setPassword(e.target.value)}
                setEmail={e => setEmail(e.target.value)}
                setCity={e => setCity(e.target.value)}
                setUsername={e => setUsername(e.target.value)}
                title={register ? "Register" : "Login"}
                cta={register ? "Register" : "Login"}
                register={register}
                getData={getData}
                onClick={register ? handleRegister : handleLogin}
                error={error}
              />
            </Wrapper>
          </Grid>
          <Hidden smDown>
            <Grid item xs={4} style={{ height: "100%" }}>
              <Wrapper flex direction="column" bg>
                <Typography variant="h1" gutterBottom >Hello!</Typography>
                <Typography variant="h6" gutterBottom >Inserisci i tuoi dati personali e ciaone</Typography>
                <Btn text={register ? "Login" : "Registrati"} variant="outlined" border="white" onClick={switchMode} />
              </Wrapper>
            </Grid>
          </Hidden>
        </Grid>
      }
    </React.Fragment>

  );
}

AccessPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  switchLogin: makeSelectSwitchLogin(),
  error: makeSelectErrorLogin(),
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
)(AccessPage);
