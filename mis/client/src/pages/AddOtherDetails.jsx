// import React from 'react';
import { Form, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { toast } from 'react-toastify';
import { Button, TextField, Typography ,Select, MenuItem} from '@mui/material';
import { styled  } from '@mui/system';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    // await customFetch.post('/auth/register', data);
    console.log(data);
    toast.success('saved sports');
    return redirect('/AddParentDetails');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const StyledForm = styled(Form)({
  maxWidth: '400px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
});

const AddOtherDetails = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      // await customFetch.post('/auth/register', data);
      console.log(data);
      toast.success('saved sports');
      navigation.navigate('/AddParentDetails'); // Using navigation to redirect
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit}>
        <Typography variant="h4">Other Details</Typography>
        <TextField
          type="email"
          name="college_email"
          label="College Email"
          defaultValue="21je0xxx@iitism.ac.in"
          fullWidth
          margin="normal"
        />
        <TextField
  type="text"
  name="name_in_hindi"
  label="Name in Hindi"
  defaultValue="आर्यन"
  fullWidth
  margin="normal"
/>
<div style={{ marginBottom: '20px' }}>
  <Select
    name="marital_status"
    label="Marital Status"
    defaultValue="Unmarried"
    fullWidth
    margin="normal"
  >
    <MenuItem value="Unmarried">Unmarried</MenuItem>
    <MenuItem value="Married">Married</MenuItem>
    <MenuItem value="Divorced">Divorced</MenuItem>
  </Select>
</div>

<div style={{ marginBottom: '20px' }}>
  <Select
    name="kashmiri_immigrant"
    label="Kashmiri Immigrant"
    defaultValue="No"
    fullWidth
    margin="normal"
  >
    <MenuItem value="No">No</MenuItem>
    <MenuItem value="Yes">Yes</MenuItem>
  </Select>
</div>

<TextField
  type="text"
  name="identification_mark"
  label="Identification Mark"
  defaultValue="Mole on left cheek"
  fullWidth
  margin="normal"
/>
<TextField
  type="text"
  name="extra_curricular_activities"
  label="Extra Curricular Activities"
  defaultValue="Debating, Drama"
  fullWidth
  margin="normal"
/>
<TextField
  type="text"
  name="other_relevent_info"
  label="Other Relevant Info"
  defaultValue="Participated in state-level science fair"
  fullWidth
  margin="normal"
/>
<TextField
  type="text"
  name="favourite_past_time"
  label="Favorite Past Time"
  defaultValue="Reading books"
  fullWidth
  margin="normal"
/>
<TextField
  type="text"
  name="hobbies"
  label="Hobbies"
  defaultValue="Photography, Swimming"
  fullWidth
  margin="normal"
/>
<TextField
  type="text"
  name="admission_based_on"
  label="Admission based on"
  defaultValue="Jee Advanced"
  fullWidth
  margin="normal"
/>
<TextField
  type="text"
  name="course_code"
  label="Course Code"
  defaultValue="C345"
  fullWidth
  margin="normal"
/>
<TextField
  type="text"
  name="course"
  label="Course"
  defaultValue="b.tech"
  fullWidth
  margin="normal"
/>
<TextField
  type="text"
  name="branch"
  label="Branch"
  defaultValue="Cse"
  fullWidth
  margin="normal"
/>
<TextField
  type="number"
  name="jee_advanced_rank"
  label="JEE Advanced Rank"
  defaultValue="1234"
  fullWidth
  margin="normal"
/>
<TextField
  type="number"
  name="jee_advanced_category_rank"
  label="JEE Advanced Category Rank"
  defaultValue="56"
  fullWidth
  margin="normal"
/>
<TextField
  type="text"
  name="bank_name_of_student"
  label="Bank Name of Student"
  defaultValue="State Bank of India"
  fullWidth
  margin="normal"
/>
<TextField
  type="number"
  name="account_no_of_student"
  label="Account Number of Student"
  defaultValue="1234567890"
  fullWidth
  margin="normal"
/>
<TextField
  type="number"
  name="confirm_account_no_of_student"
  label="Confirm Account Number of Student"
  defaultValue="1234567890"
  fullWidth
  margin="normal"
/>
<TextField
  type="text"
  name="ifsc_code_of_student"
  label="IFSC Code of Student"
  defaultValue="SBIN0001234"
  fullWidth
  margin="normal"
/>

        <Button type="submit" disabled={isSubmitting} variant="contained">
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </StyledForm>
    </Wrapper>
  );
};

export default AddOtherDetails;
