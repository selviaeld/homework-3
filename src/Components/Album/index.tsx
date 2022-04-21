import React from "react";
import { Text } from "@chakra-ui/react";

function index(props: {artist: string, album: string}) {
    return (
        <div>
            <Text fontSize="12px" color="rgb(108, 111, 119)" fontWeight="medium" width="400px" isTruncated data-testid="albumArtist">
            {props.artist}, {props.album}
            </Text>
        </div>
    );
}

export default index;
