/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'LinkHome',
  },
  logout: {
    id: `${scope}.logout`,
    defaultMessage: 'Logout',
  },
  profile: {
    id: `${scope}.profile`,
    defaultMessage: 'Profilo',
  },
});
