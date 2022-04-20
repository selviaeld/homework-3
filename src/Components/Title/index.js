import React from "react";
import { Text } from "@chakra-ui/react";

function index(props) {
  return (
    <Text
      fontSize="18px" fontWeight="700" color="rgb(176, 178, 206)" isTruncated >
      {props.title}
    </Text>
  );
}

export default index;
