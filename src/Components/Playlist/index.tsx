import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../Redux/hooks";
import Style from "./style.module.css";

function Index() {
  const Token = useAppSelector(state => state.token.token);

  useEffect(() => {
  }, [Token]);

  return (
    <div>
      <li>
        <Link to="/create-playlist" className={Style.menuLink}>
          <i className="fa fa-music" />
          Create Playlist
        </Link>
      </li>
      <li>
        <Link to="/liked-song" className={Style.menuLink}>
          <i className="fa fa-heart"/>
          Favorite Songs
        </Link>
      </li>
    </div>
  );
}

export default Index;
