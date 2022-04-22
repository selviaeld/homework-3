import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../Redux/hooks";
import { getTrackData, filterData, createPlaylist } from "../../Utils/Services";
import { storeTrack, trackSelect } from "../../Redux/trackSlice";
import { Text, Box } from "@chakra-ui/react";
import Tracks from "../../Components/Tracks";
import Form from "../../Components/Form";
import Style from "./style.module.css";
import Search from "../../Components/Search/Index";
import Profile from "../../Components/Profile/Profile";

function Index() {
  const TrackSelected= useAppSelector(state => state.track.selected);
  const Token = useAppSelector(state => state.token.token);
  const User = useAppSelector(state => state.token.user);
  const [isLoading, setLoading] = useState(false);
  const [query, setQuery] =useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(storeTrack([]));
    dispatch(trackSelect([]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    if(query !== "") {
      getTrackData(query, Token).then(data =>
        TrackSelected.length > 0
          ? dispatch(storeTrack(filterData(data.tracks.items, TrackSelected)))
          : dispatch(storeTrack(data.tracks.items))
      )
      .then(() => setLoading(false));
    }
  };

  const handleCreate = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (TrackSelected.length > 0) {
      createPlaylist(e, User, Token, TrackSelected);
      alert("Created!");
      dispatch(trackSelect([]));
    } else {
      alert("Choose songs!");
    }
  };

  return (
    <div className={Style.container}>
      <div className={Style.header}>
        <Text
          fontSize="xl"
          fontWeight="900"
          color="#7B7BB9"
          fontFamily="Poppins"
          mb={2}
        >
          Create Playlist
        </Text>
        <Profile />
      </div>
      <Form handleCreate={handleCreate} />
      <Box p={5}>
        <Search
          handleSubmit={handleSubmit}
          handleChange={e => setQuery(e.target.value)}
        />
      </Box>
      <div className={Style.homeItem}>
        <Tracks loading={isLoading} />
      </div>
    </div>
  );
}

export default Index;
