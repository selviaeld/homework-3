import React from "react";
import Title from "../Title";
import Album from "../Album";

function index(props: {title: string, artist: string, album: string}) {
    return (
        <div>
            <Title title={props.title} />
            <Album artist={props.artist} album={props.album} />
        </div>
    );
}

export default index;
