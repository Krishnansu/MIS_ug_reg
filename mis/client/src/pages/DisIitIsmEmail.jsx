import  { useState, useEffect } from 'react';
import { Form } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, TextField, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import customFetch from '../utils/customFetch'; // Import your custom fetch library

const StyledForm = styled(Form)({
  width: '100%',
  maxWidth: '1300px', // Adjust this value as needed
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
});

const StyledTitle = styled(Typography)({
  fontSize: '24px',
  marginBottom: '20px',
});

const DisIitIsmEmail = () => {
  const [emailData, setEmailData] = useState({
    email_username: '',
    email_password: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = localStorage.getItem("user_email");
        const response = await customFetch.get('/temp-fee-details/' + email);
        const data = response.data; 
        setEmailData({
          email_username: data.email_username,
          email_password: data.email_password
        });
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <StyledForm>
      <StyledTitle variant="h4">Email Details</StyledTitle>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            type="text"
            name="email_username"
            label="Email Username"
            value={emailData.email_username}
            fullWidth
            margin="normal"
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="text"
            name="email_password"
            label="Email Password"
            value={emailData.email_password}
            fullWidth
            margin="normal"
            disabled
          />
        </Grid>
      </Grid>
      <Button variant="contained" disabled>
        Submit
      </Button>
    </StyledForm>
  );
};

export default DisIitIsmEmail
