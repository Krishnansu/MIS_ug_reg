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
  marginRight: '10px', // Add margin to separate buttons
});

const AddHostelDetails = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isSubmitting = navigation.state === 'submitting';

  const [formData, setFormData] = useState({
    food_habit: '',
    laptop_details: '',
    model_no: '',
    serial_no: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = localStorage.getItem("user_email");
        const response = await customFetch.get('/temp-hostel-details/' + email);
        const data = response.data;
        console.log("Fetched data: ", data); // Assuming the response is in JSON format
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
      navigate('/AddEducationDetails');
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
      await customFetch.post('/temp-hostel-details', formData);
      console.log(formData);
      toast.success('Hostel Details saved');
      navigate('/DisIitIsmEmail');

    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTitle variant="h4">Add Hostel Details</StyledTitle>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <StyledTextField
              type="text"
              name="laptop_details"
              label="If Having laptop(Give Details)"
              value={formData.laptop_details}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              type="text"
              name="model_no"
              label="Model No"
              value={formData.model_no}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              type="text"
              name="serial_no"
              label="Serial No"
              value={formData.serial_no}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledSelectWrapper>
              <Typography variant="subtitle1">Food Habit</Typography>
              <Select
                name="food_habit"
                value={formData.food_habit}
                onChange={handleChange}
                fullWidth
                margin="normal"
              >
                <MenuItem value="Veg">Veg</MenuItem>
                <MenuItem value="Non-Veg">Non-Veg</MenuItem>
              </Select>
            </StyledSelectWrapper>
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

export default AddHostelDetails;
