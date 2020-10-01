import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Artist from "./Artist";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  table: {
    minWidth: 650,
  },
  typo: {
    marginTop: 24,
    marginBottom: 24,
    marginLeft: 16,
  },
  spacing: theme.spacing(2),
}));

const List = (props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      {props.artists.map((artist, index) => {
        return (
          <Grid key={artist} item xs={4}>
            <Artist artist={artist} tabIndex={index} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default List;
