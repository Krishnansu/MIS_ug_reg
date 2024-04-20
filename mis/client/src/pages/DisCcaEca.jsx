import React, { useState, useEffect } from 'react';
import { Typography, Grid, TextField, Paper } from '@mui/material';
import { styled } from '@mui/system';
import customFetch from '../utils/customFetch';

const StyledContainer = styled(Paper)({
  padding: '20px',
  marginBottom: '20px',
});

const StyledGridItem = styled(Grid)({
  marginBottom: '20px',
  width: '100%',
});

// Custom styled TextField component
const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgb(145, 85, 253)', // Border color
    },
    '&:hover fieldset': {
      borderColor: 'rgb(145, 85, 253)', // Border color on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgb(145, 85, 253)', // Border color when focused
    },
  },
});

const DisCcaEca = () => {
  const [ccaEcaData, setCcaEcaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = localStorage.getItem("user_email");
        const response = await customFetch.get('/temp-cca-ecas/' + email);
        setCcaEcaData(response.data);
        console.log("response: ", response.status);
      } catch (error) {
        console.error('Error fetching CCA ECA data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <StyledContainer>
      <Typography variant="h4">CCA ECA Data</Typography>
      <Grid container spacing={2}>
        <StyledGridItem item xs={12} md={6}>
          <CustomTextField
            type="text"
            label="CCA Sports"
            value={ccaEcaData.cca_sports}
            fullWidth
            margin="normal"
            variant="outlined"
            disabled
          />
        </StyledGridItem>
        <StyledGridItem item xs={12} md={6}>
          <CustomTextField
            type="text"
            label="ECA Sports"
            value={ccaEcaData.eca_sports}
            fullWidth
            margin="normal"
            variant="outlined"
            disabled
          />
        </StyledGridItem>
        <StyledGridItem item xs={12} md={6}>
          <CustomTextField
            type="text"
            label="Major Game"
            value={ccaEcaData.major_game}
            fullWidth
            margin="normal"
            variant="outlined"
            disabled
          />
        </StyledGridItem>
        <StyledGridItem item xs={12} md={6}>
          <CustomTextField
            type="text"
            label="Minor Game"
            value={ccaEcaData.minor_game}
            fullWidth
            margin="normal"
            variant="outlined"
            disabled
          />
        </StyledGridItem>
      </Grid>
    </StyledContainer>
  );
};

export default DisCcaEca;
