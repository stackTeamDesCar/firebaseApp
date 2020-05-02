import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.main, //da cambiare
    minHeight: '92vh',
    display: props => props.flex ? 'flex' : '',
    justifyContent: props => props.justify || 'center',
    alignItems: props => props.align || 'center',
    flexDirection: props => props.direction || 'row'
  },
}));

function Wrapper(props) {
  const classes = useStyles(props);
  console.log(props)
    return (
          <Container  className={classes.root} maxWidth={props.maxWidth}>
            {props.children}
          </Container>
      );
}

Wrapper.propTypes = {
  maxWidth: PropTypes.string,
};

export default Wrapper;