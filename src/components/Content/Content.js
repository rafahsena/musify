import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import List from "./List";
import SearchArtist from "./SearchArtist";
import axios from "axios";


const API_TOKEN = "tguPPJpKxdeqjVhxqHoGrbhqUqLVXkBTuUkqzxtS";
const BASE_URL = "https://api.discogs.com";

const http = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Discogs token=${API_TOKEN}` },
});

const Content = (props) => {
  const [search, setSearch] = useState("");
  const [artists, setArtists] = useState([]);

  const onSubmit = (value) => setSearch(value);

  useEffect(() => {
    http
      .get("/database/search", {
        params: { type: "artist", q: search, per_page: "15", page: "1" },
      })
      .then((res) => setArtists(res.data.results));
  }, [search]);

  return (
    <Switch>
      <Route
        path="/search"
        render={(routeProps) => (
          <SearchArtist onSubmit={onSubmit} {...routeProps} />
        )}
      />
      <Route path="/">
        <List artists={artists} />
      </Route>
    </Switch>
  );
};

export default Content;
