import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import HomeTrack from "../../Components/Track";
import Data from "../../Constants/DataDummy";
import Button from "../../Components/Button/";
import Form from "../../Components/Form";
import { getTrackData, filterData, createPlaylist } from "../../Utils/Services";
import Style from "./style.module.css";
import { storeTrack, trackSelect, trackDeselect } from "../../Redux/trackSlice";
import Search from "../../Components/Search/Index";
import Profile from "../../Components/Profile/Profile";
import { Skeleton, Text } from "@chakra-ui/react";

function Index() {
  const Tracks = useSelector(state => state.track.track);
  const TrackSelected= useSelector(state => state.track.selected);
  const [Create, setCreate] = useState(false);
  const Token = useSelector(state => state.token.token);
  const User = useSelector(state => state.token.user);
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
    if(query !== "") {
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
          <Button
            handleForm={handleForm}
            text={Create ? "Cancel" : "Create Playlist"}
          />
        )}
      </div>
      {Create && <Form handleCreate={handleCreate} />}
        {Tracks.map(Track =>
          TrackSelected.find(S => S.uri === Track.uri) ? (
            <div key={Track.uri} className={Style.homeItem}>
            <HomeTrack
              key={Track.uri}
              image={Track.album.images[0].url}
              title={Track.name}
              artist={Track.artists[0].name}
              album={Track.album.name}
              url={Track.album.external_urls.spotify}
              btnText="Deselect"
              handleSelect={() => handleDeselect(Track)}
            />
            </div>
          ) : (
            <div key={Track.uri} className={Style.homeItem}>
            <Skeleton isLoaded={!loading} speed="1">
              <HomeTrack
                key={Track.uri}
                image={Track.album.images[0].url}
                title={Track.name}
                artist={Track.artists[0].name}
                album={Track.album.name}
                url={Track.album.external_urls.spotify}
                btnText="Select"
                handleSelect={() => handleSelect(Track)}
              />
            </Skeleton>
          </div>
          )
        )}
    </div>
  );
}

export default Index;
