import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../Redux/hooks";
import { getLikedTrack } from "../../Utils/Services";
import { Container, Grid, Skeleton, Box, Image, Flex, Text } from "@chakra-ui/react";
import HomeTrack from "../../Components/Tracks/HomeTrack";
import Profile from "../../Components/Profile/Profile";
import Style from "./style.module.css";
import { likedSong } from "../../Types/trackType";

function Index() {
  const Token = useAppSelector(state => state.token.token);
  const [Liked, setLiked] = useState([]);
  const [loading, setLoading] = useState(false);
  const User = useAppSelector(state => state.token.user);

  useEffect(() => {
    setLoading(true);
    getLikedTrack(Token)
      .then(res => setLiked(res.items))
      .then(() => setLoading(false));
  }, [Token]);

  return (
    <Container p={0} maxW="container.xl">
      <Box backgroundImage="linear-gradient(#ebe0ff, white)" height="350" />
      <Box mt="-350">
        <div className={Style.navbar}>
          <Profile />
        </div>
        <Box pl={5} pb={5} boxShadow="md">
          <Flex align="flex-end">
            <Image boxSize="250px" boxShadow="lg" src="https://media1.popsugar-assets.com/files/thumbor/cVRkLQKhohpOsar3ZQECWvvO-UI/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/09/23/919/n/1922507/69627564b15b793f_eberhard-grossgasteiger-J9NDmBVhN04-unsplash/i/Pastel-Sky-iPhone-Wallpaper.jpg" alt="" />
            <Flex px={5} align="flex-start" direction="column">
              <Text fontSize="sm" fontWeight="800" color="#6C6F77">PLAYLIST</Text>
              <Text fontSize="7xl" fontWeight="800" color="#6C6F77">Liked Songs</Text>
              <Flex justify="center" align="center">
                <Text fontSize="16" fontWeight="700" color="#6C6F77" ml="2" pr="2" borderRight="2px solid #EDEAF5">{User.display_name}</Text>
                <Text fontSize="16" fontWeight="700" color="#6C6F77" ml="2">{Liked.length} songs</Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Grid templateColumns="1ft" rowGap={3} p={5}>
          {Liked.map((like: likedSong) => (
            <Skeleton isLoaded={!loading}>
              <HomeTrack
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
      </Box>
    </Container>
  );
}

export default Index;
