import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.png"

export default function Logo(props) {
  return (
    <Box {...props}>
      <Image
     src={ 'https://i.postimg.cc/zDKM3jZT/logotransparent.png' } />

    </Box>
  );
}
