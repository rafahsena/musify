import React, { useCallback, useContext, useEffect, useState } from "react";
import Header from "./Header/Header";
import List from "./Content/List";
import Content from "./Content/Content";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import mockHttpRequest from "../mock/mockHttp";

const API_TOKEN = "tguPPJpKxdeqjVhxqHoGrbhqUqLVXkBTuUkqzxtS";
const BASE_URL = "https://api.discogs.com";

const http = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Discogs token=${API_TOKEN}` },
});

const http2 = mockHttpRequest;

export const HttpContext = React.createContext();

const Welcome = () => {
  const [search, setSearch] = useState("");
  const [artists, setArtists] = useState([]);
  const [artistDetails, setArtistDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const onSubmit = (value) => setSearch(value);

  const searchArtist = useCallback(
    () =>
      http
        .get("/database/search", {
          params: { type: "artist", q: search, per_page: "15", page: "1" },
        })
        .then((res) => setArtists(res.data.results)),
    [search, http]
  );

  useEffect(() => {
    setLoading(true);
    http.get(`/artists/3128936`).then((response) => {
      setArtistDetails(response.data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    searchArtist();
  }, [searchArtist]);

  return (
    <HttpContext.Provider value={http}>
      <Router>
        <Header />
        <Content
          onSubmit={onSubmit}
          artistDetails={artistDetails}
          loading={loading}
        >
           <List artists={artists} />
        </Content>
      </Router>
    </HttpContext.Provider>
  );
};

export default Welcome;
