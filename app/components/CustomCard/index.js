import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 345
  },
  media: {
    height: 140,
  },
  label: {
    position: 'relative',
    width: '60px',
    height: '60px',
    top: 0,
    left: 0,
    boxShadow: '3px 5x 5px',
    clipPath: 'circle(50% at 0% 0%)',
    backgroundColor: props => props.labelType || 'none',
    zIndex: '3'
  },
  // iconFolder: {
  //   position: 'absolute',
  //   height: '100%',
  //   width: '100%',
  //   top: '0',
  //   left: '0',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // }
});

export default function CustomCard(props) {
  const classes = useStyles(props);

  return (
    <Card className={classes.root} onClick={props.onClick}>
      <div className={classes.label}></div>
      <CardActionArea>
        {props.cardUrl && <CardMedia
          className={classes.media}
          image={props.cardUrl}
          title={props.cardTitle}
        />}
        <CardContent>
          {/* <div className={classes.iconFolder}><FolderOpenIcon style={{ fontSize: '3em' }} /></div> */}
          {props.cardContent}
        </CardContent>
      </CardActionArea>
      {props.btn && <CardActions>
        <Button size="small" color="primary">
          {props.buttonLabel}
        </Button>
      </CardActions>}
    </Card>
  );
}