import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Home from "../../Components/Home";
import Data from "../../Constants/DataDummy";
import Pop from "../../Components/Button/Pop";
import Form from "../../Components/Form";
import { getTrackData, filterData, createPlaylist } from "../../Utils/Services";
import { trackSelect, trackDeselect } from "../../Redux/selectedSlice";
import Style from "./style.module.css";
import { storeTrack } from "../../Redux/trackSlice";
import Search from "../../Components/Search/index";
import Profile from "../../Components/Profile/Profile";
import { Skeleton, Text } from "@chakra-ui/react";

function Index() {
  const Tracks = useSelector(state => state.track.track);
  const TrackSelected= useSelector(state => state.selected.selected);
  const [Create, setCreate] = useState(false);
  const Token = useSelector(state => state.token.token);
  const User = useSelector(state => state.user.user);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleDeselect = data => {
    dispatch(trackDeselect(TrackSelected.filter(T => T.uri !== data.uri)));
  };

  const handleSelect = data => {
    dispatch(trackSelect([data, ...TrackSelected]));
  };

  const handleSearch = e => {
    e.preventDefault();
    const query = e.target.query.value;
    setLoading(true);
    if(query !== '') {
      getTrackData(query, Token).then(data =>
        TrackSelected.length > 0
          ? dispatch(storeTrack(filterData(data.tracks.items, TrackSelected)))
          : dispatch(storeTrack(data.tracks.items))
      )
      .then(() => setLoading(false));
    } else {
      dispatch(storeTrack(filterData(Data, TrackSelected)));
      setLoading(false);
    }
  };

  const handleForm = () => {
    setCreate(!Create);
  };

  const handleCreate = async e => {
    e.preventDefault();
    if (TrackSelected.length > 0) {
      createPlaylist(e, User, Token, TrackSelected);
      alert("Created!");
      dispatch(trackSelect([]));
      setCreate(false);
    } else {
      alert("Choose songs!");
    }
  };

  return (
    <div className={Style.container}>
      <div className={Style.header}>
        <Search handleSubmit={handleSearch} />
        <Profile />
      </div>
      <div className={Style.title}>
        <Text
          fontSize="xl"
          fontWeight="500"
          color="#7B7BB9"
          fontFamily="Poppins"
          mb={2}
        >
          Create Playlist
        </Text>
        {TrackSelected.length > 0 && (
          <Pop
            handleForm={handleForm}
            text={Create ? "Cancel" : "Create Playlist"}
          />
        )}
      </div>
      {Create && <Form handleCreate={handleCreate} />}
      <div className={Style.homeItem}>
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
            <Skeleton isLoaded={!loading} speed="1">
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
            </Skeleton>
          )
        )}
      </div>
    </div>
  );
}

export default Index;
