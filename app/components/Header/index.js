import React, { memo } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import { createStructuredSelector } from "reselect";

import {makeSelectCredentials,makeSelectUserData} from '../../containers/App/selectors';

import ImageAvatar from 'components/Avatar';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { setLogout } from '../../containers/App/actions';

function Header({dispatch,logged,userData}) {

  const onLogout = () => {
    dispatch(setLogout())
  }
  return (
    <div>
      {logged && <NavBar>
        <ImageAvatar src={userData.photo}/>
        <div>
           <HeaderLink to="/profile">
          <FormattedMessage {...messages.profile} />
        </HeaderLink>
        <HeaderLink onClick={onLogout}>
          <FormattedMessage {...messages.logout} />
        </HeaderLink>
        </div>
      </NavBar>}
    </div>
  );
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  logged: makeSelectCredentials(),
  userData: makeSelectUserData(),
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
