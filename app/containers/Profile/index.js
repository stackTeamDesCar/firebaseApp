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
import { editPhoto } from "./actions";
import { setLoading } from "containers/App/actions";
import { makeSelectUserData,makeSelectLoading } from 'containers/App/selectors';

import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";

import { omit } from 'lodash';

import FadeIn from 'components/FadeIn';
import Wrapper from 'components/Wrapper';
import ImageAvatar from 'components/Avatar';
import LoadingIndicator from 'components/LoadingIndicator';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  fileUpload: {
    position: 'relative',
    overflow: 'hidden',
    margin: '1em 0 3em',
  },
  upload: {
    position: 'absolute',
    top: '0',
    right: '0',
    margin: '0',
    padding: '0',
    fontSize: '20px',
    cursor: 'pointer',
    opacity: '0',
    filter: 'alpha(opacity=0)'
  },
  inputLabel: {
    color: 'rgba(0,0,0,.5)'
  }
});
export function Profile({ userData, loading, dispatch }) {
  useInjectReducer({ key: "profile", reducer });


  const classes = useStyles();
  const { photo } = userData;

  const data = Object.entries(_.omit(userData, 'photo'));

  const setPhoto = (e) => { dispatch(setLoading(true)); dispatch(editPhoto({ uid: userData.id, photo: e.target.files[0] })); }

  return (
    <FadeIn>
      {loading || !userData ?
        <LoadingIndicator />
        :
        <Grid container justify="center" alignItems="center" style={{ height: '90vh' }}>
          <Grid item xs={4} >
            <Wrapper flex direction="column">
              <ImageAvatar src={photo} size={400} />
              <div className={classes.fileUpload}>
                <label className={classes.inputLabel}>Edit</label>
                <input className={classes.upload} label="Photo" type="file" variant="outlined" id="photo" fullWidth onChange={setPhoto} />
              </div>
            </Wrapper>
          </Grid>
          <Grid item xs={4} >
            <Wrapper flex direction="column">
              <Card className={classes.root}>
                <CardContent>
                  {data.map((el) => <Typography variant="body2" component="p">
                    {el[0]} : {el[1]}
                  </Typography>)}
                </CardContent>
                <CardActions>
                  <Button size="small">Modifica</Button>
                </CardActions>
              </Card>
            </Wrapper>
          </Grid>

        </Grid>
      }
    </FadeIn>

  );
}

Profile.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  profile: makeSelectProfile(),
  userData: makeSelectUserData(),
  loading: makeSelectLoading(),
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
