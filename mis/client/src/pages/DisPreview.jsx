import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Typography, Grid, TextField, Paper, Container } from '@mui/material';
import { styled } from '@mui/system';
import customFetch from '../utils/customFetch'; // Import your custom fetch library

// Custom styled TextField component with border color
const CustomTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    border: `2px solid rgb(145, 85, 253)`, // Border color
    borderRadius: '4px', // Border radius
  },
});

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
          ccaEcaData: excludeFields(ccaEcaResponse.data, ['created_at', 'updated_at']),
          personalDetailsData: excludeFields(personalDetailsResponse.data, ['created_at', 'updated_at']),
          otherDetailsData: excludeFields(otherDetailsResponse.data, ['created_at', 'updated_at']),
          parentDetailsData: excludeFields(parentDetailsResponse.data, ['created_at', 'updated_at']),
          educationDetailsData: excludeFields(educationDetailsResponse.data, ['created_at', 'updated_at']),
          hostelDetailsData: excludeFields(hostelDetailsResponse.data, ['created_at', 'updated_at']),
          emailData: {
            email_username: emailResponse.data.email_username,
            email_password: emailResponse.data.email_password,
          },
          feeData: excludeFields(feeResponse.data, ['created_at', 'updated_at']),
        });
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchData();
  }, []);

  const excludeFields = (data, fieldsToExclude) => {
    const filteredData = { ...data };
    fieldsToExclude.forEach(field => {
      delete filteredData[field];
    });
    return filteredData;
  };

  return (
    <Container>
      <StyledContainer>
        <Typography variant="h4">CCA ECA Details</Typography>
        <Grid container spacing={2}>
          {Object.entries(userData.ccaEcaData).map(([key, value]) => (
            <Grid item xs={6} key={key}>
              <CustomTextField
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
              <CustomTextField
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
              <CustomTextField
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
              <CustomTextField
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
              <CustomTextField
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
              <CustomTextField
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
            <CustomTextField
              type="text"
              name="email_username"
              label="Email Username"
              value={userData.emailData.email_username}
              fullWidth
              margin="normal"
              disabled
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
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
      </StyledContainer>

      <StyledContainer>
        <Typography variant="h4">Fee Details</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CustomTextField
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
            <CustomTextField
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
            <CustomTextField
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
            <CustomTextField
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
      </StyledContainer>
    </Container>
  );
};

export default UserProfile;
