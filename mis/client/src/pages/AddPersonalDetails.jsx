import React from 'react';
import { Form, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { toast } from 'react-toastify';
import { Button, TextField, Typography, Select, MenuItem, Grid } from '@mui/material';
import { styled } from '@mui/system';

const StyledForm = styled(Form)({
  width: '100%',
  maxWidth: '1300px', // Adjust this value as needed
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

const AddPersonalDetails = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      // await customFetch.post('/auth/register', data);
      console.log(data);
      toast.success('Saved personal details');
      redirect('/AddOtherDetails');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTitle variant="h4">Personal Details</StyledTitle>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="jee_main_application_no"
              label="JEE Main Application No"
              defaultValue="1000098"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="institute_name"
              label="Institute Name"
              defaultValue="IIT ISM"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="first_name"
              label="First Name"
              defaultValue="Test"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="middle_name"
              label="Middle Name"
              defaultValue="Test"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="last_name"
              label="Last Name"
              defaultValue="Last"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="email"
              name="email"
              label="Email"
              defaultValue="21je0xxx@iitism.ac.in"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="number"
              name="contact_no"
              label="Contact no"
              defaultValue="878797979797"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="category"
              label="Category"
              defaultValue="GEN"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="allocated_category"
              label="Allocated Category"
              defaultValue="OPEN"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="date"
              name="date_of_birth"
              defaultValue="2005-04-12"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="gender"
              label="Gender"
              defaultValue="M"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="preparatory"
              label="Preparatory"
              defaultValue="Yes"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="divyang"
              label="Divyang"
              defaultValue="no"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="number"
              name="aadhar_number"
              label="Aadhar Number"
              defaultValue="21617637816"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="country"
              label="Country"
              defaultValue="India"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="state"
              label="State"
              defaultValue="Jharkhand"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="city"
              label="City"
              defaultValue="Dhanbad"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="number"
              name="pincode"
              label="Pincode"
              defaultValue="500097"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="permanent_address_line_1"
              label="Permanent Address Line 1"
              defaultValue="test"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="permanent_address_line_2"
              label="Permanent Address Line 2"
              defaultValue="test"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Blood Group</Typography>
            <Select
              name="blood_group"
              defaultValue="B+"
              fullWidth
              margin="normal"
            >
              <MenuItem value="A+">A+</MenuItem>
              <MenuItem value="B+">B+</MenuItem>
              <MenuItem value="AB+">AB+</MenuItem>
              <MenuItem value="O+">O+</MenuItem>
              <MenuItem value="O-">O-</MenuItem>
              <MenuItem value="A-">A-</MenuItem>
              <MenuItem value="B-">B-</MenuItem>
              <MenuItem value="AB-">AB-</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Religion</Typography>
            <Select
              name="religion"
              defaultValue="HINDU"
              fullWidth
              margin="normal"
            >
              <MenuItem value="HINDU">HINDU</MenuItem>
              <MenuItem value="MUSLIM">MUSLIM</MenuItem>
              <MenuItem value="CHRISTIAN">CHRISTIAN</MenuItem>
              <MenuItem value="SIKH">SIKH</MenuItem>
              <MenuItem value="BAUDDHIST">BAUDDHIST</MenuItem>
              <MenuItem value="JAIN">JAIN</MenuItem>
              <MenuItem value="PARSI">PARSI</MenuItem>
              <MenuItem value="YAHUDI">YAHUDI</MenuItem>
              <MenuItem value="OTHERS">OTHERS</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="birth_place"
              label="Birth Place"
              defaultValue="Mumbai"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="file"
              name="uploaded_photo"
              fullWidth
              margin="normal"
              sx={{ display: 'block' }}
              InputLabelProps={{ shrink: true }}
              label="Uploaded photo"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="file"
              name="uploaded_signature"
              fullWidth
              margin="normal"
              sx={{ display: 'block' }}
              InputLabelProps={{ shrink: true }}
              label="Uploaded signature"
            />
          </Grid>
        </Grid>
        
        <Button type="submit" disabled={isSubmitting} variant="contained">
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </StyledForm>
    </Wrapper>
  );
};

export default AddPersonalDetails;
