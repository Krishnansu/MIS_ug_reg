import React, { useState, useEffect } from 'react';
import { Form, useNavigate, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { toast } from 'react-toastify';
import { Button, TextField, Typography, Select, MenuItem, Grid } from '@mui/material';
import { styled } from '@mui/system';
// import customFetch from 'your-custom-fetch-library'; // Import your custom fetch library
import customFetch from '../utils/customFetch'

const StyledForm = styled(Form)({
  width: '100%',
  maxWidth: '1300px', // Adjust this value as needed
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

const AddPersonalDetails = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  console.log(navigation);
  const isSubmitting = navigation.state === 'submitting';
  const [formData, setFormData] = useState({
    jee_main_application_no: '',
    institute_name: '',
    first_name: '',
    middle_name: '',
    last_name: '',
    email: '',
    contact_no: '',
    category: '',
    allocated_category: '',
    date_of_birth: '',
    gender: '',
    preparatory: '',
    divyang: '',
    blood_group: 'B+',
    religion: 'HINDU',
    birth_place: '',
    uploaded_photo: null,
    uploaded_signature: null,
    aadhar_number: '',
    country: '',
    state: '',
    city: '',
    pincode: '',
    permanent_address_line_1: '',
    permanent_address_line_2: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = localStorage.getItem("user_email");
        const response = await customFetch.get('/temp-cca-ecas/' + email);
        const data = response.data; // Assuming the response is in JSON format
        setFormData(data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once on component mount

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    const newValue = type === 'file' ? files[0] : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  // const [selectedPhoto, setSelectedPhoto] = useState(null); // For uploaded_photo
  // const [selectedSignature, setSelectedSignature] = useState(null);


  // const handleFileChange1 = (event) => {
  //   setSelectedPhoto(event.target.files[0]);
  //   console.log(selectedPhoto);
  // };

  // const handleFileChange2 = (event) => {
  //   setSelectedSignature(event.target.files[0]);
  //   console.log(selectedSignature);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("college_email",localStorage.getItem("user_email"));
    console.log(formData);
    // const data = Object.fromEntries(formData);
    // console.log(data);

    try {
      await customFetch.post('/temp-personal-details', formData);
      // console.log(formData);
      toast.success('saved sports');
      navigate('/AddOtherDetails');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit} encType='multipart/form-data'>
        <StyledTitle variant="h4">Personal Details</StyledTitle>
        <Grid container spacing={2}>
          {Object.entries(formData).map(([key, value]) => {
            if (['jee_main_application_no', 'institute_name', 'first_name', 'middle_name', 'last_name', 'email', 'contact_no', 'category', 'allocated_category', 'date_of_birth', 'gender', 'preparatory', 'divyang'].includes(key)) {
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
          })}
          <Grid item xs={6}>
            <TextField
              type="number"
              name="aadhar_number"
              label="Aadhar Number"
              fullWidth
              margin="normal"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="country"
              label="Country"
              fullWidth
              margin="normal"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="state"
              label="State"
              fullWidth
              margin="normal"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="city"
              label="City"
              fullWidth
              margin="normal"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="number"
              name="pincode"
              label="Pincode"
              fullWidth
              margin="normal"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="permanent_address_line_1"
              label="Permanent Address Line 1"
              fullWidth
              margin="normal"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="permanent_address_line_2"
              label="Permanent Address Line 2"
              fullWidth
              margin="normal"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Blood Group</Typography>
            <Select
              name="blood_group"
              fullWidth
              margin="normal"
              onChange={handleChange}
              value={formData.blood_group}
            >
              <MenuItem value="A+">A+</MenuItem>
              <MenuItem value="B+">B+</MenuItem>
              <MenuItem value="AB+">AB+</MenuItem>
              <MenuItem value="O+">O+</MenuItem>
              <MenuItem value="O-">O-</MenuItem>
              <MenuItem value="A-">A-</MenuItem>
              <MenuItem value="B-">B-</MenuItem>
              <MenuItem value="AB-">AB-</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Religion</Typography>
            <Select
              name="religion"
              fullWidth
              margin="normal"
              onChange={handleChange}
              value={formData.religion}
            >
              <MenuItem value="HINDU">HINDU</MenuItem>
              <MenuItem value="MUSLIM">MUSLIM</MenuItem>
              <MenuItem value="CHRISTIAN">CHRISTIAN</MenuItem>
              <MenuItem value="SIKH">SIKH</MenuItem>
              <MenuItem value="BAUDDHIST">BAUDDHIST</MenuItem>
              <MenuItem value="JAIN">JAIN</MenuItem>
              <MenuItem value="PARSI">PARSI</MenuItem>
              <MenuItem value="YAHUDI">YAHUDI</MenuItem>
              <MenuItem value="OTHERS">OTHERS</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="birth_place"
              label="Birth Place"
              fullWidth
              margin="normal"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="file"
              name="uploaded_photo"
              fullWidth
              margin="normal"
              sx={{ display: 'block' }}
              InputLabelProps={{ shrink: true }}
              label="Uploaded photo"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="file"
              name="uploaded_signature"
              fullWidth
              margin="normal"
              sx={{ display: 'block' }}
              InputLabelProps={{ shrink: true }}
              label="Uploaded signature"
              onChange={handleChange}
            />
          </Grid>
        {/* </Grid> */}
          
        </Grid>
        

        <Button type="submit" disabled={isSubmitting} variant="contained">
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </StyledForm>
    </Wrapper>
  );
};

export default AddPersonalDetails;
