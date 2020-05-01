import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';

import messages from './messages';

function Header() {
  return (
    <div>
      <NavBar>
        <HeaderLink to="/profile">
          <FormattedMessage {...messages.profile} />
        </HeaderLink>
        <HeaderLink to="/login">
          <FormattedMessage {...messages.logout} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
