import  { useState, useEffect } from 'react';
import { Form, useNavigate, useNavigation } from 'react-router-dom';
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
  const navigation = useNavigation();
  const navigate = useNavigate();
  console.log(navigation);
  const isSubmitting = navigation.state === 'submitting';
  const [emailData, setEmailData] = useState({
    email_username: '',
    email_password: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = localStorage.getItem("user_email");
        const response = await customFetch.get('/jeeas/' + email);
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

  const goBack = async (event) => {
    event.preventDefault();
    try {
      navigate('/AddHostelDetails');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      toast.success('Form submitted successfully');
      navigate('/DisFeeDetails');
    } catch (error) {
      toast.error('Failed to submit form');
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
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
      <Button type="submit" disabled={isSubmitting} variant="contained">
          {isSubmitting ? 'Submitting...' : 'Save and Next'}
        </Button>
        <Button onClick={goBack}  disabled={isSubmitting} variant="contained">
          Back
        </Button>
    </StyledForm>
  );
};

export default DisIitIsmEmail
