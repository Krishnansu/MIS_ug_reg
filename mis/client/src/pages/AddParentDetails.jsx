// import React from 'react';
import { Form, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { toast } from 'react-toastify';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    // await customFetch.post('/auth/register', data);
    console.log(data);
    toast.success('Parent Details saved');
    return redirect('/AddEducationDetails');
  } catch (error) {
    toast.error(error?.response?.data?.msg);

    return error;
  }
};

const StyledForm = styled(Form)({
  width: '100vw',
  maxWidth: '100%', // Set width to 100% to fit the screen width
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
});

const AddParentDetails = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <StyledForm method="post" className="form">
        <Typography variant="h4">Parent Details</Typography>
        <Grid container spacing={2}>
          
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              name="father_name"
              label="Father's Name"
              defaultValue="John Doe"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              name="mother_name"
              label="Mother's Name"
              defaultValue="Jane Doe"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              name="father_occupation"
              label="Father's Occupation"
              defaultValue="Engineer"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              name="mother_occupation"
              label="Mother's Occupation"
              defaultValue="Teacher"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              name="father_income"
              label="Father's Income"
              defaultValue="80000"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              name="mother_income"
              label="Mother's Income"
              defaultValue="60000"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              name="parent_mobile_no"
              label="Parent's Mobile Number"
              defaultValue="1234567890"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="email"
              name="parent_email_id"
              label="Parent's Email ID"
              defaultValue="parent@example.com"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              name="guardian_name"
              label="Guardian's Name"
              defaultValue="David Smith"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              name="guardian_relation"
              label="Guardian's Relation"
              defaultValue="Uncle"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              name="alternate_mobile_no"
              label="Alternate Mobile Number"
              defaultValue="9876543210"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="email"
              name="alternate_email_id"
              label="Alternate Email ID"
              defaultValue="guardian@example.com"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              name="bank_name_of_parent"
              label="Bank Name of Parent"
              defaultValue="HDFC Bank"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              name="account_no_of_parent"
              label="Account Number of Parent"
              defaultValue="987654321012345"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              name="confirm_account_no_of_parent"
              label="Confirm Account Number of Parent"
              defaultValue="987654321012345"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              name="ifsc_code_of_parent"
              label="IFSC Code of Parent"
              defaultValue="HDFC0000123"
              fullWidth
              margin="normal"
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

export default AddParentDetails;
