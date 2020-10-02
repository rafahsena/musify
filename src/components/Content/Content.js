import React, { useCallback, useContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import List from "./List";
import SearchArtist from "./SearchArtist";
import ArtistDetails from "./ArtistDetails";

const Content = (props) => {
  console.log(props.artistDetails);

  return (
    <Switch>
      {props.header}
      <Route
        path="/search"
        render={(routeProps) => (
          <SearchArtist onSubmit={props.onSubmit} {...routeProps} />
        )}
      />
      <Route
        path="/details"
        render={(routeProps) => (
          <ArtistDetails
            {...props.artistDetails}
            loading={props.loading}
            {...routeProps}
          />
        )}
      ></Route>
      <Route path="/">{props.children}</Route>
      {props.footer}
    </Switch>
  );
};

export default Content;
