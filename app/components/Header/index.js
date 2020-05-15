import React, { memo } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import { createStructuredSelector } from "reselect";

import {makeSelectCredentials} from '../../containers/App/selectors';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { setLogout } from '../../containers/App/actions';

function Header({dispatch,logged}) {

  const onLogout = () => {
    dispatch(setLogout())
  }

  return (
    <div>
      {logged && <NavBar>
        <HeaderLink to="/profile">
          <FormattedMessage {...messages.profile} />
        </HeaderLink>
        <HeaderLink onClick={onLogout}>
          <FormattedMessage {...messages.logout} />
        </HeaderLink>
      </NavBar>}
    </div>
  );
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  logged: makeSelectCredentials(),
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
)(Header);
