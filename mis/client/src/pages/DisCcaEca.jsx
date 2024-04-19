import React, { useState, useEffect } from 'react';
import { Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import customFetch from '../utils/customFetch';

const StyledGridItem = styled(Grid)({
  marginBottom: '20px',
  width: '50%',
});

const DisCcaEca = () => {
  const [ccaEcaData, setCcaEcaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email=localStorage.getItem("user_email");
        const response = await customFetch.get('/temp-cca-ecas/'+ email);
        setCcaEcaData(response.data);
        console.log("response: ",response.status);
      } catch (error) {
        console.error('Error fetching CCA ECA data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Typography variant="h4">CCA ECA Data</Typography>
      <Grid container spacing={2}>
          <StyledGridItem item xs={6} >
            <Typography variant="body1">CCA Sports: {ccaEcaData.cca_sports}</Typography>
            <Typography variant="body1">ECA Sports: {ccaEcaData.eca_sports}</Typography>
            <Typography variant="body1">Major Game: {ccaEcaData.major_game}</Typography>
            <Typography variant="body1">Minor Game: {ccaEcaData.minor_game}</Typography>
          </StyledGridItem>
      </Grid>
    </div>
  );
};

export default DisCcaEca;