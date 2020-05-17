/**
 *
 * Profile
 *
 */

import React, { memo } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectProfile from "./selectors";
import { makeSelectUserData } from 'containers/App/selectors';

import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";

import FadeIn from 'components/FadeIn';
import Wrapper from 'components/Wrapper';
import ImageAvatar from 'components/Avatar';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";

export function Profile({ userData }) {
  useInjectReducer({ key: "profile", reducer });
  // useInjectSaga({ key: "profile", saga });
  const { photo } = userData;
  return (
    <FadeIn>
      <Grid container justify="center" alignItems="center" style={{ height: '90vh' }}>
        <Grid item xs={4} >
          <Wrapper flex direction="column">
            <ImageAvatar src={photo} size={200} />
            <Typography variant="h1" gutterBottom >Hello!</Typography>
            <Typography variant="h6" gutterBottom >Inserisci i tuoi dati personali e ciaone</Typography>
          </Wrapper>
        </Grid>
        {/* <Grid item xs={4} >
            <Wrapper flex direction="column">
              <Typography variant="h1" gutterBottom >Hello!</Typography>
              <Typography variant="h6" gutterBottom >Inserisci i tuoi dati personali e ciaone</Typography>
            </Wrapper>
          </Grid> */}
      </Grid>
    </FadeIn>

  );
}

Profile.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  profile: makeSelectProfile(),
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
)(Profile);
