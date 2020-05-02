/**
 *
 * Login
 *
 */

import React, { memo,useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { login } from './actions';

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectLogin from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";

import Wrapper from 'components/Wrapper';
import Input from 'components/Input';

import Button from '@material-ui/core/Button';


export function Login({dispatch}) {
  useInjectReducer({ key: "login", reducer });
  useInjectSaga({ key: "login", saga });


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (evt) => {
    evt.preventDefault();
    dispatch(login({ email: email, password: password }))
  }

  return (
    <Wrapper bg="primary" maxWidth="xl" flex direction="column" >
      <Input label="email" type="email" variant="outlined" id="email" fullWidth onChange={e => setEmail(e.target.value)}></Input>
      <Input label="password" type="password" variant="outlined" id="password" fullWidth onChange={e => setPassword(e.target.value)}></Input>
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </Wrapper>
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
