import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Home from "../Components/Home";
import Data from "../Constants/DataDummy";
import "../Components/Home/Home.css";
import Navbar from "../Components/Navbar";
import Pop from "../Components/Button/Pop";
import Form from "../Components/Form";
import { getTrackData, filterData, createPlaylist } from "../Utils/Services";
import { login } from "../Redux/userSlice";
import { trackSelect, trackDeselect } from "../Redux/selectedSlice";

function Index() {
  const [Tracks, setTracks] = useState(Data);
  const TrackSelected= useSelector(state => state.selected.selected);
  const [Create, setCreate] = useState(false);
  const Token = useSelector(state => state.token.token);
  const User = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const url = `https://api.spotify.com/v1/me`;
        fetch(url, {
        headers: {
            Authorization: "Bearer " + Token.access_token
        }
        })
        .then(res => res.json())
        .then(data => dispatch(login(data)));
    }, [dispatch, Token]);

  const handleSearch = e => {
    e.preventDefault();
    const query = e.target.query.value;
    getTrackData(query, Token).then(data =>
      TrackSelected.length > 0
        ? setTracks(filterData(data.tracks.items, TrackSelected))
        : setTracks(data.tracks.items)
    );
  };

  const handleDeselect = data => {
    dispatch(trackDeselect(TrackSelected.filter(T => T.uri !== data.uri)));
  };

  const handleSelect = data => {
    dispatch(trackSelect([data, ...TrackSelected]));
  };

  const handleForm = () => {
    setCreate(!Create);
  };

  const handleCreate = async e => {
    e.preventDefault();
    if (TrackSelected.length > 0) {
      createPlaylist(e, User, Token, TrackSelected);
      alert("Created!");
    } else {
      alert("Choose songs!");
    }
  };

  return (
    <>
      <Navbar handleSearch={handleSearch} />
      {
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
          <div className="home-item">
            {Tracks.map(Track =>
              TrackSelected.find(S => S.uri === Track.uri) ? (
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
      }
    </>
  );
}

export default Index;
