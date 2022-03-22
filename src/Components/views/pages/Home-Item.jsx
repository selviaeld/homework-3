import React from "react";
import Home from "./Home";
import data from "../../data/DataDummy";
import "../styles/Home.css";

function HomeItem() {
    return (
      <div className="home-item">
        <Home title={data.name} artist={data.artists[0].name} album={data.album.name} />
      </div>
    );
}

export default HomeItem;
