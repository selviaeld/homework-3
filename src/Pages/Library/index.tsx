import React, { useState, useEffect } from "react";
import { Container, Box, Text, Grid, Skeleton } from "@chakra-ui/react";
import { getTrackData, getRecomendation } from "../../Utils/Services";
import { storeTrack } from "../../Redux/trackSlice";
import { useAppSelector, useAppDispatch } from "../../Redux/hooks";
import { Track } from "../../Types/trackType";
import Data from "../../Constants/DataDummy";
import Search from "../../Components/Search/Index";
import Profile from "../../Components/Profile/Profile";
import Style from "./style.module.css";
import HomeTrack from "../../Components/Tracks/HomeTrack";

const Index: React.FC = () => {
  const [isLoading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [Songs, setSong] = useState([]);
  const Token = useAppSelector(state => state.token.token);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setLoading(true);
    getRecomendation(Token)
      .then(res => setSong(res.tracks))
      .then(() => setLoading(false));
  }, [Token]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    if (query !== "") {
      getTrackData(query, Token)
        .then(data => setSong(data.tracks.items))
        .then(() => setLoading(false));
    } else {
      dispatch(storeTrack(Data));
      setLoading(false);
    }
  };

  return (
    <Container maxW="container.xl" p={0} fontFamily="Nunito, sans-serif">
      <div className={Style.header}>
        <Search
          handleSubmit={handleSubmit}
          handleChange={e => setQuery(e.target.value)}
        />
        <Profile />
      </div>
      <Box m={0} py={0} px={5}>
        <Text
          fontSize="xl"
          fontWeight="600"
          color="rgb(143, 145, 179)"
          fontFamily="Poppins, sans-serif"
          mb={1}
        >
          Library Songs
        </Text>
      </Box>
      <Grid templateColumns="1ft" rowGap={3} px={5} py={3}>
        {Songs.map((song: Track) => (
          <Skeleton isLoaded={!isLoading}>
            <HomeTrack
              key={song.uri}
              image={song.album.images[0].url}
              title={song.name}
              artist={song.artists[0].name}
              album={song.album.name}
              url={song.album.external_urls.spotify}
              btnText="Play"
            />
          </Skeleton>
        ))}
      </Grid>
    </Container>
  );
};

export default Index;
