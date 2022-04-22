import React, { useState, useEffect } from "react";
import { Track } from "../../Types/trackType";
import { useAppSelector, useAppDispatch } from "../../Redux/hooks";
import { trackSelect, trackDeselect } from "../../Redux/trackSlice";
import { Skeleton, Grid } from "@chakra-ui/react";

import HomeTrack from "./HomeTrack";

function Index({loading}: {loading: boolean}) {
  const Tracks = useAppSelector(state => state.track.track);
  const TrackSelected = useAppSelector(state => state.track.selected);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setLoading(loading)
  }, [loading, dispatch])

  const handleDeselect = (data: Track) => {
    dispatch(
      trackDeselect(TrackSelected.filter((T: Track) => T.uri !== data.uri))
    );
  };

  const handleSelect = (data: Track) => {
    dispatch(trackSelect([data, ...TrackSelected]));
  };

  return (
    <Grid templateColumns="1fr" rowGap="10px">
      {Tracks.map((Track: any) =>
        TrackSelected.find((S: Track) => S.uri === Track.uri) ? (
          <HomeTrack
            key={Track.uri}
            image={Track.album.images[0].url}
            title={Track.name}
            artist={Track.artists[0].name}
            album={Track.album.name}
            url={Track.external_urls.spotify}
            btnText="Deselect"
            handleSelect={() => handleDeselect(Track)}
          />
        ) : (
          <Skeleton isLoaded={!isLoading}>
            <HomeTrack
              key={Track.uri}
              image={Track.album.images[0].url}
              title={Track.name}
              artist={Track.artists[0].name}
              album={Track.album.name}
              url={Track.external_urls.spotify}
              btnText="Select"
              handleSelect={() => handleSelect(Track)}
            />
          </Skeleton>
        )
      )}
    </Grid>
  );
}

export default Index;
