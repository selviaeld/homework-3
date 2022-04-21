import {Track} from "../Types/trackType";

export const getTokenFromUrl = (hash: any) => {
    const stringAfterHastag = hash.substring(1);
    const paramInUrl = stringAfterHastag.split("&");
    const paramSplitUp = paramInUrl.reduce((acc: number[], currentValue: any) => {
      const [key, value] = currentValue.split("=");
      acc[key] = value;
      return acc;
    }, {});
    return paramSplitUp;
};

export const filterData = (data: any, TrackSelected: Track[]) => {
    const tracks: Track[] = [...TrackSelected.map((T: Track)  => Object.assign({}, T)), ...data];
    const filter = [...new Map(tracks.map((t) => [t.uri, t])).values()];
    return filter;
};

export const getTrackData = async (query: string, Token: string) => {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track&limit=20`;
    if (query) {
      const data = await fetch(url, {
        headers: {
          Authorization: "Bearer " + Token
        }
      }).then(res => res.json());
      return data;
    }
};

export const createPlaylist = async (e: any, User: any, Token: string, TrackSelected: Track[]) => {
    const uri = TrackSelected.map(T => T.uri);
    const url = `https://api.spotify.com/v1/users/${User.id}/playlists`;
    await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + Token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: e.target[0].value,
        public: false,
        collaborative: false,
        description: e.target[1].value
      })
    })
      .then(res => res.json())
      .then(data => storeTracks(data.id, uri, Token));
  };
  
  const storeTracks = async (data: Track, uri: string[], Token: string) => {
    const url = `https://api.spotify.com/v1/playlists/${data}/tracks?position=0&uris=${uri}`;
    await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + Token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        uris: uri,
        position: 0
      })
    })
      .then(res => res.json())
      .then(data => console.log(data));
};

export const getCurrentUser = async (Token: string) => {
    const url = `https://api.spotify.com/v1/me`;
    const data = await fetch(url, {
      headers: {
        Authorization: "Bearer " + Token
      }
    }).then(res => res.json());
    return data;
};

export const getPlaylistUser = async (Token: string) => {
  const url = `https://api.spotify.com/v1/me/playlists?offset=6&limit=20`;
  const data = await fetch(url, {
    headers: {
      Authorization: "Bearer " + Token
    }
  }).then(res => res.json());
  return data;
}

export const getRecomendation = async (Token: string) => {
  const url = `https://api.spotify.com/v1/recommendations?limit=20&seed_artist=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical&seed_tracks=0c6xIDDpzE81m2q797ordA`;
  const data = await fetch(url, {
    headers: {
      Authorization: "Bearer " + Token
    }
  }).then(res => res.json());
  return data;
}

export const getLikedTrack = async (Token: string) => {
  const url = `https://api.spotify.com/v1/me/tracks?market=ES&limit=20`;
  const data = await fetch(url, {
    headers: {
      Authorization: "Bearer " + Token
    }
  }).then(res => res.json());
  return data;
}
