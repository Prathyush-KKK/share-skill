import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../sections/Header";
import MarqueeText from "../sections/Marquee";


export default function DoLayout(props) {
  return (

    <Flex
      direction="column"
      align="center"
      backgroundColor={"#DC0073"}
      // maxW={{ xl: "1200px" }}
      m="0 auto"
      {...props}
    >
      <MarqueeText />
      <Header flexColor="#FAFF00"/>
      {props.children}
    </Flex>
  );
}
