/**
 *
 * ActivitiesPage
 *
 */

import React, { memo } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectActivitiesPage from "./selectors";
import reducer from "./reducer";
import saga from "./saga";

import Wrapper from 'components/Wrapper';

import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";
import Slide from '@material-ui/core/Slide';

export function ActivitiesPage() {

  return (
    <Slide direction="left" in mountOnEnter unmountOnExit>
        <Grid container justify="center" alignItems="center" style={{ height: '90vh' }}>
          <Grid item xs={4} >
            <Wrapper flex direction="column">

              <Typography variant="h1" gutterBottom >Activities</Typography>
            </Wrapper>
          </Grid>
        </Grid>
    </Slide> 

  );
}

ActivitiesPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  activitiesPage: makeSelectActivitiesPage()
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
)(ActivitiesPage);
