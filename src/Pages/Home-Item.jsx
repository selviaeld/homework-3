import React, { useState, useEffect } from "react";
import Home from "../Components/Home/";
import Data from "../Components/data/DataDummy"
import "../Components/Home/Home.css";
import Navbar from "../Components/Navbar";

function HomeItem() {
  const [token, setToken] = useState("");
  const [track, setTrack] = useState(Data);

  const handleClick = () => {
    const Client_ID = process.env.REACT.APP_SPOTIFY_KEY;
    const Response_Type = "token";
    const Redirect_URI = "http://localhost:3000";
    const Scope = "playlist-modify-private";
    window.location = `https://accounts.spotify.com/authorize?client_id=${Client_ID}&response_type=${Response_Type}&redirect_uri=${Redirect_URI}&scope=${Scope}&show_dialog=true`;
  };

  const getTokenFromUrl = hash => {
    const stringAfterHastag = hash.substring(1);
    const paramUrl = stringAfterHastag.split("&");
    const paramSplitUp = paramUrl.reduce((acc, currentValue) => {
      const [key, value] = currentValue.split("=");
      acc[key] = value;
      return acc;
    }, {});
    return paramSplitUp;
  };

  useEffect(() => {
    if (window.location.hash) {
      const access_token = getTokenFromUrl(window.location.hash);
      setToken(access_token);
    }
  }, []);

  const handleSearch = e => {
    e.preventDefault();
    const query = e.target.query.value;
    getTrackData(query);
  };

  const getTrackData = query => {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`;
    fetch(url, {
      headers: {
        Authorization: "Bearer" + token.access_token
      }
    })
    .then(res => res.json())
    .then(data => setTrack(data.tracks.items));
  };

  console.log(track);

  return (
    <>
      <Navbar handleSearch={handleSearch} handleClick={handleClick} />
      <h1>CREATE PLAYLIST</h1>
      <div className="home-item">
      {token ? (
          track.map(D => (
            <Home
              key={D.id}
              image={D.album.images[0].url}
              title={D.name}
              artist={D.artists[0].name}
              album={D.album.name}
              url={D.album.external_urls.spotify}
            />
          ))
        ) : (
          <h1>Login!</h1>
        )}
      </div>
    </>
  );
}

export default HomeItem;