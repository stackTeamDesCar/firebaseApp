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
import CustomCard from 'components/CustomCard';

import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";
import Slide from '@material-ui/core/Slide';

export function ActivitiesPage() {

  return (
    <Slide direction="left" in mountOnEnter unmountOnExit>
      <div>
        <Wrapper flex direction="column" style={{ height: '10vh' }}>
          <Typography variant="h1" gutterBottom gutterTop >Activities</Typography>
        </Wrapper>
        <Grid container justify="center" alignItems="center" style={{ height: '82vh' }}>
          <Grid item xs={12} >
            <Wrapper flex justify="flex-start" direction="row" >
              {/* da mappare card con attività di ciascun utente */}
              <div style={{ padding: '1em' }}>
                <CustomCard
                  cardTitle="Titolo card"
                  cardContent={<div>Ciaone questo è il contenuto</div>}
                  buttonLabel="Clicca"
                  labelType="green"

                />
              </div>
              <div style={{ padding: '1em' }}>
                <CustomCard
                  cardTitle="Titolo card"
                  cardContent={<div>Ciaone questo è il contenuto</div>}
                  buttonLabel="Clicca"
                  labelType="red"
                />
              </div>
              <div style={{ padding: '1em' }}>
                <CustomCard
                  cardTitle="Titolo card"
                  cardContent={<div>Ciaone questo è il contenuto</div>}
                  buttonLabel="Clicca"
                  labelType="blue"

                />
              </div>
              <div style={{ padding: '1em' }}>
                <CustomCard
                  cardTitle="Titolo card"
                  cardContent={<div>Ciaone questo è il contenuto</div>}
                  buttonLabel="Clicca"
                  labelType="yellow"

                />
              </div>
              <div style={{ padding: '1em', flex: '1' }}>
                <CustomCard
                  cardTitle="Titolo card"
                  cardContent={<div>Ciaone questo è il contenuto</div>}
                  buttonLabel="Clicca"
                  labelType="black"

                />
              </div>

            </Wrapper>
          </Grid>
        </Grid>
      </div>
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
