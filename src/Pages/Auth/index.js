import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Style from "./style.module.css";
import CreatePlaylist from "../CreatePlaylist/CreatePlaylist";
import LikedSong from "../LikedSong";
import Recomend from "../Recomend";
import Playlist from "../../Components/Playlist";

const routes = [
  {
    path:"/recomend",
    main: () => <Recomend />
  },
  {
    path: "/create-playlist",
    main: () => <CreatePlaylist />
  },
  {
    path: "/liked-song",
    main: () => <LikedSong />
  }
];

function Index() {
  return (
    <div className={Style.container}>
      <div className={Style.sidebar}>
        <Link className={Style.logo} to="/">
            JAMAICA
        </Link>
        <ul className={Style.menu}>
          <li className={Style.menuTitle}>Recomendation</li>
          <li>
            <Link to="/recomend" className={Style.menuLink}><i className="fa fa-star" />Recomend</Link>
          </li>
          <li>
            <Link to="/liked-song" className={Style.menuLink}><i className="fa fa-archive" />Library</Link>
          </li>
          <li>
            <Link to="/liked-song" className={Style.menuLink}><i className="fa fa-podcast" />Podcast</Link>
          </li>
        </ul>
        <ul className={Style.menu}>
          <li className={Style.menuTitle}>Playlist</li>
          <Playlist />
        </ul>
        <ul className={Style.menu}>
          <li className={Style.menuTitle}>My Music</li>
          <li>
            <Link to="/create-playlist" className={Style.menuLink}><i className="fa fa-play" />Pop</Link>
          </li>
          <li>
            <Link to="/liked-song" className={Style.menuLink}><i className="fa fa-volume-up" />Jazz</Link>
          </li>
        </ul>
      </div>
      <div className={Style.content}>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} children={<route.main />} />
          ))}
        </Switch>
      </div>
    </div>
  );
}

export default Index;
