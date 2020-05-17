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
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";

import FadeIn from 'components/FadeIn';
import Wrapper from 'components/Wrapper';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";

export function Profile() {
  useInjectReducer({ key: "profile", reducer });
  // useInjectSaga({ key: "profile", saga });

  return (
    <FadeIn>
      <div>
        <Grid container justify="center" alignItems="center" style={{ height: '90vh' }}>
          <Grid item xs={4} >
            <Wrapper flex direction="column">

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
      </div>
    </FadeIn>

  );
}

Profile.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  profile: makeSelectProfile()
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
