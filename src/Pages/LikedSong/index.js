import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getLikedTrack } from "../../Utils/Services";
import { Container, Grid, Skeleton } from "@chakra-ui/react";
import Home from "../../Components/Home/";
import Profile from "../../Components/Profile/Profile";
import Style from "./style.module.css"

function Index() {
  const Token = useSelector(state => state.token.token);
  const [Liked, setLiked] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getLikedTrack(Token)
      .then(res => setLiked(res.items))
      .then(() => setLoading(false));
  }, [Token]);

  return (
    <Container p={0} maxW="container.xl">
      <div className={Style.navbar}>
        <Profile />
      </div>
      <Grid templateColumns="1ft" rowGap={3} p={5}>
        {Liked.map(like => (
          <Skeleton isLoaded={!loading} speed="1">
            <Home
              key={like.track.uri}
              image={like.track.album.images[0].url}
              title={like.track.name}
              artist={like.track.artists[0].name}
              album={like.track.album.name}
              url={like.track.album.external_urls.spotify}
              btnText="Play"
            />
          </Skeleton>
        ))}
      </Grid>
    </Container>
  );
}

export default Index;
