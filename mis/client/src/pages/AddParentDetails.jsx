// import React from 'react';
import { Form, useNavigate, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { toast } from 'react-toastify';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import customFetch from '../utils/customFetch';
import { useEffect, useState } from 'react';



const StyledForm = styled(Form)({
  width: '100%',
  maxWidth: '1300px', // Adjust this value as needed
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
});

const AddParentDetails = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  console.log(navigation);
  const isSubmitting = navigation.state === 'submitting';

  const [formData, setFormData] = useState({
    father_name: '',
    mother_name: '',
    father_occupation: '',
    mother_occupation: '',
    father_income: '',
    mother_income: '', 
    parent_mobile_no: '',
    parent_email_id: '',
    guardian_name: '', 
    guardian_relation: '', 
    alternate_mobile_no: '',
    alternate_email_id: '',
    bank_name_of_parent: '',
    account_no_of_parent: '',
    confirm_account_no_of_parent: '',
    ifsc_code_of_parent: ''
});

useEffect(() => {
  const fetchData = async () => {
    try {
      const email = localStorage.getItem("user_email");
      const response = await customFetch.get('/temp-parent-details/' + email);
      const data = response.data; 
      console.log("Fetched data: ",data);// Assuming the response is in JSON format
      setFormData(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  fetchData();
}, []);

const handleChange = (event) => {
  const { name, value, type, files } = event.target;
  const newValue = type === 'file' ? files[0] : value;
  console.log(newValue);
  setFormData((prevData) => ({
    ...prevData,
    [name]: newValue,
  }));
};

const goBack = async (event) => {
  event.preventDefault();
  try {
    navigate('/AddOtherDetails');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
};

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("college_email",localStorage.getItem("user_email"));
    try {
      await customFetch.post('/temp-parent-details', formData);
      console.log(formData);
      toast.success('saved Parent Details');
      navigate('/AddEducationDetails'); // Using navigation to redirect
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  return (
    <Wrapper>
      <StyledForm method="post" className="form" onSubmit={handleSubmit}>
        <Typography variant="h4">Parent Details</Typography>
        <Grid container spacing={2}>
          {/* <Grid item xs={12} sm={6}>
            <TextField
              type="email"
              name="college_email"
              label="College Email"
              onChange={handleChange}
              value={formData.college_email}
              fullWidth
              margin="normal"
            />
          </Grid> */}
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              name="father_name"
              label="Father's Name"
              onChange={handleChange}
              value={formData.father_name}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              name="mother_name"
              label="Mother's Name"
              onChange={handleChange}
              value={formData.mother_name}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              name="father_occupation"
              label="Father's Occupation"
              onChange={handleChange}
              value={formData.father_occupation}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              name="mother_occupation"
              label="Mother's Occupation"
              onChange={handleChange}
              value={formData.mother_occupation}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              name="father_income"
              label="Father's Income"
              onChange={handleChange}
              value={formData.father_income}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              name="mother_income"
              label="Mother's Income"
              onChange={handleChange}
              value={formData.mother_income}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              name="parent_mobile_no"
              label="Parent's Mobile Number"
              onChange={handleChange}
              value={formData.parent_mobile_no}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="email"
              name="parent_email_id"
              label="Parent's Email ID"
              onChange={handleChange}
              value={formData.parent_email_id}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              name="guardian_name"
              label="Guardian's Name"
              onChange={handleChange}
              value={formData.guardian_name}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              name="guardian_relation"
              label="Guardian's Relation"
              onChange={handleChange}
              value={formData.guardian_relation}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              name="alternate_mobile_no"
              label="Alternate Mobile Number"
              onChange={handleChange}
              value={formData.alternate_mobile_no}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="email"
              name="alternate_email_id"
              label="Alternate Email ID"
              onChange={handleChange}
              value={formData.alternate_email_id}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              name="bank_name_of_parent"
              label="Bank Name of Parent"
              onChange={handleChange}
              value={formData.bank_name_of_parent}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              name="account_no_of_parent"
              label="Account Number of Parent"
              onChange={handleChange}
              value={formData.account_no_of_parent}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              name="confirm_account_no_of_parent"
              label="Confirm Account Number of Parent"
              onChange={handleChange}
              value={formData.confirm_account_no_of_parent}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              name="ifsc_code_of_parent"
              label="IFSC Code of Parent"
              onChange={handleChange}
              value={formData.ifsc_code_of_parent}
              fullWidth
              margin="normal"
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
    </Wrapper>
  );
};

export default AddParentDetails;
