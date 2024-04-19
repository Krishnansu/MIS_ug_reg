import React from 'react';
import { Form, redirect, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { toast } from 'react-toastify';
import { Button, TextField, Typography, Select, MenuItem, Grid } from '@mui/material';
import { styled } from '@mui/system';

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
  const isSubmitting = navigation.state === 'submitting';

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      // await customFetch.post('/auth/register', data);
      console.log(data);
      toast.success('saved sports');
      redirect('/AddPersonalDetails');
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
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </StyledForm>
    </Wrapper>
  );
};

export default AddHostelDetails;
