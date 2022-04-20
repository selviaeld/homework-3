import React, { useEffect, useState } from "react";
import Style from "./style.module.css";
import Profile from "../../Components/Profile/Profile";
import { Text } from "@chakra-ui/react";

const cardList = [
    {
        name: "Podcast",
        images: "/images/podcast_audience_re_4i5q.svg"
    },
    {
        name: "Playlist",
        images: "/images/audio_player_re_cl20.svg"
    },
    {
        name: "Happy Songs",
        images: "/images/happy_music_g6wc.svg"
    },
    {
        name: "Instumental",
        images: "/images/playlist_re_1oed.svg"
    },
    {
        name: "Media Player",
        images: "/images/media_player_re_rdd2.svg"
    },
    {
        name: "Favorite",
        images: "/images/music_re_a2jk.svg"
    }
];

function Index() {
    const [greetings, setGreetings] = useState("");

    useEffect(() => {
        let data = new Date().getHours();
        if (data >=21) {
            setGreetings("Hi, Good night! Have a good rest");
        } else if (data<=3) {
            setGreetings("Hi, Good night! Have a good rest");
        } else if (data>3 && data<11) {
            setGreetings("Morning! Have a nice day")
        } else if (data>11 && data<17) {
            setGreetings("Good Afternoon, How's your day?")
        } else if (data>17 && data<21) {
            setGreetings("Good Evening")
        }
    }, []);

    return (
        <div className={Style.container}>
            <div className={Style.colorHover}
                style={{ backgroundImage: "linear-gradient(#ebe0ff, white)" }}>
            </div>
            <div className={Style.main}>
                <div className={Style.header}>
                    <Profile />
                </div>
                <div className={Style.content}>
                <Text fontSize="30px" fontWeight="900" color="rgb(143, 145, 179)" mb={4}>{greetings}</Text>
                    <div className={Style.card}>
                        {cardList.map((card, index) => (
                            <div className={Style.cardList} key={index}>
                                <div className={Style.cardImage}>
                                    <img src={card.images} alt={card.name} />
                                </div>
                                <div className={Style.cardText}>
                                    <p>{card.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
