// import React from 'react'

// const AddHostelDetails = () => {
//   return (
//     <h1>AddHostelDetails</h1>
//   )
// }

// export default AddHostelDetails



// import React from 'react';
import { Form, useNavigate, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { toast } from 'react-toastify';
import { Button, TextField, Typography, Select, MenuItem, Grid } from '@mui/material';
import { styled } from '@mui/system';
import customFetch from '../utils/customFetch';

const StyledForm = styled(Form)({
  maxWidth: '1300px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
});

const StyledSelectWrapper = styled('div')({
  marginBottom: '20px',
});

const StyledTitle = styled(Typography)({
  fontSize: '24px',
  marginBottom: '20px',
});

const StyledTextField = styled(TextField)({
  marginBottom: '20px',
});

const AddHostelDetails = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  console.log(navigation);
  const isSubmitting = navigation.state === 'submitting';

  const goBack = async (event) => {
    event.preventDefault();
    try {
      navigate('/AddParentDetails');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("college_email",localStorage.getItem("user_email"));
  
    try {
      await customFetch.post('/temp-hostel-details', formData);
      console.log(formData);
      toast.success('saved sports');
      console.log("hey");
      navigate('/AddPersonalDetails'); // Use navigation.navigate instead of redirect
      console.log("hey2");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTitle variant="h4">Add CCA ECA</StyledTitle>
        
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <StyledTextField
              type="text"
              name="laptop_details"
              label="If Having laptop(Give Details)"
              defaultValue="Macbook"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              type="text"
              name="model_no"
              label="Model No"
              defaultValue="a2337"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              type="text"
              name="serial_no"
              label="Serial No"
              defaultValue="72347"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledSelectWrapper>
              <Typography variant="subtitle1">Food Habit</Typography>
              <Select
                name="food_habit"
                defaultValue="Non-Veg"
                fullWidth
                margin="normal"
              >
                <MenuItem value="Veg">Veg</MenuItem>
                <MenuItem value="Non-Veg">Non-Veg</MenuItem>
              </Select>
            </StyledSelectWrapper>
          </Grid>
        </Grid>
        
        <Button type="submit" disabled={isSubmitting} variant="contained">
          {isSubmitting ? 'Submitting...' : 'Save and Next'}
        </Button>
        <Button onClick={goBack}  disabled={isSubmitting} variant="contained">
          Back
        </Button>
      </StyledForm>
    </Wrapper>
  );
};

export default AddHostelDetails;
