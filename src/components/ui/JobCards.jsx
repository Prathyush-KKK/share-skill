import React, { useState, useEffect } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import axios from 'axios';
import ProfCards from '../layouts/ProfCards';

const JobList = ({ mode }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    marginTop: "30px"
  };
  const textStyles = {
    transform: "rotate(-90deg)", // Rotate text by 90 degrees anti-clockwise
    color: "gray.100",
    fontSize: "48px",
    fontWeight: "600"
  };


  return (
    <Box color={"gray.200"}>
      <div style={containerStyles}>
      <Text color={"gray.100"} style={textStyles}>ONGOING</Text>
        <ProfCards number={6}  textTitle={"Mark Complete"} textDesc={"Cancel"} />
      </div>

      <div style={containerStyles}>
      <Text color={"gray.100"} style={textStyles}>COMPLETED</Text>
        <ProfCards number={1} textTitle={"View Details"} />
      </div>
    </Box>
  );
};

export default JobList;
