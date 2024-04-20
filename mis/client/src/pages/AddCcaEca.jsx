import React, { useState, useEffect } from 'react';
import { Typography, Grid, TextField, Paper, Button } from '@mui/material';
import { styled } from '@mui/system';
import customFetch from '../utils/customFetch';

const StyledContainer = styled(Paper)({
  padding: '20px',
  marginBottom: '20px',
  maxWidth: '1100px', // Adjust the maximum width as per your preference
  margin: 'auto', // Center the container horizontally
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledGridItem = styled(Grid)({
  marginBottom: '20px',
  width: '100%', // Set the grid item width to 100% to take full width
});

// Custom styled TextField component with only border color modified
const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgb(145, 85, 253)', // Border color
    },
  },
});

// Custom styled Button component with background color modified
const CustomButton = styled(Button)({
  backgroundColor: 'rgb(145, 85, 253)', // Background color
  width: '150px', // Reduced width
});

const AddCcaEca = () => {
  const [formData, setFormData] = useState({
    cca_sports: '',
    eca_sports: '',
    major_game: '', 
    minor_game: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = localStorage.getItem("user_email");
        const response = await customFetch.get('/temp-cca-ecas/' + email);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching CCA ECA data:', error);
      }
    };

    fetchData();
  }, []); 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("college_email",localStorage.getItem("user_email"));
    try {
      await customFetch.post('/temp-cca-ecas', formData);
      console.log(formData);
      toast.success('CCA/ECA Details Saved');
      navigate('/AddPersonalDetails'); 
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  return (
    <StyledContainer>
      <Typography variant="h4">Add CCA ECA</Typography>
      <Grid container spacing={2}>
        <StyledGridItem item xs={6}>
          <CustomTextField
            type="text"
            name="cca_sports"
            label="CCA Sports"
            value={formData.cca_sports}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </StyledGridItem>
        <StyledGridItem item xs={6}>
          <CustomTextField
            type="text"
            name="eca_sports"
            label="ECA Sports"
            value={formData.eca_sports}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </StyledGridItem>
        <StyledGridItem item xs={6}>
          <CustomTextField
            type="text"
            name="major_game"
            label="Major Game"
            value={formData.major_game}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </StyledGridItem>
        <StyledGridItem item xs={6}>
          <CustomTextField
            type="text"
            name="minor_game"
            label="Minor Game"
            value={formData.minor_game}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </StyledGridItem>
        <Grid item xs={12} style={{ textAlign: 'right' }}>
          <CustomButton type="submit" variant="contained">
            Save and Next
          </CustomButton>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default AddCcaEca;
