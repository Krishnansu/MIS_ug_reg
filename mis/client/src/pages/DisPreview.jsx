import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Typography, Grid, Button, TextField } from '@mui/material';
import { styled } from '@mui/system';
import customFetch from '../utils/customFetch'; // Import your custom fetch library

const StyledForm = styled('div')({
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

const UserProfile = () => {
  const [userData, setUserData] = useState({
    ccaEcaData: {},
    personalDetailsData: {},
    otherDetailsData: {},
    parentDetailsData: {},
    educationDetailsData: {},
    hostelDetailsData: {},
    emailData: {
      email_username: '',
      email_password: '',
    },
    feeData: {
      fee_amount: '',
      fee_date: '',
      fee_mode: '',
      transaction_id: '',
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = localStorage.getItem("user_email");
        const ccaEcaResponse = await customFetch.get('/temp-cca-ecas/' + email);
        const personalDetailsResponse = await customFetch.get('/temp-personal-details/' + email);
        const otherDetailsResponse = await customFetch.get('/temp-other-details/' + email);
        const parentDetailsResponse = await customFetch.get('/temp-parent-details/' + email);
        const educationDetailsResponse = await customFetch.get('/temp-education-details/' + email);
        const hostelDetailsResponse = await customFetch.get('/temp-hostel-details/' + email);
        const emailResponse = await customFetch.get('/jeeas/' + email);
        const feeResponse = await customFetch.get('/jeeas/' + email);

        setUserData({
          ccaEcaData: ccaEcaResponse.data,
          personalDetailsData: personalDetailsResponse.data,
          otherDetailsData: otherDetailsResponse.data,
          parentDetailsData: parentDetailsResponse.data,
          educationDetailsData: educationDetailsResponse.data,
          hostelDetailsData: hostelDetailsResponse.data,
          emailData: {
            email_username: emailResponse.data.email_username,
            email_password: emailResponse.data.email_password,
          },
          feeData: feeResponse.data,
        });
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Typography variant="h4">CCA ECA Details</Typography>
      <Grid container spacing={2}>
        {Object.entries(userData.ccaEcaData).map(([key, value]) => (
          <Grid item xs={12} key={key}>
            <Typography>{key}: {value}</Typography>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4">Personal Details</Typography>
      <Grid container spacing={2}>
        {Object.entries(userData.personalDetailsData).map(([key, value]) => (
          <Grid item xs={12} key={key}>
            <Typography>{key}: {value}</Typography>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4">Other Details</Typography>
      <Grid container spacing={2}>
        {Object.entries(userData.otherDetailsData).map(([key, value]) => (
          <Grid item xs={12} key={key}>
            <Typography>{key}: {value}</Typography>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4">Parent Details</Typography>
      <Grid container spacing={2}>
        {Object.entries(userData.parentDetailsData).map(([key, value]) => (
          <Grid item xs={12} key={key}>
            <Typography>{key}: {value}</Typography>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4">Education Details</Typography>
      <Grid container spacing={2}>
        {Object.entries(userData.educationDetailsData).map(([key, value]) => (
          <Grid item xs={12} key={key}>
            <Typography>{key}: {value}</Typography>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4">Hostel Details</Typography>
      <Grid container spacing={2}>
        {Object.entries(userData.hostelDetailsData).map(([key, value]) => (
          <Grid item xs={12} key={key}>
            <Typography>{key}: {value}</Typography>
          </Grid>
        ))}
      </Grid>

      <StyledForm>
        <StyledTitle variant="h4">Email Details</StyledTitle>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type="text"
              name="email_username"
              label="Email Username"
              value={userData.emailData.email_username}
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
              value={userData.emailData.email_password}
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

      <StyledForm>
        <StyledTitle variant="h4">Fee Details</StyledTitle>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="fee_amount"
              label="Fee Amount"
              value={userData.feeData.fee_amount}
              fullWidth
              margin="normal"
              disabled
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="fee_date"
              label="Fee Date"
              value={userData.feeData.fee_date}
              fullWidth
              margin="normal"
              disabled
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="fee_mode"
              label="Fee Mode"
              value={userData.feeData.fee_mode}
              fullWidth
              margin="normal"
              disabled
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="transaction_id"
              label="Transaction ID"
              value={userData.feeData.transaction_id}
              fullWidth
              margin="normal"
              disabled
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" disabled>
          Submit
        </Button>
      </StyledForm>
    </div>
  );
};

export default UserProfile;
