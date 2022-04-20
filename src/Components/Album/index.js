import React from "react";
import { Text } from "@chakra-ui/react";

function index(props) {
    return (
        <div>
            <Text fontSize="12px" color="rgb(108, 111, 119)" fontWeight="medium" width="400px" isTruncated >
            {props.artist}, {props.album}
            </Text>
        </div>
    );
}

export default index;
