import React from "react";
import { Text, Flex } from "@chakra-ui/react";

const KeywordHorizontal = ({ keywords, selectedKeyword, onKeywordClick }) => {
  const containerStyles = {
    display: "flex",
    overflowX: "auto",
    gap: "20px",
    padding: "20px",
  };

  const textStyles = {
    color: "yellow.300",
    fontSize: "24px",
    fontWeight: "600",
    cursor: "pointer",
  };

  return (
    <div style={containerStyles}>
      {["All", ...keywords].map((keyword, index) => (
        <Text
          key={index}
          color={"yellow.300"}
          style={{
            ...textStyles,
            fontWeight: keyword === selectedKeyword ? "bold" : "normal",
          }}
          onClick={() => onKeywordClick(keyword)}
        >
          {keyword.toUpperCase()}
        </Text>
      ))}
    </div>
  );
};

export default KeywordHorizontal;
