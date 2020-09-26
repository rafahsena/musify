import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  input: {
    display: "block",
    marginTop: 24,
    marginBottom: 24,
    marginLeft: 8,
  },
  image: {
    display: "block",
    marginTop: 24,
    marginBottom: 24
  }
}));

const SearchArtist = ({ onSubmit, history }) => {
  const [artist, setArtist] = useState("");
  const classes = useStyles();

  const handleSubmit = () => {
    onSubmit(artist);
    history.push("/");
  };

  return (
    <form className={classes.form}>
      <TextField
        className={classes.input}
        required
        id="outlined-required"
        label="Nome do artista"
        variant="outlined"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <Button variant="outlined" onClick={handleSubmit}>Buscar</Button>
    </form>
  );
};

export default SearchArtist;
