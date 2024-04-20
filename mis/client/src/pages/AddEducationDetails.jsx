import { Form, useNavigate , useNavigation} from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { toast } from 'react-toastify';
import { Button, TextField, Typography, Grid } from '@mui/material';
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



const AddEducationDetails = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isSubmitting = navigation.state === 'submitting';

  const [formData, setFormData] = useState({
    name_of_examination_10: '',
    university_board_10: '',
    year_10: '', 
    institution_school_10: '',
    grade_percentage_10: '',
    division_10: '',
    major_subjects_10: '',
    uploaded_marksheet_10: null, 
    uploaded_certificate_10: null,

    name_of_examination_12: '',
    university_board_12: '',
    year_12: '', 
    institution_school_12: '',
    grade_percentage_12: '',
    division_12: '',
    major_subjects_12: '',
    migration_certificate_no: '', 
    uploaded_marksheet_12: null, 
    uploaded_certificate_12: null,
});

useEffect(() => {
  const fetchData = async () => {
    try {
      const email = localStorage.getItem("user_email");
      const response = await customFetch.get('/temp-education-details/' + email);
      const data = response.data; 
      console.log("Fetched data: ",data);// Assuming the response is in JSON format
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
      navigate('/AddParentDetails');
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
    formData.append("college_email",localStorage.getItem("user_email"));

    try {
      await customFetch.post('/temp-education-details', formData);
      console.log(formData);
      toast.success('saved sports');
      navigate('/AddHostelDetails');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit}>
        <Typography variant="h4">Add Education Details</Typography>
        
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="name_of_examination_10"
              label="Name of Examination 10"
              defaultValue="Secondary School Examination (Class X)"
              fullWidth
              margin="normal"
              value={formData.name_of_examination_10}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="university_board_10"
              label="University Board 10"
              defaultValue="CBSE"
              fullWidth
              margin="normal"
              value={formData.university_board_10}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="number"
              name="year_10"
              label="Year 10"
              defaultValue="2018"
              fullWidth
              margin="normal"
              value={formData.year_10}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="institution_school_10"
              label="Institution School 10"
              defaultValue="XYZ School"
              fullWidth
              margin="normal"
              value={formData.institution_school_10}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="grade_percentage_10"
              label="Grade Percentage 10"
              defaultValue="90"
              fullWidth
              margin="normal"
              value={formData.grade_percentage_10}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="division_10"
              label="Division 10"
              defaultValue="First"
              fullWidth
              margin="normal"
              value={formData.division_10}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="major_subjects_10"
              label="Major Subjects 10"
              defaultValue="English, Mathematics, Science, Social Science"
              fullWidth
              margin="normal"
              multiline
              value={formData.major_subjects_10}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="file"
              name="uploaded_marksheet_10"
              fullWidth
              margin="normal"
              sx={{ display: 'block' }}
              InputLabelProps={{ shrink: true }}
              label="Uploaded Marksheet 10"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="file"
              name="uploaded_certificate_10"
              fullWidth
              margin="normal"
              label="Uploaded Certificate 10"
              InputLabelProps={{ shrink: true }}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="name_of_examination_12"
              label="Name of Examination 12"
              defaultValue="Senior Secondary Examination (Class XII)"
              fullWidth
              margin="normal"
              value={formData.name_of_examination_12}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="university_board_12"
              label="University Board 12"
              defaultValue="CBSE"
              fullWidth
              margin="normal"
              value={formData.university_board_12}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="number"
              name="year_12"
              label="Year 12"
              defaultValue="2020"
              fullWidth
              margin="normal"
              value={formData.year_12}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="institution_school_12"
              label="Institution School 12"
              defaultValue="XYZ School"
              fullWidth
              margin="normal"
              value={formData.institution_school_12}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="grade_percentage_12"
              label="Grade Percentage 12"
              defaultValue="92"
              fullWidth
              margin="normal"
              value={formData.grade_percentage_12}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="division_12"
              label="Division 12"
              defaultValue="First"
              fullWidth
              margin="normal"
              value={formData.division_12}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="major_subjects_12"
              label="Major Subjects 12"
              defaultValue="Physics, Chemistry, Mathematics, English, Computer Science"
              fullWidth
              margin="normal"
              multiline
              value={formData.major_subjects_12}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="migration_certificate_no"
              label="Migration Certificate No"
              defaultValue="MIG123456"
              fullWidth
              margin="normal"
              value={formData.migration_certificate_no}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="file"
              name="uploaded_marksheet_12"
              fullWidth
              margin="normal"
              sx={{ display: 'block' }}
              InputLabelProps={{ shrink: true }}
              label="Uploaded Marksheet 12"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="file"
              name="uploaded_certificate_12"
              fullWidth
              margin="normal"
              label="Uploaded Certificate 12"
              InputLabelProps={{ shrink: true }}
              onChange={handleChange}
            />
          </Grid>

          {/* Add other fields similarly */}
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

export default AddEducationDetails;
