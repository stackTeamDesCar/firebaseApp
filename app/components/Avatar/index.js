import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
    },
  }));

const ImageAvatar = (props) => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Avatar src={props.src} />
      </div>
    );
}

export default ImageAvatar;