import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>Musify</Typography>
        <Link to="/" className={classes.link}>
          <Button color="inherit">Listar Artistas</Button>
        </Link>
        <Link to="/search" className={classes.link}>

        <Button className={classes.link} color="inherit">
          Buscar por artistas
        </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
