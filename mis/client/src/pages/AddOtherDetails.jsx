import { Form, useNavigate, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { toast } from 'react-toastify';
import { Button, TextField, Typography, Select, MenuItem, Grid } from '@mui/material';
import { styled } from '@mui/system';
import customFetch from '../utils/customFetch';
import { useEffect, useState } from 'react';

const StyledForm = styled(Form)({
  maxWidth: '1300px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
});
const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgb(145, 85, 253)', // Border color
    },
  },
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
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgb(145, 85, 253)', // Border color
    },
  },
});

const CustomButton = styled(Button)({
  backgroundColor: 'rgb(145, 85, 253)', // Background color
  width: '150px', // Reduced width
});

const AddOtherDetails = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isSubmitting = navigation.state === 'submitting';
  const [jeea, setJeea] = useState(null);
  const [formData, setFormData] = useState({
    name_in_hindi: '',
    marital_status: '',
    kashmiri_immigrant: '',
    identification_mark: '',
    extra_curricular_activities: '',
    other_relevent_info: '',
    favourite_past_time: '',
    hobbies: '',
    jee_advanced_rank: '',
    jee_advanced_category_rank: '',
    bank_name_of_student: '',
    account_no_of_student: '',
    confirm_account_no_of_student: '',
    ifsc_code_of_student: ''
  });

  useEffect(() => {
    const fetchJeea = async () => {
      try {
        const email = localStorage.getItem("user_email");
        const response = await customFetch.get('/jeeas/' + email);
        const data = response.data;
        console.log("Fetched jeea: ", data);// Assuming the response is in JSON format
        setJeea(data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchJeea();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = localStorage.getItem("user_email");
        const response = await customFetch.get('/temp-other-details/' + email);
        const data = response.data;
        console.log("Fetched data: ", data);// Assuming the response is in JSON format
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
      navigate('/AddPersonalDetails');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };


  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    const newValue = type === 'file' ? files[0] : value;
    console.log(newValue);
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("college_email", localStorage.getItem("user_email"));
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
          {jeea ? Object.entries(jeea).map(([key, value]) => {
            if (['admission_based_on', 'course_code', 'course', 'branch'].includes(key)) {
              return (
                <Grid item xs={6} key={key}>
                  <TextField
                    type="text"
                    name={key}
                    label={key.replace(/_/g, ' ')}
                    value={value}
                    fullWidth
                    margin="normal"
                    onChange={handleChange}
                    disabled={key !== 'blood_group' && key !== 'religion' ? true : false}
                  />
                </Grid>
              );
            } else {
              return null;
            }
          }) : null}
          <Grid item xs={6}>
            <StyledTextField
              type="text"
              name="name_in_hindi"
              label="Name in Hindi"
              value={formData.name_in_hindi}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledSelectWrapper>
              <Typography variant="subtitle1">Marital Status</Typography>
              <Select
                name="marital_status"
                value={formData.marital_status}
                onChange={handleChange}
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
                value={formData.kashmiri_immigrant}
                onChange={handleChange}
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
              value={formData.identification_mark}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              type="text"
              name="extra_curricular_activities"
              label="Extra Curricular Activities"
              value={formData.extra_curricular_activities}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              type="text"
              name="other_relevent_info"
              label="Other Relevant Info"
              value={formData.other_relevent_info}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              type="text"
              name="favourite_past_time"
              label="Favorite Past Time"
              value={formData.favourite_past_time}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              type="text"
              name="hobbies"
              label="Hobbies"
              value={formData.hobbies}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          {/* <Grid item xs={6}>
            <StyledTextField
              type="text"
              name="admission_based_on"
              label="Admission based on"
              value={formData.admission_based_on}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              type="text"
              name="course_code"
              label="Course Code"
              value={formData.course_code}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              type="text"
              name="course"
              label="Course"
              value={formData.course}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              type="text"
              name="branch"
              label="Branch"
              value={formData.branch}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid> */}
          <Grid item xs={6}>
            <StyledTextField
              type="number"
              name="jee_advanced_rank"
              label="JEE Advanced Rank"
              value={formData.jee_advanced_rank}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              type="number"
              name="jee_advanced_category_rank"
              label="JEE Advanced Category Rank"
              value={formData.jee_advanced_category_rank}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              type="text"
              name="bank_name_of_student"
              label="Bank Name of Student"
              value={formData.bank_name_of_student}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              type="number"
              name="account_no_of_student"
              label="Account Number of Student"
              value={formData.account_no_of_student}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              type="number"
              name="confirm_account_no_of_student"
              label="Confirm Account Number of Student"
              value={formData.confirm_account_no_of_student}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              type="text"
              name="ifsc_code_of_student"
              label="IFSC Code of Student"
              value={formData.ifsc_code_of_student}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>

        </Grid>

        <Grid container justifyContent="space-between">
          <Grid item>
            <CustomButton onClick={goBack} disabled={isSubmitting} variant="contained">
              Back
            </CustomButton>
          </Grid>
          <Grid item>
            <CustomButton type="submit" disabled={isSubmitting} variant="contained">
              {isSubmitting ? 'Submitting...' : 'Save and Next'}
            </CustomButton>
          </Grid>
        </Grid>
      </StyledForm>
    </Wrapper>
  );
};

export default AddOtherDetails;
