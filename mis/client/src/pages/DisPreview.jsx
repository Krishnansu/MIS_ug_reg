import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Typography, Grid, TextField, Paper, Container, Button } from '@mui/material';
import { styled } from '@mui/system';
import customFetch from '../utils/customFetch'; // Import your custom fetch library
import { useNavigate, useNavigation } from 'react-router-dom';

const StyledContainer = styled(Paper)({
  padding: '20px',
  marginBottom: '20px',
});

const UserProfile = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  console.log(navigation);
  const isSubmitting = navigation.state === 'submitting';
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

  const goBack = async (event) => {
    event.preventDefault();
    try {
      navigate('/DisFeeDetails');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data={
        'college_email':localStorage.getItem("user_email")
      }
      await customFetch.post('/ug-registrations',data);
      toast.success('Form submitted successfully');
      navigate('/');
    } catch (error) {
      toast.error('Failed to submit form');
    }
  };

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
          ccaEcaData: excludeFields(ccaEcaResponse.data, ['created_at', 'updated_at', 'id']),
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
        <form onSubmit={handleSubmit}>
          <Button type="submit" disabled={isSubmitting} variant="contained">
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
        <Button onClick={goBack}  disabled={isSubmitting} variant="contained">
          Back
        </Button>
      </StyledContainer>
    </Container>
  );
};

export default UserProfile;
