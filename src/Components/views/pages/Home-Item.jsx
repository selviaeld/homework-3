import React from "react";
import Home from "./Home";
import data from "../../data/DataDummy";
import "./Home.css";

function HomeItem() {
    return (
      <div className="card-item">
        <Home title={data.name} artist={data.artists[0].name} album={data.album.name} />
      </div>
    );
}

export default HomeItem;
