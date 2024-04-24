import React, { useState, useEffect } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import axios from 'axios';
import HorizontalScrollableCards from '../layouts/HorCards';

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
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        let response;
        if (mode === 'completed') {
          // Fetch completed jobs
          response = await axios.get('api/completed-jobs');
        } else if (mode === 'ongoing') {
          // Fetch ongoing jobs
          response = await axios.get('api/ongoing-jobs');
        }
        setJobs(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, [mode]);

  return (
    <Box color={"gray.200"}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        {mode === 'completed' ? 'Your Completed Jobs' : 'Your Ongoing Jobs'}
      </Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : jobs.length === 0 ? (
        <div style={containerStyles}>
        <HorizontalScrollableCards number={4} textDesc={"View Details"} textTitle={"Connect"} />
      </div>
      ) : (
        <Box>
          {jobs.map((job) => (
            <Box key={job.id} mb={4}>
              <Text fontWeight="bold">{job.title}</Text>
              <Text>{job.description}</Text>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default JobList;
