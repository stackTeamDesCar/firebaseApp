import React, { memo,useState } from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Button} from '@material-ui/core';
import Btn from 'components/Btn';

import Input from 'components/Input';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function FormGroup({title, cta, onClick, message }) {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    return (
          <div className={classes.root}>
            <Typography variant="h1" align="center" color="primary">{title}</Typography>
            <Input label="email" type="email" variant="outlined" id="email" fullWidth onChange={e => setEmail(e.target.value)}></Input>
            <Input label="password" type="password" variant="outlined" id="password" fullWidth onChange={e => setPassword(e.target.value)}></Input>
            <Btn variant="contained" onClick={onClick} color="primary" text={cta} />
            {message && <Typography variant="p">{message}</Typography>}     
          </div>
      );
}

FormGroup.propTypes = {
  
};

export default FormGroup;