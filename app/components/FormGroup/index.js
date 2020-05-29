import React, { memo, useState } from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import Btn from 'components/Btn';

import Input from 'components/Input';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
    transition: 'all 1s'
  },
  title: { 
    // padding: props => `${props.paddingTitle}em`
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
}));

function FormGroup(props) {

  const { title, cta, titleSize, paddingTitle, onClick, setEmail, setPassword, setCity, setUsername, setName, setSurname, setPhoto, message, accessMode, error, modifyModal, data } = props;

  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Typography
        className={classes.title}
        paddingTitle={paddingTitle}
        variant={titleSize ? titleSize : 'h1'}
        align="center"
        color="primary">
        {title}
      </Typography>
      {error && <h6>Ci sono stati errori,riprova!</h6>}
      {!modifyModal && <Input label="email" type="email" variant="outlined" id="email" fullWidth onChange={setEmail}></Input>}
      {!modifyModal && <Input label="password" type="password" variant="outlined" id="password" fullWidth onChange={setPassword}></Input>}
      {accessMode && <Input defaultValue={data ? data.name : 'Name'} label="Name" type="text" variant="outlined" id="name" fullWidth onChange={setName}></Input>}
      {accessMode && <Input defaultValue={data ? data.surname : 'Surname'} label="Surname" type="text" variant="outlined" id="surname" fullWidth onChange={setSurname}></Input>}
      {accessMode && <Input defaultValue={data ? data.city : 'City'} label="City" type="text" variant="outlined" id="city" fullWidth onChange={setCity}></Input>}
      {accessMode && <Input defaultValue={data ? data.username : 'Username'} label="Username" type="text" variant="outlined" id="username" fullWidth onChange={setUsername}></Input>}
      {accessMode && !modifyModal &&
        <div className={classes.fileUpload}>
          <label className={classes.inputLabel}>Foto profilo +</label>
          <input className={classes.upload} label="Photo" type="file" variant="outlined" id="photo" fullWidth onChange={setPhoto} />
        </div>
      }
      <Btn variant="contained" onClick={onClick} color="primary" text={cta} />
      {message && <Typography variant="p">{message}</Typography>}
    </div>
  );
}

FormGroup.propTypes = {
};

export default FormGroup;