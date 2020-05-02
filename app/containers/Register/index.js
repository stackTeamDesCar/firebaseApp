/**
 *
 * Register
 *
 */

import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectRegister from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import { registerUser } from './actions';

import messages from "./messages";

export function Register({dispatch}) {
  useInjectReducer({ key: "register", reducer });
  useInjectSaga({ key: "register", saga });


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const dispatch = useDispatch;



  // const handleRegistr = (evt) => {
  //   console.log(email, password)
  //   // evt.preventDefault();
  // }

  return (
    <div>
      {/* form per inserire dati di login-fare dispatch con dati----DISPATCH(LOGIN({EMAIL:....,PASSWORD:...})) */}
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <button onClick={() => dispatch(registerUser({ email: email, password: password }))}>registra</button>
    </div>
  );
}

Register.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  register: makeSelectRegister()
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
)(Register);
