import React, { useState, useEffect } from "react";
import Home from "../Components/Home";
import Data from "../Components/Data/DataDummy"
import "../Components/Home/Home.css";
import Navbar from "../Components/Navbar";
import Pop from "../Components/Button/Pop";
import Form from "../Components/Form";
import { getTokenFromUrl } from "../Components/Utils/getTokenFromUrl";
import { getToken } from "../Redux/tokenSlice";
import { useSelector, useDispatch } from "react-redux";

function Index() {
  const [tracks, setTracks] = useState(Data);
  const [TrackSelected, setTrackSelected] = useState([]);
  const [Create, setCreate] = useState(false);
  const Token = useSelector(state => state.token.token);
  const [User, setUser] = useState([]);
  const [Auth, setAuth] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.hash) {
      const access_token = getTokenFromUrl(window.location.hash);
      dispatch(getToken(access_token));
      setAuth(true);
    }
  }, []);

  useEffect(() => {
    if (Token !== "") {
      getCurrentProfile();
    }
  });

  const handleClick = () => {
    const Client_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const Response_Type = "token";
    const Redirect_URI = "http://localhost:3000";
    const Scope = "playlist-modify-private";
    window.location = `https://accounts.spotify.com/authorize?client_id=${Client_ID}&response_type=${Response_Type}&redirect_uri=${Redirect_URI}&scope=${Scope}&show_dialog=true`;
  };

  const handleSearch = e => {
    e.preventDefault();
    const query = e.target.query.value;
    getTrackData(query);
  };

  const handleDeselect = data => {
    setTrackSelected(TrackSelected.filter(T => T.uri !== data.uri));
  };

  const handleSelect = data => {
    setTrackSelected([data, ...TrackSelected]);
  };

  const handleForm = () => {
    setCreate(!Create);
  };

  const handleCreate = async e => {
    e.preventDefault();
    if (TrackSelected.length > 0) {
      createPlaylist(e);
      alert("Playlist Created!");
    } else {
      alert("You need songs to make a playlist, choose some!");
    }
  };

  const filterData = data => {
    const tracks = [...TrackSelected.map(T => Object.assign({}, T)), ...data];
    const filter = [...new Map(tracks.map(t => [t.uri, t])).values()];
    setTracks(filter);
  };
  
  const getTrackData = query => {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`;
    if (query) {
      fetch(url, {
        headers: {
          Authorization: "Bearer " + Token.access_token
        }
      })
        .then(res => res.json())
        .then(data =>
          TrackSelected.length > 0
            ? filterData(data.tracks.items)
            : setTracks(data.tracks.items)
        );
    }
  };

  const getCurrentProfile = () => {
    const url = `https://api.spotify.com/v1/me`;
    fetch(url, {
      headers: {
        Authorization: "Bearer " + Token.access_token
      }
    })
      .then(res => res.json())
      .then(data => setUser(data));
  };

  const createPlaylist = async e => {
    const url = `https://api.spotify.com/v1/users/${User.id}/playlists`;
    await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + Token.access_token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: e.target[0].value,
        public: false,
        collaborative: false,
        description: e.target[1].value
      })
    })
      .then(res => res.json())
      .then(data => storeTracks(data.id));
  };

  const storeTracks = async data => {
    const uri = TrackSelected.map(T => T.uri);
    const url = `https://api.spotify.com/v1/playlists/${data}/tracks?position=0&uris=${uri}`;
    await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + Token.access_token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        uris: uri,
        position: 0
      })
    })
      .then(res => res.json())
      .then(data => console.log(data));
    setCreate(false);
    setTrackSelected([]);
  };

  return (
    <>
      <Navbar handleSearch={handleSearch} handleClick={handleClick} />
      {Auth ? (
        <>
          <div className="create-playlist">
            <h1>Create Playlist</h1>
            {TrackSelected.length > 0 && (
              <Pop
                handleForm={handleForm}
                text={Create ? "Cancel" : "Create Playlist"}
              />
            )}
          </div>
          {Create && <Form handleCreate={handleCreate} />}
          <div className="card-item">
            {tracks.map(Track =>
              TrackSelected.find(S => S === Track.uri) ? (
                <Home
                  key={Track.uri}
                  image={Track.album.images[0].url}
                  title={Track.name}
                  artist={Track.artists[0].name}
                  album={Track.album.name}
                  url={Track.album.external_urls.spotify}
                  btnText="deselect"
                  handleSelect={() => handleDeselect(Track)}
                />
              ) : (
                <Home
                  key={Track.uri}
                  image={Track.album.images[0].url}
                  title={Track.name}
                  artist={Track.artists[0].name}
                  album={Track.album.name}
                  url={Track.album.external_urls.spotify}
                  btnText="select"
                  handleSelect={() => handleSelect(Track)}
                />
              )
            )}
          </div>
        </>
      ) : (
        <h1 style={{ marginLeft: 20, marginBottom: 0, fontWeight: 600 }}>
          Login!
        </h1>
      )}
    </>
  );
}

export default Index;