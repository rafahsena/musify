import React, { useContext, useState, useEffect } from "react";
import { HttpContext } from "../Welcome";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ArtistDetails = React.memo(({ loading, name, members, id }) => {
  const classes = useStyles();

  return !loading ? (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name + id}
          </Typography>
          {members.map((member) => {
            return (
              <Typography variant="body2" color="textSecondary" component="p">
                {member.name}
              </Typography>
            );
          })}
        </CardContent>
      </CardActionArea>
    </Card>
  ) : (
    <div>Loading...</div>
  );
});

export default ArtistDetails;
