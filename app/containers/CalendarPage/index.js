/**
 *
 * CalendarPage
 *
 */

import React, { memo } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectCalendarPage from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";
import Slide from '@material-ui/core/Slide';
import Wrapper from 'components/Wrapper';


export function CalendarPage() {

  return (
    <Slide direction="left" in mountOnEnter unmountOnExit>
        <Grid container justify="center" alignItems="center" style={{ height: '90vh' }}>
          <Grid item xs={4} >
            <Wrapper flex direction="column">

              <Typography variant="h1" gutterBottom >Calendar</Typography>
            </Wrapper>
          </Grid>
        </Grid>
    </Slide>

  );
}

CalendarPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  calendarPage: makeSelectCalendarPage()
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
)(CalendarPage);
