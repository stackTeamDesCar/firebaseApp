/**
 *
 * ChatPage
 *
 */

import React, { memo } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectChatPage from "./selectors";
import reducer from "./reducer";
import saga from "./saga";


import Wrapper from 'components/Wrapper';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";
import Slide from '@material-ui/core/Slide';

export function ChatPage() {

  
  return (
    <Slide direction="left" in mountOnEnter unmountOnExit>
        <Grid container justify="center" alignItems="center" style={{ height: '90vh' }}>
          <Grid item xs={4} >
            <Wrapper flex direction="column">

              <Typography variant="h1" gutterBottom >Chat</Typography>
            </Wrapper>
          </Grid>
        </Grid>
    </Slide>
  );
}

ChatPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  chatPage: makeSelectChatPage()
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
)(ChatPage);
