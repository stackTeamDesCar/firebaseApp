/**
 *
 * Profile
 *
 */

import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectProfile from "./selectors";
import { editPhoto, editData } from "./actions";
import { setLoading } from "containers/App/actions";
import { makeSelectUserData, makeSelectLoading } from 'containers/App/selectors';

import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";

import Slide from '@material-ui/core/Slide';
import { omit } from 'lodash';

import Wrapper from 'components/Wrapper';
import ImageAvatar from 'components/Avatar';
import CustomModal from 'components/CustomModal';
import LoadingIndicator from 'components/LoadingIndicator';
import FormGroup from 'components/FormGroup';

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

  const [openModal, onOpenModal] = useState(false);

  const [city, setCity] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [error, setError] = useState(false);

  const classes = useStyles();
  const { photo } = userData;

  const data = Object.entries(_.omit(userData, 'photo'));

  const setPhoto = (e) => {
    dispatch(setLoading(true));
    dispatch(editPhoto({ uid: userData.id, photo: e.target.files[0] }));
  }
  const handleModifyData = () => {
    dispatch(setLoading(true));

    const user = {
      id: userData.id,
      name: name ? name : userData.name,
      surname: surname ? surname : userData.surname,
      city: city ? city : userData.city,
      username: username ? username : userData.username,
    };
    dispatch(editData(user));
    onOpenModal(false);

  }

  return (
    <Slide direction="left" in mountOnEnter unmountOnExit>
      {/* {loading || !userData ?
        <LoadingIndicator />
        : */}
      <div>
        <Grid container justify="center" alignItems="center" style={{ height: '90vh' }}>
          <Grid item xs={4} >
            <Wrapper padding={3} flex direction="column">
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
                  <Button size="small" onClick={() => onOpenModal(true)}>Modifica</Button>
                </CardActions>
              </Card>
            </Wrapper>
          </Grid>
        </Grid>
        <CustomModal open={openModal} handleClose={() => onOpenModal(false)}>

          <FormGroup
            setCity={e => setCity(e.target.value)}
            setUsername={e => setUsername(e.target.value)}
            setName={e => setName(e.target.value)}
            setSurname={e => setSurname(e.target.value)}
            title="Modifica dati personali"
            titleSize="h3"
            titlePadding={2}
            cta="Modifica"
            accessMode
            modifyModal
            data={userData}
            onClick={handleModifyData}
            error={error}
          />
        </CustomModal>
      </div>

      {/* } */}
    </Slide>
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
