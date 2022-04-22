import React, { useEffect, useState } from "react";
import Style from "./style.module.css";
import Profile from "../../Components/Profile/Profile";
import { Text, Container, Flex, Box, Grid } from "@chakra-ui/react";
import Recomendation from "../../Components/Recomendation";

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
            setGreetings("Good afternoon, How's your day?")
        } else if (data>17 && data<21) {
            setGreetings("Good evening")
        }
    }, []);

    return (
        <Container maxW="container.xl" p={0}>
            <Box backgroundImage="linear-gradient(#ebe0ff, white)" height="300" />
            <Box mt="-300">
                <div className={Style.navbar}>
                    <Profile />
                </div>
                <Box py={2} px={5}>
                    <Text
                        fontSize="3xl"
                        fontWeight="700"
                        color="rgb(143, 145, 179)"
                        fontFamily="Poppins, sans-serif"
                        mb={4}
                    >
                        {greetings}
                    </Text>
                    <Grid templateColumns="repeat(4, 1fr)" gap={5}>
                        {cardList.map((card, index) => (
                            <Flex
                                background="rgba(190, 192, 235, 0.3)"
                                _hover={{ background: "rgba(223, 224, 252, 0.8)" }}
                                key={index}
                                borderRadius="md"
                            >
                                <div className={Style.cardImage}>
                                    <img src={card.images} alt={card.name} />
                                </div>
                                <Flex align="center" justify="center" ml={4}>
                                    <Text
                                        color="rgb(143, 145, 179)"
                                        fontWeight="800"
                                        fontSize="18"
                                        fontFamily="Nunito, sans-serif"
                                    >
                                        {card.name}
                                    </Text>
                                </Flex>
                            </Flex>
                        ))}
                        </Grid>
                    </Box>
                    <Box px={5} py={2}>
                        <Text
                            fontSize="xl"
                            fontWeight="600"
                            color="rgb(143, 145, 179)"
                            fontFamily="Poppins, sans-serif"
                            mb={1}
                        >
                            This is for you
                        </Text>
                        <Recomendation />
                    </Box>
                </Box>
            </Container>
    );
}

export default Index;
