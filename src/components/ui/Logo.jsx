import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Link to="/">
        <Image
          src="https://i.postimg.cc/zDKM3jZT/logotransparent.png"
          alt="Logo"
        />
      </Link>
    </Box>
  );
}
