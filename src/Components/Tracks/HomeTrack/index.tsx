import React from "react";
import Style from "./style.module.css";
import Image from "../../Image";
import Description from "../../Description";
import { Button } from "@chakra-ui/react";

interface CardType {
  title: string;
  artist: string;
  album: string;
  image: string;
  url: string;
  handleSelect?: React.MouseEventHandler<HTMLButtonElement>;
  handlePlay?: () => void;
  btnText: string;
}

function Track({
  title,
  artist,
  album,
  image,
  url,
  handleSelect,
  btnText
}: CardType) {
  const handlePlay = () => {
    const left = window.confirm("Do you really want to left this site ?");
    if(left){
      window.location.href = url;
    }
  }

  return (
    <div className={Style.card}>
      <div className={Style.container}>
        <Image src={image} data-testid="imageTrack" />
        <div className={Style.right}>
          <Description title={title} artist={artist} album={album} />
        </div>
      </div>
      <div className={Style.btn}>
        {btnText === "Play" ? (
          <Button
            size="sm"
            background="rgb(209, 211, 240)"
            color="white"
            fontWeight="700"
            onClick={handlePlay}
            data-testid="buttonTrack"
          >
            {btnText}
          </Button>
        ) : (
          <Button
            size="sm"
            background="rgb(209, 211, 240)"
            color="white"
            fontWeight="700"
            onClick={handleSelect}
            data-testid="buttonTrack"
          >
            {btnText}
          </Button>
        )}
      </div>
    </div>
  );
}

export default Track;
