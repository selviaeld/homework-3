import React from "react";
import Style from "./style.module.css";
import Description from "../Description";
import Image from "../Image";
import { Button } from "@chakra-ui/react";

function Home({ title, artist, album, image, handleSelect, btnText }) {
    return (
        <div className={Style.playlist}>
            <div className={Style.container}>
                <Image src={image} />
                <div className={Style.right}>
                    <Description 
                        title={title}
                        artist={artist}
                        album={album}
                    />
                </div>
            </div>
            <div onClick={handleSelect} className={Style.btn}>
                <Button
                    size="sm"
                    background="rgb(209, 211, 240)"
                    color="white"
                    fontWeight="700"
                >
                    {btnText}
                </Button>
            </div>
        </div>
    );
}

export default Home;
