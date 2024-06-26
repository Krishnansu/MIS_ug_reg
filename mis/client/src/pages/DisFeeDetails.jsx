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

const DisFeeDetails= () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  console.log(navigation);
  const isSubmitting = navigation.state === 'submitting';
  const [formData, setFormData] = useState({
    fee_amount: '',
    fee_date: '',
    fee_mode: '',
    transaction_id: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = localStorage.getItem("user_email");
        const response = await customFetch.get('/jeeas/' + email);
        const data = response.data; 
        setFormData(data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchData();
  }, []);

  const goBack = async (event) => {
    event.preventDefault();
    try {
      navigate('/DisIitIsmEmail');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      toast.success('Fee Details Saved');
      navigate('/DisPreview');
    } catch (error) {
      toast.error('Failed to submit form');
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledTitle variant="h4">Fee Details</StyledTitle>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            type="text"
            name="fee_amount"
            label="Fee Amount"
            value={formData.fee_amount}
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
            value={formData.fee_date}
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
            value={formData.fee_mode}
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
            value={formData.transaction_id}
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

export default DisFeeDetails
