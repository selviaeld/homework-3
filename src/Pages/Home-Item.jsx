import React from "react";
import Home from "../Components/Home/";
import Data from "../Components/data/DataDummy";
import "../Components/Home/Home.css";

function HomeItem() {
  return (
    <div className="home-item">
      {
        Data.map(D => (
          <Home key={D.id} image={D.album.images[0].url} title={D.name} artist={D.artists[0].name} album={D.album.name}/>
        ))
      }
    </div>
  );
}

export default HomeItem;
