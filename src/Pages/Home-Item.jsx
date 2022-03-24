import React from "react";
import Home from "../Components/Home/";
import data from "../Components/data/DataDummy";
import "../Components/Home/Home.css";

function HomeItem() {
  return (
    <div className="home-item">
      <Home image={data.album.images[0].url} title={data.name} artist={data.artists[0].name} album={data.album.name} />
    </div>
  );
}

export default HomeItem;
