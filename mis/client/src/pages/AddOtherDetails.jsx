// import React from 'react';
import { Form, useNavigate, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { toast } from 'react-toastify';
import { Button, TextField, Typography, Select, MenuItem, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { Button, TextField, Typography ,Select, MenuItem} from '@mui/material';
import { styled  } from '@mui/system';
import customFetch from '../utils/customFetch';



const StyledForm = styled(Form)({
  maxWidth: '1300px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
});

const StyledSelectWrapper = styled('div')({
  marginBottom: '20px',
});

const StyledTitle = styled(Typography)({
  fontSize: '24px',
  marginBottom: '20px',
});

const StyledTextField = styled(TextField)({
  marginBottom: '20px',
});

const AddOtherDetails = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isSubmitting = navigation.state === 'submitting';

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("college_email",localStorage.getItem("user_email"));
    try {
      await customFetch.post('/temp-other-details', formData);
      console.log(formData);
      toast.success('saved sports');
      navigate('/AddParentDetails'); // Using navigation to redirect
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTitle variant="h4">Other Details</StyledTitle>
        
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <StyledTextField
              type="text"
              name="name_in_hindi"
              label="Name in Hindi"
              defaultValue="आर्यन"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledSelectWrapper>
              <Typography variant="subtitle1">Marital Status</Typography>
              <Select
                name="marital_status"
                defaultValue="Unmarried"
                fullWidth
                margin="normal"
              >
                <MenuItem value="Unmarried">Unmarried</MenuItem>
                <MenuItem value="Married">Married</MenuItem>
                <MenuItem value="Divorced">Divorced</MenuItem>
              </Select>
            </StyledSelectWrapper>
          </Grid>
          <Grid item xs={6}>
            <StyledSelectWrapper>
              <Typography variant="subtitle1">Kashmiri Immigrant</Typography>
              <Select
                name="kashmiri_immigrant"
                defaultValue="No"
                fullWidth
                margin="normal"
              >
                <MenuItem value="No">No</MenuItem>
                <MenuItem value="Yes">Yes</MenuItem>
              </Select>
            </StyledSelectWrapper>
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              type="text"
              name="identification_mark"
              label="Identification Mark"
              defaultValue="Mole on left cheek"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              type="text"
              name="extra_curricular_activities"
              label="Extra Curricular Activities"
              defaultValue="Debating, Drama"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              type="text"
              name="other_relevant_info"
              label="Other Relevant Info"
              defaultValue="Participated in state-level science fair"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              type="text"
              name="favorite_past_time"
              label="Favorite Past Time"
              defaultValue="Reading books"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              type="text"
              name="hobbies"
              label="Hobbies"
              defaultValue="Photography, Swimming"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              type="text"
              name="admission_based_on"
              label="Admission based on"
              defaultValue="Jee Advanced"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              type="text"
              name="course_code"
              label="Course Code"
              defaultValue="C345"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              type="text"
              name="course"
              label="Course"
              defaultValue="b.tech"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              type="text"
              name="branch"
              label="Branch"
              defaultValue="Cse"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              type="number"
              name="jee_advanced_rank"
              label="JEE Advanced Rank"
              defaultValue="1234"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              type="number"
              name="jee_advanced_category_rank"
              label="JEE Advanced Category Rank"
              defaultValue="56"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              type="text"
              name="bank_name_of_student"
              label="Bank Name of Student"
              defaultValue="State Bank of India"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              type="number"
              name="account_no_of_student"
              label="Account Number of Student"
              defaultValue="1234567890"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              type="number"
              name="confirm_account_no_of_student"
              label="Confirm Account Number of Student"
              defaultValue="1234567890"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              type="text"
              name="ifsc_code_of_student"
              label="IFSC Code of Student"
              defaultValue="SBIN0001234"
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

export default AddOtherDetails;
