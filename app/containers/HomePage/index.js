/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername, getDataList } from './actions';
import { autoLogin } from '../App/actions';
import { makeSelectUsername } from './selectors';
import { makeSelectCredentials } from '../App/selectors';
import reducer from './reducer';
import saga from './saga';
import Section from 'components/Section';
import Icon from 'components/Icon';
import Text from 'components/Text';
import LoadingIndicator from 'components/LoadingIndicator';
const key = 'home';
import tasks from '../../assets/svg/tasks.svg';
import calendar from '../../assets/svg/calendar.svg';
import chat from '../../assets/svg/chat.svg';

const sections = [
  {
    name: 'Chat',
    icon: chat
  },
  {
    name: 'Calendario',
    icon: calendar
  },
  {
    name: 'Attività',
    icon: tasks
  },
];

import { HomeWrapper } from './styled';

export function HomePage({ username, onSubmitForm, getData, dispatch, loading, userData }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    dispatch(autoLogin());
  }, []);


  return (
    <React.Fragment>
      {loading || !userData ? <LoadingIndicator /> :
        <HomeWrapper>
          {sections.map((el, index) => <Section
            key={index}
            display="flex"
            justify="center"
            align="center"
            direction="column"
            width="33.33"
            height="100"
            background="#bdc3c7"
            hover >
            <Icon size="4" icon={el.icon} hover />
            <Text size="1" letterSpacing >{el.name}</Text>
          </Section>)}
        </HomeWrapper>
      }
    </React.Fragment>
  )
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  userData: makeSelectCredentials(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
    getData: () => dispatch(getDataList()),
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
)(HomePage);
