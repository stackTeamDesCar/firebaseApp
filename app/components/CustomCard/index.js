import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function CustomCard({ cardUrl, cardTitle, cardContent, buttonLabel }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={cardUrl}
          title={cardTitle}
        />
        <CardContent>
          {cardContent}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {buttonLabel}
        </Button>
      </CardActions>
    </Card>
  );
}