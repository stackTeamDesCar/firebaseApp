import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    border: '1px solid white',
    margin: '1rem',
    color: '#fff',
    width: '30%',
    
  },
}));


function Input({id, label, variant, onChange, fullWidth}) {
  const classes = useStyles();
    return (
      <TextField id={id} label={label} variant={variant} onChange={onChange} className={classes.root} size="large" />
    );
  }

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string,
};

export default Input;