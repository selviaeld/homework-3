import React, { useEffect, useState } from "react";
import Home from "../Home";
import { getRecomendation } from "../../Utils/Services";
import { useSelector } from "react-redux";
import { Grid, Skeleton } from "@chakra-ui/react";

function Index() {
  const Token = useSelector(state => state.token.token);
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
      {Recomendation.map(rec => (
        <Skeleton isLoaded={!loading} speed="1.2">
          <Home
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
