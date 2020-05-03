import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    padding: '.8rem 3rem',
    borderRadius: '30px',
    border: props => props.border ? `1px solid ${props.border}` : '',
  },
}));

function Btn(props) {
  const classes = useStyles(props);
    return (
    <Button variant={props.variant} color={props.color} onClick={props.onClick} className={classes.root}>{props.text}</Button>
      );
}

Btn.propTypes = {
  maxWidth: PropTypes.string,
};

export default Btn;