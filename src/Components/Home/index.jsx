import React from "react";
import "./Home.css";
import Button from "../Button";
import Description from "../Description";
import Image from "../Image"

function Home({title, artist, album, image, handleSelect, btnText}) {
    return (
        <div className="playlist">
            <div className="container">
                <Image src={image} />
                <div className="right">
                    <Description 
                        title={title}
                        artist={artist}
                        album={album}
                    />
                    <Button text={btnText} handleSelect={handleSelect} />
                </div>
            </div>
        </div>
    );
}

export default Home;
