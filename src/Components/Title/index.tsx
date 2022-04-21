import React from "react";
import { Text } from "@chakra-ui/react";

function index(props: {title: string}) {
  return (
    <Text
      fontSize="18px" fontWeight="700" color="rgb(176, 178, 206)" width="800px" fontFamily="Nunito, sans-serif" isTruncated data-testid="trackTitle" >
      {props.title}
    </Text>
  );
}

export default index;
