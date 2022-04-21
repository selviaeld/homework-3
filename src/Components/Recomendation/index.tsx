import React, { useEffect, useState } from "react";
import HomeTrack from "../Track";
import { getRecomendation } from "../../Utils/Services";
import { useAppSelector } from "../../Redux/hooks";
import { Grid, Skeleton } from "@chakra-ui/react";
import { Track } from "../../Types/trackType";

function Index() {
  const Token = useAppSelector(state => state.token.token);
  const [Recomendation, setRecomendation] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getRecomendation(Token)
      .then(res => setRecomendation(res.tracks))
      .then(() => setLoading(false));
  }, [Token]);

  return (
    <Grid templateColumns="1ft" rowGap={3}>
      {Recomendation.map((rec: Track) => (
        <Skeleton isLoaded={!loading}>
          <HomeTrack
            key={rec.uri}
            image={rec.album.images[0].url}
            title={rec.name}
            artist={rec.artists[0].name}
            album={rec.album.name}
            url={rec.album.external_urls.spotify}
            btnText="Play"
          />
        </Skeleton>
      ))}
    </Grid>
  );
}

export default Index;
