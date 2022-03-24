import React from "react";
import "./Home.css";
import Button from "../Button/";
import Description from "../Description/";
import Image from "../Image/"

function Home(props) {
    return (
        <div className="playlist">
            <div className="container">
                <Image src={props.image} />
                <Description 
                    title={props.title}
                    artist={props.artist}
                    album={props.album}
                />
                <Button />
            </div>
        </div>
    );
}

export default Home;
