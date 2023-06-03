import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../sections/Header";
import MarqueeText from "../sections/Marquee";


export default function AskLayout(props) {
  return (

    <Flex
      direction="column"
      align="center"
      backgroundColor={"#008BF8"}
      
      // maxW={{ xl: "1200px" }}
      m="0 auto"
      {...props}
    >
      <MarqueeText />
      <Header flexColor="#37447E"/>
      {props.children}
    </Flex>
  );
}
