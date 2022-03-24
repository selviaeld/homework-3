import React from "react";
import Title from "../Title/";
import Album from "../Album/";
import "./Description.css"

function index(props) {
    return (
        <div className="descriptions">
            <Title title={props.title} />
            <Album artist={props.artist} album={props.album} />
        </div>
    );
}

export default index;
