import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Typography, Grid, TextField, Paper, Container } from '@mui/material';
import { styled } from '@mui/system';
import customFetch from '../utils/customFetch'; // Import your custom fetch library

const StyledContainer = styled(Paper)({
  padding: '20px',
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
          ccaEcaData: excludeId(ccaEcaResponse.data),
          personalDetailsData: excludeId(personalDetailsResponse.data),
          otherDetailsData: excludeId(otherDetailsResponse.data),
          parentDetailsData: excludeId(parentDetailsResponse.data),
          educationDetailsData: excludeId(educationDetailsResponse.data),
          hostelDetailsData: excludeId(hostelDetailsResponse.data),
          emailData: {
            email_username: emailResponse.data.email_username,
            email_password: emailResponse.data.email_password,
          },
          feeData: excludeId(feeResponse.data),
        });
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchData();
  }, []);

  const excludeId = (data) => {
    const { id, ...rest } = data;
    return rest;
  };

  return (
    <Container>
      <StyledContainer>
        <Typography variant="h4">CCA ECA Details</Typography>
        <Grid container spacing={2}>
          {Object.entries(userData.ccaEcaData).map(([key, value]) => (
            <Grid item xs={6} key={key}>
              <TextField
                type="text"
                label={key}
                value={value}
                fullWidth
                margin="normal"
                disabled
              />
            </Grid>
          ))}
        </Grid>
      </StyledContainer>

      <StyledContainer>
        <Typography variant="h4">Personal Details</Typography>
        <Grid container spacing={2}>
          {Object.entries(userData.personalDetailsData).map(([key, value]) => (
            <Grid item xs={6} key={key}>
              <TextField
                type="text"
                label={key}
                value={value}
                fullWidth
                margin="normal"
                disabled
              />
            </Grid>
          ))}
        </Grid>
      </StyledContainer>

      <StyledContainer>
        <Typography variant="h4">Other Details</Typography>
        <Grid container spacing={2}>
          {Object.entries(userData.otherDetailsData).map(([key, value]) => (
            <Grid item xs={6} key={key}>
              <TextField
                type="text"
                label={key}
                value={value}
                fullWidth
                margin="normal"
                disabled
              />
            </Grid>
          ))}
        </Grid>
      </StyledContainer>

      <StyledContainer>
        <Typography variant="h4">Parent Details</Typography>
        <Grid container spacing={2}>
          {Object.entries(userData.parentDetailsData).map(([key, value]) => (
            <Grid item xs={6} key={key}>
              <TextField
                type="text"
                label={key}
                value={value}
                fullWidth
                margin="normal"
                disabled
              />
            </Grid>
          ))}
        </Grid>
      </StyledContainer>

      <StyledContainer>
        <Typography variant="h4">Education Details</Typography>
        <Grid container spacing={2}>
          {Object.entries(userData.educationDetailsData).map(([key, value]) => (
            <Grid item xs={6} key={key}>
              <TextField
                type="text"
                label={key}
                value={value}
                fullWidth
                margin="normal"
                disabled
              />
            </Grid>
          ))}
        </Grid>
      </StyledContainer>

      <StyledContainer>
        <Typography variant="h4">Hostel Details</Typography>
        <Grid container spacing={2}>
          {Object.entries(userData.hostelDetailsData).map(([key, value]) => (
            <Grid item xs={6} key={key}>
              <TextField
                type="text"
                label={key}
                value={value}
                fullWidth
                margin="normal"
                disabled
              />
            </Grid>
          ))}
        </Grid>
      </StyledContainer>

      <StyledContainer>
        <Typography variant="h4">Email Details</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              type="text"
              label="Email Username"
              value={userData.emailData.email_username}
              fullWidth
              margin="normal"
              disabled
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              label="Email Password"
              value={userData.emailData.email_password}
              fullWidth
              margin="normal"
              disabled
            />
          </Grid>
        </Grid>
      </StyledContainer>

      <StyledContainer>
        <Typography variant="h4">Fee Details</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              type="text"
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
              label="Transaction ID"
              value={userData.feeData.transaction_id}
              fullWidth
              margin="normal"
              disabled
            />
          </Grid>
        </Grid>
      </StyledContainer>
    </Container>
  );
};

export default UserProfile;
