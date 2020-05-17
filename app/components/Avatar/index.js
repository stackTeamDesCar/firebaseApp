import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  large: {
    width:  props => `${props.size}px`,
    height: props => `${props.size}px`,
  }
}));

const ImageAvatar = (props) => {

  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Avatar src={props.src} size={props.size} className={classes.large} />
    </div>
  );
}

export default ImageAvatar;