import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    '&:focus': {
      backgroundColor: "red"
    },
    cursor: "pointer"
  },
  media: {
    height: 400,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Artist(props) {
  const classes = useStyles();
  const cardRef = useRef();
  
  const focusCard = () => {
    cardRef.current.focus();
  };

  return (
    <Card className={classes.root} ref={cardRef} tabIndex={props.tabIndex} onClick={focusCard}>
      <CardMedia
          className={classes.media}
          image={props.artist.cover_image}
          title={props.artist.title}
        />
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Artist Info
        </Typography>
        <Typography variant="h5" component="h2">
          {props.artist.title}
        </Typography>
      </CardContent>
        <Link to="/details">Ver detalhes</Link>
    </Card>
  );
}