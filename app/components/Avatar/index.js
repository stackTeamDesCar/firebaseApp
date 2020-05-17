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
        <Avatar src={props.src} />
    );
}

export default ImageAvatar;