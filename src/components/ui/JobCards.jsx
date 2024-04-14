import React, { useState, useEffect } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import axios from 'axios';

const JobList = ({ mode }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

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
        {mode === 'completed' ? 'Completed Jobs' : 'Ongoing Jobs'}
      </Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : jobs.length === 0 ? (
        <Text>No jobs available</Text>
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
