import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../sections/Header";
import MarqueeText from "../sections/Marquee";


export default function LandingLayout(props) {
  return (

    <Flex
      direction="column"
      align="center"
      backgroundColor={"#F5B700"}
      // maxW={{ xl: "1200px" }}
      m="10 auto"
      {...props}
    >
      <MarqueeText />
      <Header/>
      {props.children}
    </Flex>
  );
}
