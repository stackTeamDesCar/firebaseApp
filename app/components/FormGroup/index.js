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
  },
}));

function FormGroup({ title, cta, onClick, setEmail, setPassword, message }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" align="center" color="primary">{title}</Typography>
      <Input label="email" type="email" variant="outlined" id="email" fullWidth onChange={setEmail}></Input>
      <Input label="password" type="password" variant="outlined" id="password" fullWidth onChange={setPassword}></Input>
      <Btn variant="contained" onClick={onClick} color="primary" text={cta} />
      {message && <Typography variant="p">{message}</Typography>}
    </div>
  );
}

FormGroup.propTypes = {

};

export default FormGroup;